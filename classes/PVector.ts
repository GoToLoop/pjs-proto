namespace pjs.classes {
  "use strict"//; "use strong"

  const TAU = 2 * Math.PI,
        lerp = Maths.lerp,
        sq = Maths.sq,
        argsErr = (mtd: string, len: number, min: number) => {
          throw 'Too few args passed to ' + mtd + '() [' + len + ' < ' + min + '].'
        }

  export class PVector {
    constructor (public x = 0, public y = 0, public z = 0) {}

    static fromAngle(angle: number, target?: PVector) {
      return target? target.set (Math.cos(angle), Math.sin(angle))
                   : new PVector(Math.cos(angle), Math.sin(angle))
    }

    static random2D(target?: PVector | Processing, parent?: Processing) {
      const isPjs = target && 'random' in target,
            rnd = parent? parent : isPjs? <Processing> target : Math
      return PVector.fromAngle(TAU * rnd.random(), isPjs? undefined : <PVector> target)
    }

    static random3D(target?: PVector | Processing, parent?: Processing) {
      const isPjs = target && 'random' in target,
            rnd = parent? parent : isPjs? <Processing> target : Math,
            ang = TAU * rnd.random(),
            vz  = 2 * rnd.random() - 1,
            vzr = Math.sqrt(1 - vz*vz),
            vx  = vzr * Math.cos(ang),
            vy  = vzr * Math.sin(ang)
      return target && !isPjs? (<PVector> target).set(vx, vy, vz) : new PVector(vx, vy, vz)
    }

    static dist(v1: PVector, v2: PVector) {
      return Math.sqrt(PVector.distSq(v1, v2))
    }

    static distSq(v1: PVector, v2: PVector) {
      return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z)
    }

    static dot(v1: PVector, v2: PVector) {
      return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z
    }

    static cross(v1: PVector, v2: PVector, target?: PVector) {
      const cx = v1.y*v2.z - v2.y*v1.z,
            cy = v1.z*v2.x - v2.z*v1.x,
            cz = v1.x*v2.y - v2.x*v1.y
      return target? target.set(cx, cy, cz) : new PVector(cx, cy, cz)
    }

    static angleBetween(v1, v2) {
      if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z) { return 0; }
      const amt = PVector.dot(v1, v2) / Math.sqrt(v1.magSq() * v2.magSq());
      return amt <= -1? Math.PI : amt >= 1? 0 : Math.acos(amt);
    }

    static lerp(v1, v2, amt) {
      return v1.copy().lerp(v2, amt);
    }

    static add(v1, v2, target) {
      return target? target.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
      : new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    static sub(v1, v2, target) {
      return target? target.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
      : new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }

    static mult(v, n, target) {
      if (typeof n === 'number') {
        return target? target.set(v.x*n, v.y*n, v.z*n)
        : new PVector(v.x*n, v.y*n, v.z*n);
      }
      return target? target.set(v.x*n.x, v.y*n.y, v.z*n.z)
      : new PVector(v.x*n.x, v.y*n.y, v.z*n.z);
    }

    static div(v, n, target) {
      if (typeof n === 'number') {
        return target? target.set(v.x/n, v.y/n, v.z/n)
        : new PVector(v.x/n, v.y/n, v.z/n);
      }
      return target? target.set(v.x/n.x, v.y/n.y, v.z/n.z)
      : new PVector(v.x/n.x, v.y/n.y, v.z/n.z);
    }

    copy() {
      return new PVector(this.x, this.y, this.z);
    }

    get(target) {
      if (!arguments.length) { return this.copy(); } // @Deprecated
      if (typeof target !== 'object') { return this.array(); }
      target[0] = this.x;
      target[1] = this.y;
      target[2] = this.z;
      return target;
    }

    set(v, y?, z?) {
      const len = arguments.length;
      if (len > 1) {
        this.x = v;
        this.y = y;
        if (len > 2) { this.z = z; }
      } else if (len === 1) {
        this.set(v.x || v[0] || 0,
          v.y || v[1] || 0,
          v.z || v[2] || 0);
        } else { argsErr('set', len, 1); }
        return this;
      }

      array() {
        return [this.x, this.y, this.z];
      }

      normalize(target?) {
        const m = this.mag(),
        canDivide = m !== 0 && m !== 1;
        if (!arguments.length) { return canDivide? this.div(m) : this; }
        return canDivide? PVector.div(this, m, target)
        : target? target.set(this) : this.copy();
      }

      limit(max) {
        return this.magSq() > max*max? this.normalize().mult(max) : this;
      }

      heading() {
        //return -Math.atan2(-this.y, this.x);
        return Math.atan2(this.y, this.x);
      }

      heading2D() { return this.heading() } // @Deprecated

      mag() {
        return Math.sqrt(this.magSq());
      }

      magSq() {
        return sq(this.x) + sq(this.y) + sq(this.z);
      }

      setMag(target, length) {
        const len = arguments.length;
        return len === 1? this.normalize().mult(target) :
        len > 1? this.normalize(target).mult(length) :
        argsErr('setMag', len, 1);
      }

      rotate(angle) {
        const prev_x = this.x,
        c = Math.cos(angle),
        s = Math.sin(angle);
        this.x = c*this.x - s*this.y;
        this.y = s*prev_x + c*this.y;
        return this;
      }

      dist(v1, v2) {
        return v2? PVector.dist(v1, v2) : PVector.dist(this, v1);
      }

      distSq(v1, v2) {
        return v2? PVector.distSq(v1, v2) : PVector.distSq(this, v1);
      }

      dot(v, y, z) {
        const len = arguments.length;
        return len === 1? PVector.dot(this, v) :
        len === 2? PVector.dot(v, y) :
        len > 2? this.x*v + this.y*y + this.z*z :
        argsErr('dot', len, 1);
      }

      cross(v1, v2, target) {
        return target? PVector.cross(v1, v2, target)
        : PVector.cross(this, v1, v2);
      }

      lerp() {
        var x, y, z, amt;
        const len = arguments.length;
        if ((len | 1) === 1) { argsErr('lerp', len, 2); }
        if (len === 2) { // given vector and amt
          const v = arguments[0];
          x = v.x;
          y = v.y;
          z = v.z;
          amt = arguments[1];
        } else if (len === 3) { // given vector 1, vector 2 and amt
          return PVector.lerp(arguments[0], arguments[1], arguments[2]);
        } else { // given x, y, z and amt
          x = arguments[0];
          y = arguments[1];
          z = arguments[2];
          amt = arguments[3];
        }
        this.x = lerp(this.x, x, amt);
        this.y = lerp(this.y, y, amt);
        this.z = lerp(this.z, z, amt);
        return this;
      }

      add(v, y, z) {
        if (y instanceof PVector) { return PVector.add(v, y, z); }
        const len = arguments.length;
        if (len === 1) {
          //PVector.add(this, v, this);
          this.x += v.x;
          this.y += v.y;
          this.z += v.z;
        } else if (len > 1) {
          this.x += v;
          this.y += y;
          if (len > 2) { this.z += z };
        } else { argsErr('add', len, 1); }
        return this;
      }

      sub(v, y, z) {
        if (y instanceof PVector) { return PVector.sub(v, y, z); }
        const len = arguments.length;
        if (len === 1) {
          this.x -= v.x;
          this.y -= v.y;
          this.z -= v.z;
        } else if (len > 1) {
          this.x -= v;
          this.y -= y;
          if (len > 2) { this.z -= z; }
        } else { argsErr('sub', len, 1); }
        return this;
      }

      mult(v, n, target) {
        const len = arguments.length;
        if (len === 1) {
          if (typeof v === 'number') {
            this.x *= v;
            this.y *= v;
            this.z *= v;
          } else {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
          }
          return this;
        } else if (len > 1) { return PVector.mult(v, n, target); }
        argsErr('mult', len, 1);
      }

      div(v, n?, target?) {
        const len = arguments.length;
        if (len === 1) {
          if (typeof v === 'number') {
            this.x /= v;
            this.y /= v;
            this.z /= v;
          } else {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
          }
          return this;
        } else if (len > 1) { return PVector.div(v, n, target); }
        argsErr('div', len, 1);
      }

      toString() {
        return '[' + this.x + ', ' + this.y + ', ' + this.z + ']';
      }

      equals(o) {
        return o === this? true : o instanceof PVector?
        o.x === this.x && o.y === this.y && o.z === this.z : false;
      }

      hashCode() {
        var hash = 1;
        hash = 31*hash + this.x;
        hash = 31*hash + this.y;
        return 31*hash + this.z;
      }
    }

    Object.freeze(Object.freeze(PVector).prototype)
  }
