/// <reference path="../api/Maths.ts"/>
/// <reference path="../api/Processing.ts"/>

namespace pjs.classes {
  "use strict"//; "use strong"

  const TAU = PConstants.TAU,
        lerp = Maths.lerp,
        sq = Maths.sq,
        isZero = Maths.isZero,
        argsErr = (mtd: string, len: number, min: number) => {
          throw `Too few args passed to ${mtd}() [${len} < ${min}].`
        }

  @Frozen @InjectInto(Processing) export class PVector {
    constructor (public x: coord = 0, public y: coord = 0, public z: coord = 0) {}

    @Frozen static fromAngle(angle: rad, target?: PVector) {
      return target? target.set (Math.cos(angle), Math.sin(angle))
                   : new PVector(Math.cos(angle), Math.sin(angle))
    }

    @Frozen static random2D(target?: PVector | Processing, parent?: Processing) {
      const isPjs = target && 'random' in target,
            rnd = parent? parent : isPjs? target as Processing : Math
      return PVector.fromAngle(TAU * rnd.random(), isPjs? undefined : target as PVector)
    }

    @Frozen static random3D(target?: PVector | Processing, parent?: Processing) {
      const isPjs = target && 'random' in target,
            rnd = parent? parent : isPjs? target as Processing : Math,
            ang = TAU * rnd.random(),
            vz  = 2 * rnd.random() - 1,
            vzr = Math.sqrt(1 - vz*vz),
            vx  = vzr * Math.cos(ang),
            vy  = vzr * Math.sin(ang)
      return target && !isPjs? (target as PVector).set(vx, vy, vz) : new PVector(vx, vy, vz)
    }

    @Frozen static dist(v1: xyzObj, v2: xyzObj) {
      return Math.sqrt(PVector.distSq(v1, v2))
    }

    @Frozen static distSq(v1: xyzObj, v2: xyzObj) {
      return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z)
    }

    @Frozen static dot(v1: xyzObj, v2: xyzObj) {
      return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z
    }

    @Frozen static cross(v1: xyzObj, v2: xyzObj, target?: PVector) {
      const cx: coord = v1.y*v2.z - v2.y*v1.z,
            cy: coord = v1.z*v2.x - v2.z*v1.x,
            cz: coord = v1.x*v2.y - v2.x*v1.y
      return target? target.set(cx, cy, cz) : new PVector(cx, cy, cz)
    }

    @Frozen static angleBetween(v1: PVector, v2: PVector) {
      if (v1.isZero() || v2.isZero())  return 0
      //if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z)  return 0
      const amt = PVector.dot(v1, v2) / Math.sqrt(v1.magSq() * v2.magSq())
      return amt <= -1? Math.PI : amt >= 1? 0 : Math.acos(amt)
    }

    @Frozen static lerp(v1: PVector, v2: PVector, amt: norm) {
      return v1.copy().lerp(v2, amt)
    }

