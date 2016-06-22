/// <reference path="../core/Processing"/>

namespace pjs.math {
  "use strict"

  import PConstants = core.PConstants
  import InjectInto = utils.InjectInto
  import Deprecated = java.lang.Deprecated

  const {lerp, sq, isZero} = Maths,
        TAU = PConstants.TAU,
        argsErr = (mtd: string, len: number, min: number) => {
          throw `Too few args passed to ${mtd}() [${len} < ${min}].`
        },
        xyzObjCheck = (obj: {} | none): obj is xyzObj  => obj != null && 'x' in obj,
        pjsCheck    = (obj: {} | none): obj is PApplet => obj != null && 'random' in obj

  @InjectInto(PApplet) export class PVector implements Comparable<xyzObj>, Cloneable {
    constructor (public x: coord = 0, public y: coord = 0, public z: coord = 0) {}

    static fromAngle(angle: rad, target?: PVector) {
      return target && target.set (Math.cos(angle), Math.sin(angle))
                    || new PVector(Math.cos(angle), Math.sin(angle))
    }

    static random2D(target?: PVector | PApplet, parent?: PApplet) {
      const isPjs = pjsCheck(target),
            rnd = parent? parent : isPjs && target as PApplet || Math
      return PVector.fromAngle(TAU * rnd.random(), isPjs? void 0 : target as PVector)
    }

    static random3D(target?: PVector | PApplet, parent?: PApplet) {
      const isPjs = pjsCheck(target),
            rnd = parent? parent : isPjs && target as PApplet || Math,
            ang = TAU * rnd.random(),
            vz  = 2 * rnd.random() - 1,
            vzr = Math.sqrt(1 - vz*vz),
            vx  = vzr * Math.cos(ang),
            vy  = vzr * Math.sin(ang)
      return target && !isPjs? (target as PVector).set(vx, vy, vz) : new PVector(vx, vy, vz)
    }

    static dist(v1: xyzObj, v2: xyzObj) {
      return Math.sqrt(PVector.distSq(v1, v2))
    }

    static distSq(v1: xyzObj, v2: xyzObj) {
      return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z)
    }

    static dot(v1: xyzObj, v2: xyzObj) {
      return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z
    }

    static cross(v1: xyzObj, v2: xyzObj, target?: PVector) {
      const cx: coord = v1.y*v2.z - v2.y*v1.z,
            cy: coord = v1.z*v2.x - v2.z*v1.x,
            cz: coord = v1.x*v2.y - v2.x*v1.y
      return target && target.set(cx, cy, cz) || new PVector(cx, cy, cz)
    }

    static angleBetween(v1: PVector, v2: PVector,
                        magSq1?: number, magSq2?: number, dot?: number): rad {
      if (v1.isZero() || v2.isZero())  return 0
      //if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z)  return 0
      magSq1 = magSq1 || v1.magSq(), magSq2 = magSq2 || v2.magSq()
      dot = dot || PVector.dot(v1, v2)
      const amt = dot / Math.sqrt(magSq1 * magSq2)
      return amt <= -1? Math.PI : amt >= 1? 0 : Math.acos(amt)
    }

    static lerp(v1: PVector, v2: PVector, amt: norm, target?: PVector) {
      return (target && target.set(v1) || v1.clone()).lerp(v2, amt)
    }

