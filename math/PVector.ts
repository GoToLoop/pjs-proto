/// <reference path="../core/Processing.ts"/>

namespace pjs.math {
  import PConstants = core.PConstants
  import InjectInto = utils.InjectInto

  export type Comparable<T> = java.lang.Comparable<T>
  export type Cloneable = java.lang.Cloneable

  const {lerp, sq, isZero} = Maths,
        TAU = PConstants.TAU,
        argsErr = (mtd: string, len: number, min: number) => {
          throw `Too few args passed to ${mtd}() [${len} < ${min}].`
        },
        xyzProp = 'z', pjsProp = 'noLoop', vecProp = 'magSq',
        xyzObj = (obj: object | none): obj is xyz => obj != void 0 && xyzProp in obj,
        pjsObj = (obj: object | none): obj is PApplet => obj != void 0 && pjsProp in obj,
        vecClass = (c: Function | none): c is typeof PVector => c != void 0 && vecProp in c

  @InjectInto(PApplet)
  export class PVector implements Comparable<xyz>, Cloneable {
    constructor (public x: coord = 0, public y: coord = 0, public z: coord = 0) {}

    static fromAngle(ang: rad, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return t.set(Math.cos(ang), Math.sin(ang))
    }

    static random2D(t?: PVector | PApplet | null, p?: PApplet | null) {
      const vec = vecClass(this) && this || PVector,
            isPjs = pjsObj(t),
            rnd = p? p : isPjs && t as PApplet || Math
      return vec.fromAngle(TAU * rnd.random(), isPjs? void 0 : t as PVector)
    }

    static random3D(t?: PVector | PApplet | null, p?: PApplet | null) {
      const isPjs = pjsObj(t),
            rnd = p? p : isPjs && t as PApplet || Math,
            ang = TAU * rnd.random(),
            vz  = 2*rnd.random() - 1,
            vzr = Math.sqrt(1 - vz*vz),
            vx  = vzr * Math.cos(ang),
            vy  = vzr * Math.sin(ang)
      return t && !isPjs? (t as PVector).set(vx, vy, vz)
                        : new (vecClass(this) && this || PVector)(vx, vy, vz)
    }

    static dist(v1: xyz, v2: xyz) {
      return Math.sqrt((vecClass(this) && this || PVector).distSq(v1, v2))
    }

    static distSq(v1: xyz, v2: xyz) {
      return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z)
    }

    static dot(v1: xyz, v2: xyz) {
      return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z
    }

    static cross(v1: xyz, v2: xyz, t?: PVector | null) {
      const cx: coord = v1.y*v2.z - v2.y*v1.z,
            cy: coord = v1.z*v2.x - v2.z*v1.x,
            cz: coord = v1.x*v2.y - v2.x*v1.y
      return t && t.set(cx, cy, cz) || new (vecClass(this) && this || PVector)(cx, cy, cz)
    }

    static angleBetween(v1: PVector, v2: PVector,
                        magSq1?: number, magSq2?: number, dot?: number): rad {
      if (v1.isZero() || v2.isZero())  return 0
      //if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z)  return 0
      magSq1 || (magSq1 = v1.magSq()), magSq2 || (magSq2 = v2.magSq())
      dot || (dot = (vecClass(this) && this || PVector).dot(v1, v2))
      const amt = dot / Math.sqrt(magSq1 * magSq2)
      return amt <= -1? Math.PI : amt >= 1? 0 : Math.acos(amt)
    }

    static lerp(v1: PVector, v2: PVector, amt: norm, t?: PVector | null) {
      return (t && t.set(v1) || v1.clone()).lerp(v2, amt)
    }

    static add(v1: xyz, v2: xyz, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return t.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
    }

    static sub(v1: xyz, v2: xyz, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return t.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
    }

    static mult(v: xyz, n: xyz | number, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return typeof n === 'object'? t.set(v.x*n.x, v.y*n.y, v.z*n.z)
                                  : t.set(v.x*n, v.y*n, v.z*n)
    }

    static div(v: xyz, n: xyz | number, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return typeof n === 'object'? t.set(v.x/n.x, v.y/n.y, v.z/n.z)
                                  : t.set(v.x/n, v.y/n, v.z/n)
    }

    static mod(v: xyz, n: xyz | number, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return typeof n === 'object'? t.set(v.x%n.x, v.y%n.y, v.z%n.z)
                                  : t.set(v.x%n, v.y%n, v.z%n)
    }