    @Frozen static add(v1: xyzObj, v2: xyzObj, target?: PVector) {
      return target? target.set (v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                   : new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
    }

    @Frozen static sub(v1: xyzObj, v2: xyzObj, target?: PVector) {
      return target? target.set (v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                   : new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
    }

    @Frozen static mult(v: xyzObj, n: xyzObj | number, target?: PVector) {
      if (typeof n === 'number')  return target? target.set (v.x*n,   v.y*n,   v.z*n)
                                               : new PVector(v.x*n,   v.y*n,   v.z*n)

      else                        return target? target.set (v.x*n.x, v.y*n.y, v.z*n.z)
                                               : new PVector(v.x*n.x, v.y*n.y, v.z*n.z)
    }

    @Frozen static div(v: xyzObj, n: xyzObj | number, target?: PVector) {
      if (typeof n === 'number')  return target? target.set (v.x/n,   v.y/n,   v.z/n)
                                               : new PVector(v.x/n,   v.y/n,   v.z/n)
      else                        return target? target.set (v.x/n.x, v.y/n.y, v.z/n.z)
                                               : new PVector(v.x/n.x, v.y/n.y, v.z/n.z)
    }

    @Frozen static mod(v: xyzObj, n: xyzObj | number, target?: PVector) {
      if (typeof n === 'number')  return target? target.set (v.x%n,   v.y%n,   v.z%n)
                                               : new PVector(v.x%n,   v.y%n,   v.z%n)
      else                        return target? target.set (v.x%n.x, v.y%n.y, v.z%n.z)
                                               : new PVector(v.x%n.x, v.y%n.y, v.z%n.z)
    }

    @Frozen array() {
      return [this.x, this.y, this.z] as xyz
    }

    @Frozen object() {
      return { x: this.x, y: this.y, z: this.z }
    }

    @Frozen copy() {
      return new PVector(this.x, this.y, this.z)
    }

    get(): PVector
    get(target: number[]): xyz
    get(target: TypedArray): TypedArray
    get(target: ArrayLike<number>): PseudoArray<number>
    @Frozen get(target?: PseudoArray<number>): PVector | ArrayLike<number> {
      if (arguments.length < 0)  return this.copy() // @Deprecated
      if (typeof target !== 'object')  return this.array()
      target[0] = this.x, target[1] = this.y, target[2] = this.z
      return target
    }

    @Frozen set(v: ArrayLike<number> | xyzObj | coord, y?: coord, z?: coord) {
      const len = arguments.length
      if (len > 1)         this.x = +v, this.y = +y, len > 2 && (this.z = +z)
      else if (len === 1)  this.set(v[0] || (v as xyzObj).x || 0,
                                    v[1] || (v as xyzObj).y || 0,
                                    v[2] || (v as xyzObj).z || undefined)
      else                 argsErr('set', len, 1)
      return this
    }

    @Frozen normalize(target?: PVector, mag?: number) {
      const m = mag || this.mag(),
            canDivide = m !== 0 && m !== 1
      if (!arguments.length)  return canDivide? this.div(m) : this
      return canDivide? PVector.div(this, m, target)
                      : target? target.set(this) : this.copy()
    }

    @Frozen limit(max: number, target?: PVector) {
      const magSq = this.magSq()
      return magSq > max*max? this.normalize(target, Math.sqrt(magSq)).mult(max)
                            : target? target.set(this) : this
    }

    @Frozen heading() {
      //return -Math.atan2(-this.y, this.x)
      return Math.atan2(this.y, this.x)
    }

    @Frozen heading2D() { // @Deprecated
       return this.heading()
    }

    @Frozen mag() {
      return Math.sqrt(this.magSq())
    }

    @Frozen magSq() {
      return sq(this.x) + sq(this.y) + sq(this.z)
    }

    @Frozen setMag(target: PVector | number, length?: number) {
      const len = arguments.length
      return len === 1? this.normalize().mult(target as number) :
             len >   1? this.normalize(target as PVector).mult(length) :
                        argsErr('setMag', len, 1)
    }

    @Frozen rotate(angle: rad, target?: PVector) {
      const c = Math.cos(angle),
            s = Math.sin(angle),
            x = c*this.x - s*this.y,
            y = s*this.x + c*this.y
      return target? target.set(x, y) : this.set(x, y)
    }

    @Frozen rotateX(angle: rad, target?: PVector) {
      const c = Math.cos(angle),
            s = Math.sin(angle),
            y = c*this.y - s*this.z,
            z = s*this.y + c*this.z
      return target? target.set(this.x, y, z) : this.set(this.x, y, z)
    }

    @Frozen rotateY(angle: rad, target?: PVector) {
      const c = Math.cos(angle),
            s = Math.sin(angle),
            x = s*this.z + c*this.x,
            z = c*this.z - s*this.x
      return target? target.set(x, this.y, z) : this.set(x, this.y, z)
    }

    @Frozen rotateZ(angle: rad, target?: PVector) {
      return this.rotate(angle, target)
    }

    @Frozen dist(v1: xyzObj, v2?: xyzObj) {
      return v2? PVector.dist(v1, v2) : PVector.dist(this, v1)
    }

    @Frozen distSq(v1: xyzObj, v2?: xyzObj) {
      return v2? PVector.distSq(v1, v2) : PVector.distSq(this, v1)
    }

    @Frozen dot(v: xyzObj | number, y?: xyzObj | number, z?: number) {
      const len = arguments.length
      return len === 1? PVector.dot(this, v as xyzObj) :
             len === 2? PVector.dot(v as xyzObj, y as xyzObj) :
             len >   2? this.x*(v as number) + this.y*(y as number) + this.z*z :
                        argsErr('dot', len, 1)
    }

    @Frozen cross(v1: xyzObj, v2?: PVector, target?: PVector) {
      return target? PVector.cross(v1, v2, target) : PVector.cross(this, v1, v2)
    }

    @Frozen angleBetween(v: PVector) {
      return PVector.angleBetween(this, v)
    }

    @Frozen lerp(a: PVector | number, b: PVector | number, c?: number, d?: norm): PVector {
      let x: number, y: number, z: number, amt: norm
      const len = arguments.length
      if ((len | 1) === 1)  argsErr('lerp', len, 2)
      if (len === 2) { // given vector and amt
        const v = a as PVector
        x = v.x, y = v.y, z = v.z
        amt = b as norm
      } else if (len === 3) { // given vector 1, vector 2 and amt
        return PVector.lerp(a as PVector, b as PVector, c)
      } else { // given x, y, z and amt
        x = a as number, y = b as number, z = c, amt = d
      }
      return this.set(lerp(this.x, x, amt), lerp(this.y, y, amt), lerp(this.z, z, amt))
    }

    @Frozen add(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number) {
      if (typeof y !== 'number')  return PVector.add(v as xyzObj, y, z as PVector)
      else {
        const len = arguments.length
        if (len === 1) { // PVector.add(this, v as xyzObj, this)
          this.x += (v as xyzObj).x, this.y += (v as xyzObj).y, this.z += (v as xyzObj).z
        } else if (len > 1) {
          this.x += +v, this.y += y, len > 2 && (this.z += +z)
        } else argsErr('add', len, 1)
        return this
      }
    }

    @Frozen sub(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number) {
      if (typeof y !== 'number')  return PVector.sub(v as xyzObj, y, z as PVector)
      else {
        const len = arguments.length
        if (len === 1) { // PVector.sub(this, v as xyzObj, this)
          this.x -= (v as xyzObj).x, this.y -= (v as xyzObj).y, this.z -= (v as xyzObj).z
        } else if (len > 1) {
          this.x -= v as number, this.y -= y, len > 2 && (this.z -= z as number)
        } else argsErr('sub', len, 1)
        return this
      }
    }

    @Frozen mult(v: xyzObj | number, n?: number, target?: PVector) {
      const len = arguments.length
      if (len === 1) {
        if (typeof v === 'number')  this.x *= v,   this.y *= v,   this.z *= v
        else                        this.x *= v.x, this.y *= v.y, this.z *= v.z
        return this
      } else if (len > 1)  return PVector.mult(v as xyzObj, n, target)
      argsErr('mult', len, 1)
    }

    @Frozen div(v: xyzObj | number, n?: number, target?: PVector) {
      const len = arguments.length
      if (len === 1) {
        if (typeof v === 'number')  this.x /= v,   this.y /= v,   this.z /= v
        else                        this.x /= v.x, this.y /= v.y, this.z /= v.z
        return this
      } else if (len > 1)  return PVector.div(v as xyzObj, n, target)
      argsErr('div', len, 1)
    }

    @Frozen mod(v: xyzObj | number, n?: number, target?: PVector) {
      const len = arguments.length
      if (len === 1) {
        if (typeof v === 'number')  this.x %= v,   this.y %= v,   this.z %= v
        else                        this.x %= v.x, this.y %= v.y, this.z %= v.z
        return this
      } else if (len > 1)  return PVector.mod(v as xyzObj, n, target)
      argsErr('mod', len, 1)
    }

    @Frozen negate() {
      this.x *= -1, this.y *= -1, this.z *= -1
      return this
    }

    @Frozen clear() {
      this.x = this.y = this.z = 0
      return this
    }

    @Frozen isZero(tolerance?: norm) {
      return isZero(this.x, tolerance) && isZero(this.y, tolerance) && isZero(this.z, tolerance)
    }

    @Frozen isNaN() {
      return this.x !== this.x || this.y !== this.y || this.z !== this.z
    }

    @Frozen toString() {
      return `[ ${this.x}, ${this.y}, ${this.z} ]`
    }

    @Frozen equals(o: Object) {
      return o === this? true : o instanceof PVector?
             o.x === this.x && o.y === this.y && o.z === this.z : false
    }

    @Frozen hashCode() {
      let hash = 1
      hash = 31*hash + this.x
      hash = 31*hash + this.y
      return 31*hash + this.z
    }
  }
}
