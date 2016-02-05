namespace pjs.classes {
  "use strict"//; "use strong"

  const TAU = PConstants.TAU,
        lerp = Maths.lerp,
        sq = Maths.sq,
        argsErr = (mtd: string, len: number, min: number) => {
          throw `Too few args passed to ${mtd}() [${len} < ${min}].`
        }

  @Frozen export class PVector {
    constructor (public x: coord = 0, public y: coord = 0, public z: coord = 0) {}

    @Frozen static fromAngle(angle: rad, target?: PVector) {
      return target? target.set (Math.cos(angle), Math.sin(angle))
                   : new PVector(Math.cos(angle), Math.sin(angle))
    }

    static random2D(target?: PVector | Processing, parent?: Processing) {
      const isPjs = target && 'random' in target,
            rnd = parent? parent : isPjs? target as Processing : Math
      return PVector.fromAngle(TAU * rnd.random(), isPjs? undefined : target as PVector)
    }

    static random3D(target?: PVector | Processing, parent?: Processing) {
      const isPjs = target && 'random' in target,
            rnd = parent? parent : isPjs? target as Processing : Math,
            ang = TAU * rnd.random(),
            vz  = 2 * rnd.random() - 1,
            vzr = Math.sqrt(1 - vz*vz),
            vx  = vzr * Math.cos(ang),
            vy  = vzr * Math.sin(ang)
      return target && !isPjs? (target as PVector).set(vx, vy, vz) : new PVector(vx, vy, vz)
    }

    @Frozen static dist(v1: PVector, v2: PVector) {
      return Math.sqrt(PVector.distSq(v1, v2))
    }

    @Frozen static distSq(v1: PVector, v2: PVector) {
      return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z)
    }

    @Frozen static dot(v1: PVector, v2: PVector) {
      return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z
    }

    @Frozen static cross(v1: PVector, v2: PVector, target?: PVector) {
      const cx: coord = v1.y*v2.z - v2.y*v1.z,
            cy: coord = v1.z*v2.x - v2.z*v1.x,
            cz: coord = v1.x*v2.y - v2.x*v1.y
      return target? target.set(cx, cy, cz) : new PVector(cx, cy, cz)
    }

    @Frozen static angleBetween(v1: PVector, v2: PVector) {
      if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z)  return 0
      const amt = PVector.dot(v1, v2) / Math.sqrt(v1.magSq() * v2.magSq())
      return amt <= -1? Math.PI : amt >= 1? 0 : Math.acos(amt)
    }

    @Frozen static lerp(v1: PVector, v2: PVector, amt: norm) {
      return v1.copy().lerp(v2, amt)
    }

    @Frozen static add(v1: PVector, v2: PVector, target?: PVector) {
      return target? target.set (v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                   : new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
    }

    @Frozen static sub(v1: PVector, v2: PVector, target?: PVector) {
      return target? target.set (v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                   : new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
    }

    @Frozen static mult(v: PVector, n: PVector | number, target?: PVector) {
      if (typeof n === 'number')  return target? target.set (v.x*n,   v.y*n,   v.z*n)
                                               : new PVector(v.x*n,   v.y*n,   v.z*n)

      else                        return target? target.set (v.x*n.x, v.y*n.y, v.z*n.z)
                                               : new PVector(v.x*n.x, v.y*n.y, v.z*n.z)
    }

    @Frozen static div(v: PVector, n: PVector | number, target?: PVector) {
      if (typeof n === 'number')  return target? target.set (v.x/n,   v.y/n,   v.z/n)
                                               : new PVector(v.x/n,   v.y/n,   v.z/n)
      else                        return target? target.set (v.x/n.x, v.y/n.y, v.z/n.z)
                                               : new PVector(v.x/n.x, v.y/n.y, v.z/n.z)
    }

    @Frozen array() {
      return [this.x, this.y, this.z] as xyz
    }

    @Frozen copy() {
      return new PVector(this.x, this.y, this.z)
    }

    get(): PVector
    get(target: number[]): xyz
    get(target: TypedArray): TypedArray
    get(target: ArrayLike<number>): PseudoArray<number>
    @Frozen get(target?: PseudoArray<number>): PVector | ArrayLike<number> {
      if (!arguments.length)  return this.copy() // @Deprecated
      if (typeof target !== 'object')  return this.array()
      target[0] = this.x, target[1] = this.y, target[2] = this.z
      return target
    }

    @Frozen set(v: ArrayLike<number> | PVector | coord, y?: coord, z?: coord) {
      const len = arguments.length
      if (len > 1)         this.x = v as coord, this.y = y, len > 2 && (this.z = z)
      else if (len === 1)  this.set(v[0] || (v as PVector).x || 0,
                                    v[1] || (v as PVector).y || 0,
                                    v[2] || (v as PVector).z || undefined)
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

    @Frozen rotate(angle: rad) {
      const prev_x = this.x,
            c = Math.cos(angle),
            s = Math.sin(angle)
      this.x = c*prev_x - s*this.y
      this.y = s*prev_x + c*this.y
      return this
    }

    @Frozen dist(v1: PVector, v2?: PVector) {
      return v2? PVector.dist(v1, v2) : PVector.dist(this, v1)
    }

    @Frozen distSq(v1: PVector, v2?: PVector) {
      return v2? PVector.distSq(v1, v2) : PVector.distSq(this, v1)
    }

    @Frozen dot(v: PVector | number, y?: PVector | number, z?: number) {
      const len = arguments.length
      return len === 1? PVector.dot(this, v as PVector) :
             len === 2? PVector.dot(v as PVector, y as PVector) :
             len >   2? this.x*(v as number) + this.y*(y as number) + this.z*z :
                        argsErr('dot', len, 1)
    }

    @Frozen cross(v1: PVector, v2?: PVector, target?: PVector) {
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
      this.x = lerp(this.x, x, amt)
      this.y = lerp(this.y, y, amt)
      this.z = lerp(this.z, z, amt)
      return this
    }

    @Frozen add(v: PVector | number, y?: PVector | number, z?: PVector | number) {
      if (y instanceof PVector)  return PVector.add(v as PVector, y, z as PVector)
      else {
        const len = arguments.length
        if (len === 1) { // PVector.add(this, v as PVector, this)
          this.x += (v as PVector).x, this.y += (v as PVector).y, this.z += (v as PVector).z
        } else if (len > 1) {
          this.x += v as number, this.y += y, len > 2 && (this.z += z as number)
        } else argsErr('add', len, 1)
        return this
      }
    }

    @Frozen sub(v: PVector | number, y?: PVector | number, z?: PVector | number) {
      if (y instanceof PVector)  return PVector.sub(v as PVector, y, z as PVector)
      else {
        const len = arguments.length
        if (len === 1) { // PVector.sub(this, v as PVector, this)
          this.x -= (v as PVector).x, this.y -= (v as PVector).y, this.z -= (v as PVector).z
        } else if (len > 1) {
          this.x -= v as number, this.y -= y, len > 2 && (this.z -= z as number)
        } else argsErr('sub', len, 1)
        return this
      }
    }

    @Frozen mult(v: PVector | number, n?: number, target?: PVector) {
      const len = arguments.length
      if (len === 1) {
        if (typeof v === 'number')  this.x *= v,   this.y *= v,   this.z *= v
        else                        this.x *= v.x, this.y *= v.y, this.z *= v.z
        return this
      } else if (len > 1)  return PVector.mult(v as PVector, n, target)
      argsErr('mult', len, 1)
    }

    @Frozen div(v: PVector | number, n?: number, target?: PVector) {
      const len = arguments.length
      if (len === 1) {
        if (typeof v === 'number')  this.x /= v,   this.y /= v,   this.z /= v
        else                        this.x /= v.x, this.y /= v.y, this.z /= v.z
        return this
      } else if (len > 1)  return PVector.div(v as PVector, n, target)
      argsErr('div', len, 1)
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

  Object.freeze(Object.freeze(PVector.random2D).prototype)
  Object.freeze(Object.freeze(PVector.random3D).prototype)
}