    static pow(v: xyz, n: xyz | number, t?: PVector | null) {
      t || (t = vecClass(this) && new this || new PVector)
      return typeof n === 'object'? t.set(v.x**n.x, v.y**n.y, v.z**n.z)
                                  : t.set(v.x**n, v.y**n, v.z**n)
    }

    static compare(a: xyz, b: xyz) { return a.x - b.x || a.y - b.y || a.z - b.z }
    compareTo(v: xyz) { return this.x - v.x || this.y - v.y || this.z - v.z }

    array()  { return [ this.x, this.y, this.z ] as xyzArr }
    floats() { return Float32Array.of(this.x, this.y, this.z) }
    object() { return { x: this.x, y: this.y, z: this.z } as xyz }
    clone()  { return new this.constructor(this.x, this.y, this.z) }

    get(): PVector // @Deprecated
    get(t: number[] | null): xyzArr
    get(t: TypedArray): TypedArray
    get(t: ArrayLike<number>): PseudoArray<number>
    get(t: xyz): xyz

    get(t?: PseudoArray<number> | xyz | null) {
      if      (!t)         return t === void 0 && this.clone() || this.array()
      else if (xyzObj(t))  t.x  = this.x, t.y  = this.y, t.z  = this.z
      else                 t[0] = this.x, t[1] = this.y, t[2] = this.z
      return t
    }

    set(v: ArrayLike<number> | xyz | coord, y?: coord, z?: coord) {
      if (y != void 0)  this.x = +v, this.y = +y, z != void 0 && (this.z = +z)
      else              this.set(v[0] || (v as xyz).x || 0,
                                 v[1] || (v as xyz).y || 0,
                                 v[2] || (v as xyz).z)
      return this
    }

    normalize(t?: PVector | null, mag?: number): PVector
    normalize(): this

    normalize(t?: PVector | null, mag?: number) {
      const m = +mag! || this.mag(),
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
      t === null && (t = new this.constructor)
      return !t? overMax && this.normalize().mult(max) || this
               : overMax && this.normalize(t, Math.sqrt(mSq)).mult(max) || t.set(this)
    }

    heading() {
      //return -Math.atan2(-this.y, this.x)
      return Math.atan2(this.y, this.x) as rad
    }

    mag() {
      return Math.sqrt(this.magSq())
    }

    magSq() {
      //return sq(this.x) + sq(this.y) + sq(this.z)
      return this.x*this.x + this.y*this.y + this.z*this.z
      //return this.x**2 + this.y**2 + this.z**2
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
      t === null && (t = new this.constructor)
      return (t || this).set(x, y)
    }

    rotateX(ang: rad, t: PVector | null): PVector
    rotateX(ang: rad): this

    rotateX(ang: rad, t?: PVector | null) {
      const c = Math.cos(ang),
            s = Math.sin(ang),
            y = c*this.y - s*this.z,
            z = s*this.y + c*this.z
      t === null && (t = new this.constructor)
      return (t || this).set(this.x, y, z)
    }

    rotateY(ang: rad, t: PVector | null): PVector
    rotateY(ang: rad): this

    rotateY(ang: rad, t?: PVector | null) {
      const c = Math.cos(ang),
            s = Math.sin(ang),
            x = s*this.z + c*this.x,
            z = c*this.z - s*this.x
      t === null && (t = new this.constructor)
      return (t || this).set(x, this.y, z)
    }

    fromAngle(ang: rad, t: PVector | null): PVector
    fromAngle(ang: rad): this

    fromAngle(ang: rad, t?: PVector | null) {
      return this.constructor.fromAngle(ang, t || this)
    }

    random2D(t: PVector | null, p?: PApplet | null): PVector
    random2D(p?: PApplet): this

    random2D(t?: PVector | PApplet | null, p?: PApplet | null) {
      return pjsObj(t) && this.constructor.random2D(this, t)
                       || this.constructor.random2D(t === void 0 && this || t, p)
    }

    random3D(t: PVector | null, p?: PApplet | null): PVector
    random3D(p?: PApplet): this

    random3D(t?: PVector | PApplet | null, p?: PApplet | null) {
      return pjsObj(t) && this.constructor.random3D(this, t)
                       || this.constructor.random3D(t === void 0 && this || t, p)
    }

    dist(v1: xyz, v2?: xyz | null) {
      return v2? this.constructor.dist(v1, v2) : this.constructor.dist(this, v1)
    }

