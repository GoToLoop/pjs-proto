/// <reference path="../core/Processing"/>

namespace pjs.math {
  "use strict"

  import PConstants = core.PConstants
  import InjectInto = utils.InjectInto

  export type Comparable<T> = java.lang.Comparable<T>
  export type Cloneable = java.lang.Cloneable

  const {lerp, sq, isZero} = Maths,
        TAU = PConstants.TAU,
        argsErr = (mtd: string, len: number, min: number) => {
          throw `Too few args passed to ${mtd}() [${len} < ${min}].`
        },
        xyzObjCheck = (obj: {} | none): obj is xyzObj  => obj != void 0 && 'z' in obj,
        pjsCheck    = (obj: {} | none): obj is PApplet => obj != void 0 && 'lerp' in obj

  @InjectInto(PApplet) export class PVector implements Comparable<xyzObj>, Cloneable {
    constructor (public x: coord = 0, public y: coord = 0, public z: coord = 0) {}

    static fromAngle(ang: rad, t?: PVector | null) {
      return t && t.set(Math.cos(ang), Math.sin(ang))
               || new this(Math.cos(ang), Math.sin(ang))
    }

    static random2D(t?: PVector | PApplet | null, p?: PApplet | null) {
      const isPjs = pjsCheck(t),
            rnd = p? p : isPjs && t as PApplet || Math
      return this.fromAngle(TAU * rnd.random(), isPjs? void 0 : t as PVector)
    }

    static random3D(t?: PVector | PApplet | null, p?: PApplet | null) {
      const isPjs = pjsCheck(t),
            rnd = p? p : isPjs && t as PApplet || Math,
            ang = TAU * rnd.random(),
            vz  = 2*rnd.random() - 1,
            vzr = Math.sqrt(1 - vz*vz),
            vx  = vzr * Math.cos(ang),
            vy  = vzr * Math.sin(ang)
      return t && !isPjs? (t as PVector).set(vx, vy, vz) : new this(vx, vy, vz)
    }

    static dist(v1: xyzObj, v2: xyzObj) {
      return Math.sqrt(this.distSq(v1, v2))
    }

    static distSq(v1: xyzObj, v2: xyzObj) {
      return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z)
    }

    static dot(v1: xyzObj, v2: xyzObj) {
      return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z
    }

    static cross(v1: xyzObj, v2: xyzObj, t?: PVector | null) {
      const cx: coord = v1.y*v2.z - v2.y*v1.z,
            cy: coord = v1.z*v2.x - v2.z*v1.x,
            cz: coord = v1.x*v2.y - v2.x*v1.y
      return t && t.set(cx, cy, cz) || new this(cx, cy, cz)
    }

    static angleBetween(v1: PVector, v2: PVector,
                        magSq1?: number, magSq2?: number, dot?: number): rad {
      if (v1.isZero() || v2.isZero())  return 0
      //if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z)  return 0
      magSq1 = magSq1 || v1.magSq(), magSq2 = magSq2 || v2.magSq()
      dot = dot || this.dot(v1, v2)
      const amt = dot / Math.sqrt(magSq1 * magSq2)
      return amt <= -1? Math.PI : amt >= 1? 0 : Math.acos(amt)
    }

    static lerp(v1: PVector, v2: PVector, amt: norm, t?: PVector | null) {
      return (t && t.set(v1) || v1.clone()).lerp(v2, amt)
    }

