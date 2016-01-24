var pjs;
(function (pjs) {
    var math;
    (function (math) {
        var Maths = (function () {
            function Maths() {
                Object.freeze(this);
            }
            Maths.prototype.random = function () { return Math.random(); };
            Maths.prototype.lerp = function (start, stop, amt) { return amt * (stop - start) + start; };
            Maths.prototype.sq = function (n) { return n * n; };
            Maths.random = Maths.prototype.random;
            Maths.lerp = Maths.prototype.lerp;
            Maths.sq = Maths.prototype.sq;
            return Maths;
        }());
        math.Maths = Maths;
        Object.freeze(Object.freeze(Maths).prototype);
    })(math = pjs.math || (pjs.math = {}));
})(pjs || (pjs = {}));
var pjs;
(function (pjs) {
    var classes;
    (function (classes) {
        "use strict"; //; "use strong"
        var TAU = 2 * Math.PI, lerp = pjs.math.Maths.lerp, sq = pjs.math.Maths.sq, argsErr = function (mtd, len, min) {
            throw 'Too few args passed to ' + mtd + '() [' + len + ' < ' + min + '].';
        };
        var PVector = (function () {
            function PVector(x, y, z) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (z === void 0) { z = 0; }
                this.x = x;
                this.y = y;
                this.z = z;
            }
            PVector.fromAngle = function (angle, target) {
                return target ? target.set(Math.cos(angle), Math.sin(angle))
                    : new PVector(Math.cos(angle), Math.sin(angle));
            };
            PVector.random2D = function (target, parent) {
                var isPjs = target && 'random' in target, rnd = parent ? parent : isPjs ? target : Math;
                return PVector.fromAngle(TAU * rnd.random(), isPjs ? undefined : target);
            };
            PVector.random3D = function (target, parent) {
                var isPjs = target && 'random' in target, rnd = parent ? parent : isPjs ? target : Math, ang = TAU * rnd.random(), vz = 2 * rnd.random() - 1, vzr = Math.sqrt(1 - vz * vz), vx = vzr * Math.cos(ang), vy = vzr * Math.sin(ang);
                return target && !isPjs ? target.set(vx, vy, vz) : new PVector(vx, vy, vz);
            };
            PVector.dist = function (v1, v2) {
                return Math.sqrt(PVector.distSq(v1, v2));
            };
            PVector.distSq = function (v1, v2) {
                return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z);
            };
            PVector.dot = function (v1, v2) {
                return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
            };
            PVector.cross = function (v1, v2, target) {
                var cx = v1.y * v2.z - v2.y * v1.z, cy = v1.z * v2.x - v2.z * v1.x, cz = v1.x * v2.y - v2.x * v1.y;
                return target ? target.set(cx, cy, cz) : new PVector(cx, cy, cz);
            };
            PVector.angleBetween = function (v1, v2) {
                if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z) {
                    return 0;
                }
                var amt = PVector.dot(v1, v2) / Math.sqrt(v1.magSq() * v2.magSq());
                return amt <= -1 ? Math.PI : amt >= 1 ? 0 : Math.acos(amt);
            };
            PVector.lerp = function (v1, v2, amt) {
                return v1.copy().lerp(v2, amt);
            };
            PVector.add = function (v1, v2, target) {
                return target ? target.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                    : new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
            };
            PVector.sub = function (v1, v2, target) {
                return target ? target.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                    : new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
            };
            PVector.mult = function (v, n, target) {
                if (typeof n === 'number') {
                    return target ? target.set(v.x * n, v.y * n, v.z * n)
                        : new PVector(v.x * n, v.y * n, v.z * n);
                }
                return target ? target.set(v.x * n.x, v.y * n.y, v.z * n.z)
                    : new PVector(v.x * n.x, v.y * n.y, v.z * n.z);
            };
            PVector.div = function (v, n, target) {
                if (typeof n === 'number') {
                    return target ? target.set(v.x / n, v.y / n, v.z / n)
                        : new PVector(v.x / n, v.y / n, v.z / n);
                }
                return target ? target.set(v.x / n.x, v.y / n.y, v.z / n.z)
                    : new PVector(v.x / n.x, v.y / n.y, v.z / n.z);
            };
            PVector.prototype.copy = function () {
                return new PVector(this.x, this.y, this.z);
            };
            PVector.prototype.get = function (target) {
                if (!arguments.length) {
                    return this.copy();
                } // @Deprecated
                if (typeof target !== 'object') {
                    return this.array();
                }
                target[0] = this.x;
                target[1] = this.y;
                target[2] = this.z;
                return target;
            };
            PVector.prototype.set = function (v, y, z) {
                var len = arguments.length;
                if (len > 1) {
                    this.x = v;
                    this.y = y;
                    if (len > 2) {
                        this.z = z;
                    }
                }
                else if (len === 1) {
                    this.set(v.x || v[0] || 0, v.y || v[1] || 0, v.z || v[2] || 0);
                }
                else {
                    argsErr('set', len, 1);
                }
                return this;
            };
            PVector.prototype.array = function () {
                return [this.x, this.y, this.z];
            };
            PVector.prototype.normalize = function (target) {
                var m = this.mag(), canDivide = m !== 0 && m !== 1;
                if (!arguments.length) {
                    return canDivide ? this.div(m) : this;
                }
                return canDivide ? PVector.div(this, m, target)
                    : target ? target.set(this) : this.copy();
            };
            PVector.prototype.limit = function (max) {
                return this.magSq() > max * max ? this.normalize().mult(max) : this;
            };
            PVector.prototype.heading = function () {
                //return -Math.atan2(-this.y, this.x);
                return Math.atan2(this.y, this.x);
            };
            PVector.prototype.heading2D = function () { return this.heading(); }; // @Deprecated
            PVector.prototype.mag = function () {
                return Math.sqrt(this.magSq());
            };
            PVector.prototype.magSq = function () {
                return sq(this.x) + sq(this.y) + sq(this.z);
            };
            PVector.prototype.setMag = function (target, length) {
                var len = arguments.length;
                return len === 1 ? this.normalize().mult(target) :
                    len > 1 ? this.normalize(target).mult(length) :
                        argsErr('setMag', len, 1);
            };
            PVector.prototype.rotate = function (angle) {
                var prev_x = this.x, c = Math.cos(angle), s = Math.sin(angle);
                this.x = c * this.x - s * this.y;
                this.y = s * prev_x + c * this.y;
                return this;
            };
            PVector.prototype.dist = function (v1, v2) {
                return v2 ? PVector.dist(v1, v2) : PVector.dist(this, v1);
            };
            PVector.prototype.distSq = function (v1, v2) {
                return v2 ? PVector.distSq(v1, v2) : PVector.distSq(this, v1);
            };
            PVector.prototype.dot = function (v, y, z) {
                var len = arguments.length;
                return len === 1 ? PVector.dot(this, v) :
                    len === 2 ? PVector.dot(v, y) :
                        len > 2 ? this.x * v + this.y * y + this.z * z :
                            argsErr('dot', len, 1);
            };
            PVector.prototype.cross = function (v1, v2, target) {
                return target ? PVector.cross(v1, v2, target)
                    : PVector.cross(this, v1, v2);
            };
            PVector.prototype.lerp = function () {
                var x, y, z, amt;
                var len = arguments.length;
                if ((len | 1) === 1) {
                    argsErr('lerp', len, 2);
                }
                if (len === 2) {
                    var v = arguments[0];
                    x = v.x;
                    y = v.y;
                    z = v.z;
                    amt = arguments[1];
                }
                else if (len === 3) {
                    return PVector.lerp(arguments[0], arguments[1], arguments[2]);
                }
                else {
                    x = arguments[0];
                    y = arguments[1];
                    z = arguments[2];
                    amt = arguments[3];
                }
                this.x = lerp(this.x, x, amt);
                this.y = lerp(this.y, y, amt);
                this.z = lerp(this.z, z, amt);
                return this;
            };
            PVector.prototype.add = function (v, y, z) {
                if (y instanceof PVector) {
                    return PVector.add(v, y, z);
                }
                var len = arguments.length;
                if (len === 1) {
                    //PVector.add(this, v, this);
                    this.x += v.x;
                    this.y += v.y;
                    this.z += v.z;
                }
                else if (len > 1) {
                    this.x += v;
                    this.y += y;
                    if (len > 2) {
                        this.z += z;
                    }
                    ;
                }
                else {
                    argsErr('add', len, 1);
                }
                return this;
            };
            PVector.prototype.sub = function (v, y, z) {
                if (y instanceof PVector) {
                    return PVector.sub(v, y, z);
                }
                var len = arguments.length;
                if (len === 1) {
                    this.x -= v.x;
                    this.y -= v.y;
                    this.z -= v.z;
                }
                else if (len > 1) {
                    this.x -= v;
                    this.y -= y;
                    if (len > 2) {
                        this.z -= z;
                    }
                }
                else {
                    argsErr('sub', len, 1);
                }
                return this;
            };
            PVector.prototype.mult = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number') {
                        this.x *= v;
                        this.y *= v;
                        this.z *= v;
                    }
                    else {
                        this.x *= v.x;
                        this.y *= v.y;
                        this.z *= v.z;
                    }
                    return this;
                }
                else if (len > 1) {
                    return PVector.mult(v, n, target);
                }
                argsErr('mult', len, 1);
            };
            PVector.prototype.div = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number') {
                        this.x /= v;
                        this.y /= v;
                        this.z /= v;
                    }
                    else {
                        this.x /= v.x;
                        this.y /= v.y;
                        this.z /= v.z;
                    }
                    return this;
                }
                else if (len > 1) {
                    return PVector.div(v, n, target);
                }
                argsErr('div', len, 1);
            };
            PVector.prototype.toString = function () {
                return '[' + this.x + ', ' + this.y + ', ' + this.z + ']';
            };
            PVector.prototype.equals = function (o) {
                return o === this ? true : o instanceof PVector ?
                    o.x === this.x && o.y === this.y && o.z === this.z : false;
            };
            PVector.prototype.hashCode = function () {
                var hash = 1;
                hash = 31 * hash + this.x;
                hash = 31 * hash + this.y;
                return 31 * hash + this.z;
            };
            return PVector;
        }());
        classes.PVector = PVector;
        Object.freeze(Object.freeze(PVector).prototype);
    })(classes = pjs.classes || (pjs.classes = {}));
})(pjs || (pjs = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Processing = (function (_super) {
    __extends(Processing, _super);
    function Processing() {
        _super.apply(this, arguments);
    }
    Processing.PVector = pjs.classes.PVector;
    return Processing;
}(pjs.math.Maths));
Processing.prototype.PVector = Processing.PVector;
