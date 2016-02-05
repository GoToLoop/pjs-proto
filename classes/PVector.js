var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var pjs;
(function (pjs) {
    var classes;
    (function (classes) {
        "use strict";
        var TAU = PConstants.TAU, lerp = Maths.lerp, sq = Maths.sq, argsErr = function (mtd, len, min) {
            throw "Too few args passed to " + mtd + "() [" + len + " < " + min + "].";
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
                if (!v1.x && !v1.y && !v1.z || !v2.x && !v2.y && !v2.z)
                    return 0;
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
                if (typeof n === 'number')
                    return target ? target.set(v.x * n, v.y * n, v.z * n)
                        : new PVector(v.x * n, v.y * n, v.z * n);
                else
                    return target ? target.set(v.x * n.x, v.y * n.y, v.z * n.z)
                        : new PVector(v.x * n.x, v.y * n.y, v.z * n.z);
            };
            PVector.div = function (v, n, target) {
                if (typeof n === 'number')
                    return target ? target.set(v.x / n, v.y / n, v.z / n)
                        : new PVector(v.x / n, v.y / n, v.z / n);
                else
                    return target ? target.set(v.x / n.x, v.y / n.y, v.z / n.z)
                        : new PVector(v.x / n.x, v.y / n.y, v.z / n.z);
            };
            PVector.prototype.array = function () {
                return [this.x, this.y, this.z];
            };
            PVector.prototype.copy = function () {
                return new PVector(this.x, this.y, this.z);
            };
            PVector.prototype.get = function (target) {
                if (!arguments.length)
                    return this.copy();
                if (typeof target !== 'object')
                    return this.array();
                target[0] = this.x, target[1] = this.y, target[2] = this.z;
                return target;
            };
            PVector.prototype.set = function (v, y, z) {
                var len = arguments.length;
                if (len > 1)
                    this.x = v, this.y = y, len > 2 && (this.z = z);
                else if (len === 1)
                    this.set(v[0] || v.x || 0, v[1] || v.y || 0, v[2] || v.z || undefined);
                else
                    argsErr('set', len, 1);
                return this;
            };
            PVector.prototype.normalize = function (target, mag) {
                var m = mag || this.mag(), canDivide = m !== 0 && m !== 1;
                if (!arguments.length)
                    return canDivide ? this.div(m) : this;
                return canDivide ? PVector.div(this, m, target)
                    : target ? target.set(this) : this.copy();
            };
            PVector.prototype.limit = function (max, target) {
                var magSq = this.magSq();
                return magSq > max * max ? this.normalize(target, Math.sqrt(magSq)).mult(max)
                    : target ? target.set(this) : this;
            };
            PVector.prototype.heading = function () {
                return Math.atan2(this.y, this.x);
            };
            PVector.prototype.heading2D = function () {
                return this.heading();
            };
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
                this.x = c * prev_x - s * this.y;
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
                return target ? PVector.cross(v1, v2, target) : PVector.cross(this, v1, v2);
            };
            PVector.prototype.angleBetween = function (v) {
                return PVector.angleBetween(this, v);
            };
            PVector.prototype.lerp = function (a, b, c, d) {
                var x, y, z, amt;
                var len = arguments.length;
                if ((len | 1) === 1)
                    argsErr('lerp', len, 2);
                if (len === 2) {
                    var v = a;
                    x = v.x, y = v.y, z = v.z;
                    amt = b;
                }
                else if (len === 3) {
                    return PVector.lerp(a, b, c);
                }
                else {
                    x = a, y = b, z = c, amt = d;
                }
                this.x = lerp(this.x, x, amt);
                this.y = lerp(this.y, y, amt);
                this.z = lerp(this.z, z, amt);
                return this;
            };
            PVector.prototype.add = function (v, y, z) {
                if (y instanceof PVector)
                    return PVector.add(v, y, z);
                else {
                    var len = arguments.length;
                    if (len === 1) {
                        this.x += v.x, this.y += v.y, this.z += v.z;
                    }
                    else if (len > 1) {
                        this.x += v, this.y += y, len > 2 && (this.z += z);
                    }
                    else
                        argsErr('add', len, 1);
                    return this;
                }
            };
            PVector.prototype.sub = function (v, y, z) {
                if (y instanceof PVector)
                    return PVector.sub(v, y, z);
                else {
                    var len = arguments.length;
                    if (len === 1) {
                        this.x -= v.x, this.y -= v.y, this.z -= v.z;
                    }
                    else if (len > 1) {
                        this.x -= v, this.y -= y, len > 2 && (this.z -= z);
                    }
                    else
                        argsErr('sub', len, 1);
                    return this;
                }
            };
            PVector.prototype.mult = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number')
                        this.x *= v, this.y *= v, this.z *= v;
                    else
                        this.x *= v.x, this.y *= v.y, this.z *= v.z;
                    return this;
                }
                else if (len > 1)
                    return PVector.mult(v, n, target);
                argsErr('mult', len, 1);
            };
            PVector.prototype.div = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number')
                        this.x /= v, this.y /= v, this.z /= v;
                    else
                        this.x /= v.x, this.y /= v.y, this.z /= v.z;
                    return this;
                }
                else if (len > 1)
                    return PVector.div(v, n, target);
                argsErr('div', len, 1);
            };
            PVector.prototype.toString = function () {
                return "[ " + this.x + ", " + this.y + ", " + this.z + " ]";
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
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "array", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "copy", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object]), 
                __metadata('design:returntype', Object)
            ], PVector.prototype, "get", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Number, Number]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "set", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, Number]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "normalize", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Number, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "limit", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "heading", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "heading2D", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "mag", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "magSq", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Number]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "setMag", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Number]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "rotate", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "dist", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "distSq", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Object, Number]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "dot", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "cross", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "angleBetween", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Object, Number, Number]), 
                __metadata('design:returntype', PVector)
            ], PVector.prototype, "lerp", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Object, Object]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "add", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Object, Object]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "sub", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Number, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "mult", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object, Number, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "div", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "toString", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Object]), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "equals", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], PVector.prototype, "hashCode", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [Number, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "fromAngle", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "dist", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "distSq", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "dot", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "cross", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "angleBetween", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector, Number]), 
                __metadata('design:returntype', void 0)
            ], PVector, "lerp", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "add", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, PVector, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "sub", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, Object, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "mult", null);
            __decorate([
                Frozen, 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', [PVector, Object, PVector]), 
                __metadata('design:returntype', void 0)
            ], PVector, "div", null);
            PVector = __decorate([
                Frozen, 
                __metadata('design:paramtypes', [Number, Number, Number])
            ], PVector);
            return PVector;
        }());
        classes.PVector = PVector;
        Object.freeze(Object.freeze(PVector.random2D).prototype);
        Object.freeze(Object.freeze(PVector.random3D).prototype);
    })(classes = pjs.classes || (pjs.classes = {}));
})(pjs || (pjs = {}));