    static add(v1: xyzObj, v2: xyzObj, target?: PVector) {
      return target && target.set (v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                    || new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
    }

    static sub(v1: xyzObj, v2: xyzObj, target?: PVector) {
      return target && target.set (v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                    || new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
    }

    static subInv(v1: xyzObj, v2: xyzObj, target?: PVector) {
      return target && target.set (v2.x - v1.x, v2.y - v1.y, v2.z - v1.z)
                    || new PVector(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z)
    }

    static mult(v: xyzObj, n: xyzObj | number, target?: PVector) {
      if (typeof n == 'number')  return target && target.set (v.x*n,   v.y*n,   v.z*n)
                                               || new PVector(v.x*n,   v.y*n,   v.z*n)
      else                       return target && target.set (v.x*n.x, v.y*n.y, v.z*n.z)
                                               || new PVector(v.x*n.x, v.y*n.y, v.z*n.z)
    }

    static div(v: xyzObj, n: xyzObj | number, target?: PVector) {
      if (typeof n == 'number')  return target && target.set (v.x/n,   v.y/n,   v.z/n)
                                               || new PVector(v.x/n,   v.y/n,   v.z/n)
      else                       return target && target.set (v.x/n.x, v.y/n.y, v.z/n.z)
                                               || new PVector(v.x/n.x, v.y/n.y, v.z/n.z)
    }

    static mod(v: xyzObj, n: xyzObj | number, target?: PVector) {
      if (typeof n == 'number')  return target && target.set (v.x%n,   v.y%n,   v.z%n)
                                               || new PVector(v.x%n,   v.y%n,   v.z%n)
      else                       return target && target.set (v.x%n.x, v.y%n.y, v.z%n.z)
                                               || new PVector(v.x%n.x, v.y%n.y, v.z%n.z)
    }

    static compare(a: xyzObj, b: xyzObj) { return a.x - b.x || a.y - b.y || a.z - b.z }
    compareTo(v: xyzObj) { return this.x - v.x || this.y - v.y || this.z - v.z }

    array() { return [this.x, this.y, this.z] as xyz }
    object() { return { x: this.x, y: this.y, z: this.z } }
    clone() { return new PVector(this.x, this.y, this.z) }
    copy() { return this.clone() }

    get(): PVector // @Deprecated
    get(target: number[]): xyz
    get(target: TypedArray): TypedArray
    get(target: ArrayLike<number>): PseudoArray<number>
    get(target: xyzObj): xyzObj
    get(target?: PseudoArray<number> | xyzObj): ArrayLike<number> | xyzObj {
      if (!arguments.length)          return this.clone() // @Deprecated
      if (typeof target != 'object')  return this.array()
      if (xyzObjCheck(target))  target.x  = this.x, target.y  = this.y, target.z  = this.z
      else                      target[0] = this.x, target[1] = this.y, target[2] = this.z
      return target
    }

    set(v: ArrayLike<number> | xyzObj | coord, y?: coord, z?: coord) {
      const len = arguments.length
      if (len > 1)        this.x = +v, this.y = +y, z != undefined && (this.z = +z)
      else if (len == 1)  this.set(v[0] || (v as xyzObj).x || 0,
                                   v[1] || (v as xyzObj).y || 0,
                                   v[2] || (v as xyzObj).z)
      else                argsErr('set', len, 1)
      return this
    }

    normalize(target?: PVector, mag?: number): this | PVector {
      const m = mag || this.mag(),
            canDivide = m != 0 && m != 1
      if (!arguments.length)  return canDivide && this.div(m) || this
      return canDivide? PVector.div(this, m, target)
                      : target && target.set(this) || this.clone()
    }

    limit(max: number, target?: PVector, magSq?: number): this | PVector {
      magSq = magSq || this.magSq()
      return magSq > max*max? this.normalize(target, Math.sqrt(magSq)).mult(max)
                            : target && target.set(this) || this
    }

    heading(): rad {
      //return -Math.atan2(-this.y, this.x)
      return Math.atan2(this.y, this.x)
    }

    @Deprecated heading2D() {
       return this.heading()
    }

    mag() {
      return Math.sqrt(this.magSq())
    }

    magSq() {
      //return sq(this.x) + sq(this.y) + sq(this.z)
      return this.x*this.x + this.y*this.y + this.z*this.z
    }

    setMag(target: PVector | number, length?: number, mag?: number): this {
      const len = arguments.length
      return len == 1? this.normalize().mult(target as number) :
             len >  1? this.normalize(target as PVector, mag).mult(length!) :
                       argsErr('setMag', len, 1) as any
    }

    rotate(angle: rad, target?: PVector): this | PVector {
      const c = Math.cos(angle),
            s = Math.sin(angle),
            x = c*this.x - s*this.y,
            y = s*this.x + c*this.y
      return target && target.set(x, y) || this.set(x, y)
    }

    rotateX(angle: rad, target?: PVector): this | PVector {
      const c = Math.cos(angle),
            s = Math.sin(angle),
            y = c*this.y - s*this.z,
            z = s*this.y + c*this.z
      return target && target.set(this.x, y, z) || this.set(this.x, y, z)
    }

    rotateY(angle: rad, target?: PVector): this | PVector {
      const c = Math.cos(angle),
            s = Math.sin(angle),
            x = s*this.z + c*this.x,
            z = c*this.z - s*this.x
      return target && target.set(x, this.y, z) || this.set(x, this.y, z)
    }

    rotateZ(angle: rad, target?: PVector) {
      return this.rotate(angle, target)
    }

    fromAngle(angle: rad, target?: PVector): this | PVector {
      return PVector.fromAngle(angle, target || this)
    }

    random2D(target?: PVector | PApplet, parent?: PApplet): this | PVector {
      return pjsCheck(target) && PVector.random2D(this, target)
                              || PVector.random2D(target || this, parent)
    }

    random3D(target?: PVector | PApplet, parent?: PApplet): this | PVector {
      return pjsCheck(target) && PVector.random3D(this, target)
                              || PVector.random3D(target || this, parent)
    }

    dist(v1: xyzObj, v2?: xyzObj) {
      return v2 && PVector.dist(v1, v2) || PVector.dist(this, v1)
    }

    distSq(v1: xyzObj, v2?: xyzObj) {
      return v2 && PVector.distSq(v1, v2) || PVector.distSq(this, v1)
    }

    dot(v: xyzObj | number, y?: xyzObj | number, z?: number) {
      const len = arguments.length
      return len == 1? PVector.dot(this, v as xyzObj) :
             len == 2? PVector.dot(v as xyzObj, y as xyzObj) :
             len >  2? this.x*(v as number) + this.y*(y as number) + this.z*z :
                       argsErr('dot', len, 1)!
    }

    cross(v1: xyzObj, v2?: PVector, target?: PVector): this | PVector {
      return target && PVector.cross(v1, v2!, target) || PVector.cross(this, v1, v2)
    }

    angleBetween(v: PVector, magSq1?: number, magSq2?: number, dot?: number) {
      return PVector.angleBetween(this, v, magSq1, magSq2, dot)
    }

    lerp(a: PVector | number, b: PVector | number, c?: number, d?: norm): this | PVector {
      let x: number, y: number, z: number, amt: norm
      const len = arguments.length
      if ((len | 1) == 1)  argsErr('lerp', len, 2)
      if (len == 2) { // given vector and amt
        const v = a as PVector
        x = v.x, y = v.y, z = v.z
        amt = b as norm
      } else if (len == 3) { // given vector 1, vector 2 and amt
        return PVector.lerp(a as PVector, b as PVector, c!)
      } else { // given x, y, z and amt
        x = a as number, y = b as number, z = c!, amt = d!
      }
      return this.set(lerp(this.x, x, amt), lerp(this.y, y, amt), lerp(this.z, z, amt))
    }

    add(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number): this | PVector {
      if (typeof y != 'number')  return PVector.add(v as xyzObj, y!, z as PVector)
      const len = arguments.length
      if (len == 1) // PVector.add(this, v as xyzObj, this)
        if (typeof v == 'number')  this.x += v,   this.y += v,   this.z += v
        else                       this.x += v.x, this.y += v.y, this.z += v.z
      else if (len > 1)  this.x += +v, this.y += y, z != undefined && (this.z += +z)
      else               argsErr('add', len, 1)
      return this
    }

    sub(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number): this | PVector {
      if (typeof y != 'number')  return PVector.sub(v as xyzObj, y!, z as PVector)
      const len = arguments.length
      if (len == 1) // PVector.sub(this, v as xyzObj, this)
        if (typeof v == 'number')  this.x -= v,   this.y -= v,   this.z -= v
        else                       this.x -= v.x, this.y -= v.y, this.z -= v.z
      else if (len > 1)  this.x -= +v, this.y -= y, z != undefined && (this.z -= +z)
      else               argsErr('sub', len, 1)
      return this
    }

    subInv(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number): this | PVector {
      if (typeof y != 'number')  return PVector.subInv(v as xyzObj, y!, z as PVector)
      const len = arguments.length
      if (len == 1) // PVector.subInv(this, v as xyzObj, this)
        if (typeof v == 'number')
          this.x = v - this.x, this.y = v - this.y, this.z = v - this.z
        else
          this.x = v.x - this.x, this.y = v.y - this.y, this.z = v.z - this.z
      else if (len > 1)
        this.x = +v - this.x, this.y = y - this.y, z != undefined && (this.z = +z - this.z)
      else
        argsErr('subInv', len, 1)
      return this
    }

    mult(v: xyzObj | number, n?: number, target?: PVector): this | PVector {
      const len = arguments.length
      if (len == 1)
        if (typeof v == 'number')  this.x *= v,   this.y *= v,   this.z *= v
        else                       this.x *= v.x, this.y *= v.y, this.z *= v.z
      else if (len > 1)  return PVector.mult(v as xyzObj, n!, target)
      else               argsErr('mult', len, 1)
      return this
    }

    div(v: xyzObj | number, n?: number, target?: PVector): this | PVector {
      const len = arguments.length
      if (len == 1)
        if (typeof v == 'number')  this.x /= v,   this.y /= v,   this.z /= v
        else                       this.x /= v.x, this.y /= v.y, this.z /= v.z
      else if (len > 1)  return PVector.div(v as xyzObj, n!, target)
      else               argsErr('div', len, 1)
      return this
    }

    mod(v: xyzObj | number, n?: number, target?: PVector): this | PVector {
      const len = arguments.length
      if (len == 1)
        if (typeof v == 'number')  this.x %= v,   this.y %= v,   this.z %= v
        else                       this.x %= v.x, this.y %= v.y, this.z %= v.z
      else if (len > 1)  return PVector.mod(v as xyzObj, n!, target)
      else               argsErr('mod', len, 1)
      return this
    }

    negate() {
      this.x *= -1, this.y *= -1, this.z *= -1
      return this
    }

    clear() {
      this.x = this.y = this.z = 0
      return this
    }

    isZero(tolerance?: norm) {
      return isZero(this.x, tolerance) && isZero(this.y, tolerance) && isZero(this.z, tolerance)
    }

    isNaN() { return this.x != this.x || this.y != this.y || this.z != this.z }
    toString() { return `[ ${this.x}, ${this.y}, ${this.z} ]` }
    valueOf() { return this.hashCode() }

    equals(o: Object) {
      return o == this? true : o instanceof PVector &&
             o.x == this.x && o.y == this.y && o.z == this.z
    }

    hashCode() {
      let hash = 1
      hash = 31*hash + this.x
      hash = 31*hash + this.y
      return 31*hash + this.z
    }
  }

  export declare class PVectorAlt extends PVector {}

  export function PVectorAltBuilder(p: PApplet) {
    "use strict"

    const {DEG_TO_RAD, RAD_TO_DEG} = PConstants

    return class PVectorAlt extends PVector {
      static fromAngle(angle: rad, target?: PVector) {
        p._degreeIn && (angle *= DEG_TO_RAD)
        return target && target.set(Math.cos(angle), Math.sin(angle))
                      || new PVectorAlt(Math.cos(angle), Math.sin(angle))
      }

      fromAngle(angle: rad, target?: PVector): this | PVector {
        return PVectorAlt.fromAngle(angle, target || this)
      }
    } as typeof PVectorAlt
  }
}