    static add(v1: xyzObj, v2: xyzObj, t?: PVector | null) {
      return t && t.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
               || new this(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
    }

    static sub(v1: xyzObj, v2: xyzObj, t?: PVector | null) {
      return t && t.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
               || new this(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
    }

    static mult(v: xyzObj, n: xyzObj | number, t?: PVector | null) {
      if (typeof n === 'object')  return t && t.set(v.x*n.x, v.y*n.y, v.z*n.z)
                                           || new this(v.x*n.x, v.y*n.y, v.z*n.z)
      else                        return t && t.set(v.x*n, v.y*n, v.z*n)
                                           || new this(v.x*n, v.y*n, v.z*n)
    }

    static div(v: xyzObj, n: xyzObj | number, t?: PVector | null) {
      if (typeof n === 'object')  return t && t.set(v.x/n.x, v.y/n.y, v.z/n.z)
                                           || new this(v.x/n.x, v.y/n.y, v.z/n.z)
      else                        return t && t.set(v.x/n, v.y/n, v.z/n)
                                           || new this(v.x/n, v.y/n, v.z/n)
    }

    static mod(v: xyzObj, n: xyzObj | number, t?: PVector | null) {
      if (typeof n === 'object')  return t && t.set(v.x%n.x, v.y%n.y, v.z%n.z)
                                           || new this(v.x%n.x, v.y%n.y, v.z%n.z)
      else                        return t && t.set(v.x%n, v.y%n, v.z%n)
                                           || new this(v.x%n, v.y%n, v.z%n)
    }

    static compare(a: xyzObj, b: xyzObj) { return a.x - b.x || a.y - b.y || a.z - b.z }
    compareTo(v: xyzObj) { return this.x - v.x || this.y - v.y || this.z - v.z }

    array()   { return [ this.x, this.y, this.z ] as xyz }
    object()  { return { x: this.x, y: this.y, z: this.z } }
    clone()   { return new this.constructor(this.x, this.y, this.z) }
    new()     { return new this.constructor }

    get(): PVector // @Deprecated
    get(t: number[] | null): xyz
    get(t: TypedArray): TypedArray
    get(t: ArrayLike<number>): PseudoArray<number>
    get(t: xyzObj): xyzObj

    get(t?: PseudoArray<number> | xyzObj | null) {
      if      (!t)               return t === void 0 && this.clone() || this.array()
      else if (xyzObjCheck(t))   t.x  = this.x, t.y  = this.y, t.z  = this.z
      else                       t[0] = this.x, t[1] = this.y, t[2] = this.z
      return t
    }

    set(v: ArrayLike<number> | xyzObj | coord, y?: coord, z?: coord) {
      if (y != void 0)  this.x = +v, this.y = +y, z != void 0 && (this.z = +z)
      else              this.set(v[0] || (v as xyzObj).x || 0,
                                 v[1] || (v as xyzObj).y || 0,
                                 v[2] || (v as xyzObj).z)
      return this
    }

    normalize(t?: PVector | null, mag?: number): PVector
    normalize(): this

    normalize(t?: PVector | null, mag?: number) {
      const m = +mag || this.mag(),
            canDivide = m === m && m !== 0 && m !== 1
      if (!arguments.length)  return canDivide && this.div(m) || this
      return canDivide? this.constructor.div(this, m, t)
                      : t && t.set(this) || this.clone()
    }

    limit(max: number, t: PVector | null, magSq?: number): PVector
    limit(max: number): this

    limit(max: number, t?: PVector | null, magSq?: number) {
      const mSq = magSq || this.magSq(),
            overMax = mSq > max*max
      t === null && (t = this.new())
      return !t? overMax && this.normalize().mult(max) || this
               : overMax && this.normalize(t, Math.sqrt(mSq)).mult(max) || t.set(this)
    }

    heading(): rad {
      //return -Math.atan2(-this.y, this.x)
      return Math.atan2(this.y, this.x)
    }

    mag() {
      return Math.sqrt(this.magSq())
    }

    magSq() {
      //return sq(this.x) + sq(this.y) + sq(this.z)
      return this.x*this.x + this.y*this.y + this.z*this.z
    }

    setMag(t: PVector | null, len: number, mag?: number): PVector
    setMag(t: number): this

    setMag(t: PVector | number | null, len?: number, mag?: number) {
      return typeof t === 'object'? this.normalize(t, mag).mult(len!)
                                  : this.normalize().mult(t)
    }

    rotate(ang: rad, t: PVector | null): PVector
    rotate(ang: rad): this

    rotate(ang: rad, t?: PVector | null) {
      const c = Math.cos(ang),
            s = Math.sin(ang),
            x = c*this.x - s*this.y,
            y = s*this.x + c*this.y
      t === null && (t = this.new())
      return (t || this).set(x, y)
    }

    rotateX(ang: rad, t: PVector | null): PVector
    rotateX(ang: rad): this

    rotateX(ang: rad, t?: PVector | null) {
      const c = Math.cos(ang),
            s = Math.sin(ang),
            y = c*this.y - s*this.z,
            z = s*this.y + c*this.z
      t === null && (t = this.new())
      return (t || this).set(this.x, y, z)
    }

    rotateY(ang: rad, t: PVector | null): PVector
    rotateY(ang: rad): this

    rotateY(ang: rad, t?: PVector | null) {
      const c = Math.cos(ang),
            s = Math.sin(ang),
            x = s*this.z + c*this.x,
            z = c*this.z - s*this.x
      t === null && (t = this.new())
      return (t || this).set(x, this.y, z)
    }

    fromAngle(ang: rad, t: PVector | null): PVector
    fromAngle(ang: rad): this

    fromAngle(ang: rad, t?: PVector | null) {
      return this.constructor.fromAngle(ang, t || this)
    }

    random2D(t: PVector | null, p?: PApplet): PVector
    random2D(p?: PApplet): this

    random2D(t?: PVector | PApplet | null, p?: PApplet) {
      return pjsCheck(t) && this.constructor.random2D(this, t)
                         || this.constructor.random2D(t === void 0 && this || t, p)
    }

    random3D(t: PVector | null, p?: PApplet): PVector
    random3D(p?: PApplet): this

    random3D(t?: PVector | PApplet | null, p?: PApplet) {
      return pjsCheck(t) && this.constructor.random3D(this, t)
                         || this.constructor.random3D(t === void 0 && this || t, p)
    }

    dist(v1: xyzObj, v2?: xyzObj) {
      return v2? this.constructor.dist(v1, v2) : this.constructor.dist(this, v1)
    }

    distSq(v1: xyzObj, v2?: xyzObj) {
      return v2? this.constructor.distSq(v1, v2) : this.constructor.distSq(this, v1)
    }

    dot(v: xyzObj | number, y?: xyzObj | number, z?: number) {
      return typeof v !== 'object'? this.x*v + this.y*+y + this.z*z :
                    y == void 0? this.constructor.dot(this, v)
                               : this.constructor.dot(v, y as xyzObj)
    }

    cross(v1: xyzObj, v2?: PVector, t?: PVector | null) {
      return t && this.constructor.cross(v1, v2!, t) || this.constructor.cross(this, v1, v2)
    }

    angleBetween(v: PVector, magSq1?: number, magSq2?: number, dot?: number) {
      return this.constructor.angleBetween(this, v, magSq1, magSq2, dot)
    }

    lerp(a: PVector | number, b: number, c?: number, d?: norm): this
    lerp(a: PVector, b: PVector, c: norm): PVector

    lerp(a: PVector | number, b: PVector | number, c?: number, d?: norm) {
      let x: number, y: number, z: number, amt: norm
      const len = arguments.length
      if ((len | 1) === 1)  argsErr('lerp', len, 2)
      if (len === 2) { // given vector and amt
        ({x, y, z} = a as PVector), amt = b as norm
      } else if (len === 3) { // given vector 1, vector 2 and amt
        return this.constructor.lerp(a as PVector, b as PVector, c!)
      } else { // given x, y, z and amt
        [x, y, z, amt] = arguments
      }
      return this.set(lerp(this.x, x, amt), lerp(this.y, y, amt), lerp(this.z, z, amt))
    }

    add(x: number, y?: number, z?: number): this
    add(v: xyzObj): this
    add(v1: xyzObj, v2: xyzObj, t?: PVector | null): PVector

    add(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number | null) {
      if (y != void 0) {
        if (typeof y === 'object')       return this.constructor.add(v as xyzObj, y, z as PVector)
        this.x += +v, this.y += +y, z != void 0 && (this.z += +z)
      } else if (typeof v === 'object')  this.x += v.x, this.y += v.y, this.z += v.z
        else                             this.x += +v,  this.y += +v,  this.z += +v
      return this
    }

    sub(x: number, y?: number, z?: number): this
    sub(v: xyzObj): this
    sub(v1: xyzObj, v2: xyzObj, t?: PVector | null): PVector

    sub(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number | null) {
      if (y != void 0) {
        if (typeof y === 'object')       return this.constructor.sub(v as xyzObj, y, z as PVector)
        this.x -= +v, this.y -= y, z != void 0 && (this.z -= +z)
      } else if (typeof v === 'object')  this.x -= v.x, this.y -= v.y, this.z -= v.z
        else                             this.x -= v,   this.y -= v,   this.z -= v
      return this
    }

    mult(v: xyzObj | number): this
    mult(v: xyzObj, n: number, t?: PVector | null): PVector

    mult(v: xyzObj | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.mult(v as xyzObj, n, t)
      if (typeof v === 'object')  this.x *= v.x, this.y *= v.y, this.z *= v.z
      else                        this.x *= v,   this.y *= v,   this.z *= v
      return this
    }

    div(v: xyzObj | number): this
    div(v: xyzObj, n: number, t?: PVector | null): PVector

    div(v: xyzObj | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.div(v as xyzObj, n, t)
      if (typeof v === 'object')  this.x /= v.x, this.y /= v.y, this.z /= v.z
      else                        this.x /= v,   this.y /= v,   this.z /= v
      return this
    }

    mod(v: xyzObj | number): this
    mod(v: xyzObj, n: number, t?: PVector | null): PVector

    mod(v: xyzObj | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.mod(v as xyzObj, n, t)
      if (typeof v === 'object')  this.x %= v.x, this.y %= v.y, this.z %= v.z
      else                        this.x %= v,   this.y %= v,   this.z %= v
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

    isNaN() { return this.x !== this.x || this.y !== this.y || this.z !== this.z }
    toString() { return `[ ${this.x}, ${this.y}, ${this.z} ]` }
    valueOf() { return this.x }

    hashCode() { return this.x + this.y + this.z }
    equals(o: {}) {
      return o === this? true : o instanceof PVector &&
             o.x === this.x && o.y === this.y && o.z === this.z
    }
  }

  export interface PVector {
    constructor: typeof PVector
    copy(): PVector
    heading2D(): rad // @Deprecated
    rotateZ(ang: rad, t: PVector | null): PVector
    rotateZ(ang: rad): this
  }

  PVector.prototype.copy = PVector.prototype.clone
  PVector.prototype.heading2D = PVector.prototype.heading
  PVector.prototype.rotateZ = PVector.prototype.rotate

  export declare class PVectorDeg extends PVector {}

  export function PVectorDegBuilder(p: PApplet) {
    const {DEG_TO_RAD, RAD_TO_DEG} = PConstants

    return class PVectorDeg extends PVector {
      static fromAngle(ang: rad, t?: PVector | null) {
        p._degreeIn && (ang *= DEG_TO_RAD)
        return t && t.set(Math.cos(ang), Math.sin(ang))
                 || new this(Math.cos(ang), Math.sin(ang))
      }
    } as typeof PVectorDeg
  }
}