    distSq(v1: xyz, v2?: xyz | null) {
      return v2? this.constructor.distSq(v1, v2) : this.constructor.distSq(this, v1)
    }

    dot(v: xyz | number, y?: xyz | number | null, z?: number) {
      return typeof v !== 'object'? this.x*v + this.y*+y! + this.z*z! :
                    y == void 0? this.constructor.dot(this, v)
                               : this.constructor.dot(v, y as xyz)
    }

    cross(v1: xyz, v2?: PVector | null, t?: PVector | null) {
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

    add(x: number, y?: number | null, z?: number): this
    add(v: xyz): this
    add(v1: xyz, v2: xyz, t?: PVector | null): PVector

    add(v: xyz | number, y?: xyz | number | null, z?: PVector | number | null) {
      if (y != void 0) {
        if (typeof y === 'object')       return this.constructor.add(v as xyz, y, z as PVector)
        this.x += +v, this.y += +y, z != void 0 && (this.z += +z)
      } else if (typeof v === 'object')  this.x += v.x, this.y += v.y, this.z += v.z
        else                             this.x += +v,  this.y += +v,  this.z += +v
      return this
    }

    sub(x: number, y?: number | null, z?: number): this
    sub(v: xyz): this
    sub(v1: xyz, v2: xyz, t?: PVector | null): PVector

    sub(v: xyz | number, y?: xyz | number | null, z?: PVector | number | null) {
      if (y != void 0) {
        if (typeof y === 'object')       return this.constructor.sub(v as xyz, y, z as PVector)
        this.x -= +v, this.y -= y, z != void 0 && (this.z -= +z)
      } else if (typeof v === 'object')  this.x -= v.x, this.y -= v.y, this.z -= v.z
        else                             this.x -= v,   this.y -= v,   this.z -= v
      return this
    }

    mult(v: xyz | number): this
    mult(v: xyz, n: number, t?: PVector | null): PVector

    mult(v: xyz | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.mult(v as xyz, n, t)
      if (typeof v === 'object')  this.x *= v.x, this.y *= v.y, this.z *= v.z
      else                        this.x *= v,   this.y *= v,   this.z *= v
      return this
    }

    div(v: xyz | number): this
    div(v: xyz, n: number, t?: PVector | null): PVector

    div(v: xyz | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.div(v as xyz, n, t)
      if (typeof v === 'object')  this.x /= v.x, this.y /= v.y, this.z /= v.z
      else                        this.x /= v,   this.y /= v,   this.z /= v
      return this
    }

    mod(v: xyz | number): this
    mod(v: xyz, n: number, t?: PVector | null): PVector

    mod(v: xyz | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.mod(v as xyz, n, t)
      if (typeof v === 'object')  this.x %= v.x, this.y %= v.y, this.z %= v.z
      else                        this.x %= v,   this.y %= v,   this.z %= v
      return this
    }

    pow(v: xyz | number): this
    pow(v: xyz, n: number, t?: PVector | null): PVector

    pow(v: xyz | number, n?: number, t?: PVector | null) {
      if (n != void 0)            return this.constructor.pow(v as xyz, n, t)
      if (typeof v === 'object')  this.x **= v.x, this.y **= v.y, this.z **= v.z
      else                        this.x **= v,   this.y **= v,   this.z **= v
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
    equals(o: object) {
      return o === this? true : o instanceof PVector &&
             o.x === this.x && o.y === this.y && o.z === this.z
    }
  }

  export interface PVector {
    constructor: typeof PVector
    __proto__: PVector
    copy(): PVector
    heading2D(): rad // @Deprecated
    rotateZ(ang: rad, t: PVector | null): PVector
    rotateZ(ang: rad): this
  }

  PVector.prototype.copy = PVector.prototype.clone
  PVector.prototype.heading2D = PVector.prototype.heading // @Deprecated
  PVector.prototype.rotateZ = PVector.prototype.rotate

  export declare class PVectorDeg extends PVector {}

  export function PVectorDegBuilder(p: PApplet) {
    const {DEG_TO_RAD, RAD_TO_DEG} = PConstants

    return class PVectorDeg extends PVector {
      static fromAngle(ang: ang, t?: PVector | null) {
        p._degreeIn && (ang *= DEG_TO_RAD)
        t || (t = new this)
        return t.set(Math.cos(ang), Math.sin(ang))
      }
    } as typeof PVectorDeg
  }
}
