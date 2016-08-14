var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var pjs;
(function (pjs) {
    var utils;
    (function (utils) {
        "use strict";
        function Frozen(clazz, prop) {
            if (prop) {
                const value = clazz[prop];
                Object.freeze(value) && Object.freeze(value.prototype);
            }
            else
                Object.freeze(Object.freeze(clazz)['prototype']);
        }
        utils.Frozen = Frozen;
        function FreezeAll(clazz) {
            const proto = clazz.prototype;
            for (let prop in Object.freeze(clazz))
                Object.freeze(clazz[prop].prototype);
            for (let prop in Object.freeze(proto))
                Object.freeze(proto[prop].prototype);
        }
        utils.FreezeAll = FreezeAll;
        function ProtoAssign(clazz, prop) {
            clazz.prototype[prop] = clazz[prop];
        }
        utils.ProtoAssign = ProtoAssign;
        function ProtoAssignAll(clazz) {
            for (let prop in clazz) {
                const value = clazz[prop];
                typeof value != 'function' && (clazz.prototype[prop] = value);
            }
        }
        utils.ProtoAssignAll = ProtoAssignAll;
        function ProtoAdditions(props) {
            return (clazz) => {
                for (let prop in props)
                    clazz.prototype[prop] = props[prop];
            };
        }
        utils.ProtoAdditions = ProtoAdditions;
        function InjectInto(target) {
            return (clazz) => {
                let name = clazz.name;
                if (!name) {
                    name = clazz.toString();
                    const start = name.indexOf(' ') + 1, stop = name.indexOf('(', start);
                    name = name.substring(start, ~stop ? stop : name.lastIndexOf(' \x7b')).trim();
                }
                name && (target[name] = target.prototype[name] = clazz);
            };
        }
        utils.InjectInto = InjectInto;
    })(utils = pjs.utils || (pjs.utils = {}));
})(pjs || (pjs = {}));
var java;
(function (java) {
    var lang;
    (function (lang) {
        "use strict";
        function Deprecated(clazz, prop) { }
        lang.Deprecated = Deprecated;
        function FunctionalInterface(clazz) { }
        lang.FunctionalInterface = FunctionalInterface;
        function Override(clazz, prop) { }
        lang.Override = Override;
        function SafeVarargs(clazz, prop) { }
        lang.SafeVarargs = SafeVarargs;
        function SuppressWarnings(clazz, prop) {
            return (clazz) => { };
        }
        lang.SuppressWarnings = SuppressWarnings;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
var java;
(function (java) {
    "use strict";
    var FreezeAll = pjs.utils.FreezeAll;
    const Bool = Boolean;
    var lang;
    (function (lang) {
        let Boolean = class Boolean extends Bool {
        };
        Boolean = __decorate([
            FreezeAll
        ], Boolean);
        lang.Boolean = Boolean;
    })(lang || (lang = {}));
})(java || (java = {}));
var java;
(function (java) {
    var util;
    (function (util) {
        "use strict";
        var FreezeAll = pjs.utils.FreezeAll;
        let AbstractCollection = class AbstractCollection {
        };
        AbstractCollection = __decorate([
            FreezeAll
        ], AbstractCollection);
        util.AbstractCollection = AbstractCollection;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
var pjs;
(function (pjs) {
    var core;
    (function (core) {
        "use strict";
        var Frozen = pjs.utils.Frozen;
        var ProtoAssignAll = pjs.utils.ProtoAssignAll;
        let PConstants = class PConstants {
        };
        PConstants.X = 0;
        PConstants.Y = 1;
        PConstants.Z = 2;
        PConstants.R = 3;
        PConstants.G = 4;
        PConstants.B = 5;
        PConstants.A = 6;
        PConstants.U = 7;
        PConstants.V = 8;
        PConstants.NX = 9;
        PConstants.NY = 10;
        PConstants.NZ = 11;
        PConstants.EDGE = 12;
        PConstants.SR = 13;
        PConstants.SG = 14;
        PConstants.SB = 15;
        PConstants.SA = 16;
        PConstants.SW = 17;
        PConstants.TX = 18;
        PConstants.TY = 19;
        PConstants.TZ = 20;
        PConstants.VX = 21;
        PConstants.VY = 22;
        PConstants.VZ = 23;
        PConstants.VW = 24;
        PConstants.AR = 25;
        PConstants.AG = 26;
        PConstants.AB = 27;
        PConstants.DR = 3;
        PConstants.DG = 4;
        PConstants.DB = 5;
        PConstants.DA = 6;
        PConstants.SPR = 28;
        PConstants.SPG = 29;
        PConstants.SPB = 30;
        PConstants.ER = 32;
        PConstants.EG = 33;
        PConstants.EB = 34;
        PConstants.SHINE = 31;
        PConstants.BEEN_LIT = 35;
        PConstants.VERTEX_FIELD_COUNT = 36;
        PConstants.P2D = 1;
        PConstants.JAVA2D = 1;
        PConstants.WEBGL = 2;
        PConstants.P3D = 2;
        PConstants.OPENGL = 2;
        PConstants.PDF = 0;
        PConstants.DXF = 0;
        PConstants.OTHER = 0;
        PConstants.WINDOWS = 1;
        PConstants.MAXOSX = 2;
        PConstants.LINUX = 3;
        PConstants.EPSILON = 1e-4;
        PConstants.EPSILON_ZERO = 1e-12;
        PConstants.MAX_FLOAT = 3.4028235e+38;
        PConstants.MIN_FLOAT = -3.4028235e+38;
        PConstants.MAX_INT = 2147483647;
        PConstants.MIN_INT = -2147483648;
        PConstants.PI = Math.PI;
        PConstants.TWO_PI = Math.PI * 2;
        PConstants.TAU = Math.PI * 2;
        PConstants.HALF_PI = Math.PI / 2;
        PConstants.THIRD_PI = Math.PI / 3;
        PConstants.QUARTER_PI = Math.PI / 4;
        PConstants.SIXTH_PI = Math.PI / 6;
        PConstants.EIGHTH_PI = Math.PI / 8;
        PConstants.TWELFTH_PI = Math.PI / 12;
        PConstants.DEG_TO_RAD = Math.PI / 180;
        PConstants.RAD_TO_DEG = 180 / Math.PI;
        PConstants.RADIANS = 0;
        PConstants.DEGREES = 1;
        PConstants.WHITESPACE = ' \t\n\r\f\u00A0';
        PConstants.RGB = 1;
        PConstants.ARGB = 2;
        PConstants.HSB = 3;
        PConstants.ALPHA = 4;
        PConstants.CMYK = 5;
        PConstants.TIFF = 0;
        PConstants.TARGA = 1;
        PConstants.JPEG = 2;
        PConstants.GIF = 3;
        PConstants.BLUR = 11;
        PConstants.GRAY = 12;
        PConstants.INVERT = 13;
        PConstants.OPAQUE = 14;
        PConstants.POSTERIZE = 15;
        PConstants.THRESHOLD = 16;
        PConstants.ERODE = 17;
        PConstants.DILATE = 18;
        PConstants.REPLACE = 0;
        PConstants.BLEND = 1 << 0;
        PConstants.ADD = 1 << 1;
        PConstants.SUBTRACT = 1 << 2;
        PConstants.LIGHTEST = 1 << 3;
        PConstants.DARKEST = 1 << 4;
        PConstants.DIFFERENCE = 1 << 5;
        PConstants.EXCLUSION = 1 << 6;
        PConstants.MULTIPLY = 1 << 7;
        PConstants.SCREEN = 1 << 8;
        PConstants.OVERLAY = 1 << 9;
        PConstants.HARD_LIGHT = 1 << 10;
        PConstants.SOFT_LIGHT = 1 << 11;
        PConstants.DODGE = 1 << 12;
        PConstants.BURN = 1 << 13;
        PConstants.ALPHA_MASK = 0xff000000;
        PConstants.RED_MASK = 0x00ff0000;
        PConstants.GREEN_MASK = 0x0000ff00;
        PConstants.BLUE_MASK = 0x000000ff;
        PConstants.CUSTOM = 0;
        PConstants.ORTHOGRAPHIC = 2;
        PConstants.PERSPECTIVE = 3;
        PConstants.POINT = 2;
        PConstants.POINTS = 2;
        PConstants.LINE = 4;
        PConstants.LINES = 4;
        PConstants.TRIANGLE = 8;
        PConstants.TRIANGLES = 9;
        PConstants.TRIANGLE_STRIP = 10;
        PConstants.TRIANGLE_FAN = 11;
        PConstants.QUAD = 16;
        PConstants.QUADS = 16;
        PConstants.QUAD_STRIP = 17;
        PConstants.POLYGON = 20;
        PConstants.PATH = 21;
        PConstants.RECT = 30;
        PConstants.ELLIPSE = 31;
        PConstants.ARC = 32;
        PConstants.SPHERE = 40;
        PConstants.BOX = 41;
        PConstants.GROUP = 0;
        PConstants.PRIMITIVE = 1;
        PConstants.GEOMETRY = 3;
        PConstants.VERTEX = 0;
        PConstants.BEZIER_VERTEX = 1;
        PConstants.CURVE_VERTEX = 2;
        PConstants.BREAK = 3;
        PConstants.CLOSESHAPE = 4;
        PConstants.OPEN = 1;
        PConstants.CLOSE = 2;
        PConstants.CORNER = 0;
        PConstants.CORNERS = 1;
        PConstants.RADIUS = 2;
        PConstants.CENTER = 3;
        PConstants.DIAMETER = 3;
        PConstants.BASELINE = 0;
        PConstants.TOP = 101;
        PConstants.BOTTOM = 102;
        PConstants.NORMAL = 1;
        PConstants.NORMALIZED = 1;
        PConstants.IMAGE = 2;
        PConstants.MODEL = 4;
        PConstants.SHAPE = 5;
        PConstants.SQUARE = 'butt';
        PConstants.ROUND = 'round';
        PConstants.PROJECT = 'square';
        PConstants.MITER = 'miter';
        PConstants.BEVEL = 'bevel';
        PConstants.AMBIENT = 0;
        PConstants.DIRECTIONAL = 1;
        PConstants.SPOT = 3;
        PConstants.BACKSPACE = 8;
        PConstants.TAB = 9;
        PConstants.ENTER = 10;
        PConstants.RETURN = 13;
        PConstants.ESC = 27;
        PConstants.DELETE = 127;
        PConstants.CODED = 0xffff;
        PConstants.SHIFT = 16;
        PConstants.CONTROL = 17;
        PConstants.ALT = 18;
        PConstants.CAPSLK = 20;
        PConstants.PGUP = 33;
        PConstants.PGDN = 34;
        PConstants.END = 35;
        PConstants.HOME = 36;
        PConstants.LEFT = 37;
        PConstants.UP = 38;
        PConstants.RIGHT = 39;
        PConstants.DOWN = 40;
        PConstants.F1 = 112;
        PConstants.F2 = 113;
        PConstants.F3 = 114;
        PConstants.F4 = 115;
        PConstants.F5 = 116;
        PConstants.F6 = 117;
        PConstants.F7 = 118;
        PConstants.F8 = 119;
        PConstants.F9 = 120;
        PConstants.F10 = 121;
        PConstants.F11 = 122;
        PConstants.F12 = 123;
        PConstants.NUMLK = 144;
        PConstants.META = 157;
        PConstants.INSERT = 155;
        PConstants.ARROW = 'default';
        PConstants.CROSS = 'crosshair';
        PConstants.HAND = 'pointer';
        PConstants.MOVE = 'move';
        PConstants.TEXT = 'text';
        PConstants.WAIT = 'wait';
        PConstants.NOCURSOR = "url('data:image/gif;base64R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') auto";
        PConstants.DISABLE_OPENGL_2X_SMOOTH = 1;
        PConstants.ENABLE_OPENGL_2X_SMOOTH = -1;
        PConstants.ENABLE_OPENGL_4X_SMOOTH = 2;
        PConstants.ENABLE_NATIVE_FONTS = 3;
        PConstants.DISABLE_DEPTH_TEST = 4;
        PConstants.ENABLE_DEPTH_TEST = -4;
        PConstants.ENABLE_DEPTH_SORT = 5;
        PConstants.DISABLE_DEPTH_SORT = -5;
        PConstants.DISABLE_OPENGL_ERROR_REPORT = 6;
        PConstants.ENABLE_OPENGL_ERROR_REPORT = -6;
        PConstants.ENABLE_ACCURATE_TEXTURES = 7;
        PConstants.DISABLE_ACCURATE_TEXTURES = -7;
        PConstants.HINT_COUNT = 10;
        PConstants.SINCOS_LENGTH = 720;
        PConstants.PRECISIONB = 15;
        PConstants.PRECISIONF = 1 << 15;
        PConstants.PREC_MAXVAL = (1 << 15) - 1;
        PConstants.PREC_ALPHA_SHIFT = 24 - 15;
        PConstants.PREC_RED_SHIFT = 16 - 15;
        PConstants.NORMAL_MODE_AUTO = 0;
        PConstants.NORMAL_MODE_SHAPE = 1;
        PConstants.NORMAL_MODE_VERTEX = 2;
        PConstants.MAX_LIGHTS = 8;
        PConstants = __decorate([
            Frozen,
            ProtoAssignAll
        ], PConstants);
        core.PConstants = PConstants;
    })(core = pjs.core || (pjs.core = {}));
})(pjs || (pjs = {}));
var pjs;
(function (pjs) {
    var math;
    (function (math) {
        "use strict";
        class Maths extends pjs.core.PConstants {
            random(low, high) { return Math.random(); }
            lerp(start, stop, amt) { return +start + amt * (stop - start); }
            sq(n) { return n * n; }
            isZero(n, tolerance = Maths.EPSILON_ZERO) {
                return n != n || (n <= (tolerance = Math.abs(tolerance)) && n >= -tolerance);
            }
        }
        Maths.random = Maths.prototype.random;
        Maths.lerp = Maths.prototype.lerp;
        Maths.sq = Maths.prototype.sq;
        Maths.isZero = Maths.prototype.isZero;
        math.Maths = Maths;
    })(math = pjs.math || (pjs.math = {}));
})(pjs || (pjs = {}));
var StrictMath = Math;
var pjs;
(function (pjs) {
    var core;
    (function (core) {
        "use strict";
        class PApplet extends pjs.math.Maths {
            constructor() {
                super();
                this.init();
            }
            init() { this.PVector = pjs.math.PVectorAltBuilder(this), this._degreeIn = true; }
            random(low, high) { return Math.random(); }
        }
        PApplet.AbstractCollection = java.util.AbstractCollection;
        core.PApplet = PApplet;
    })(core = pjs.core || (pjs.core = {}));
})(pjs || (pjs = {}));
var PApplet = pjs.core.PApplet;
var Processing = PApplet;
var pjs;
(function (pjs) {
    var math;
    (function (math) {
        "use strict";
        var PConstants = pjs.core.PConstants;
        var InjectInto = pjs.utils.InjectInto;
        const { lerp, sq, isZero } = math.Maths, TAU = PConstants.TAU, argsErr = (mtd, len, min) => {
            throw `Too few args passed to ${mtd}() [${len} < ${min}].`;
        }, xyzObjCheck = (obj) => obj != null && 'z' in obj, pjsCheck = (obj) => obj != null && 'random' in obj;
        let PVector_1 = class PVector {
            constructor(x = 0, y = 0, z = 0) {
                this.x = x;
                this.y = y;
                this.z = z;
            }
            static fromAngle(angle, target) {
                return target && target.set(Math.cos(angle), Math.sin(angle))
                    || new PVector_1(Math.cos(angle), Math.sin(angle));
            }
            static random2D(target, parent) {
                const isPjs = pjsCheck(target), rnd = parent ? parent : isPjs && target || Math;
                return PVector_1.fromAngle(TAU * rnd.random(), isPjs ? void 0 : target);
            }
            static random3D(target, parent) {
                const isPjs = pjsCheck(target), rnd = parent ? parent : isPjs && target || Math, ang = TAU * rnd.random(), vz = 2 * rnd.random() - 1, vzr = Math.sqrt(1 - vz * vz), vx = vzr * Math.cos(ang), vy = vzr * Math.sin(ang);
                return target && !isPjs ? target.set(vx, vy, vz) : new PVector_1(vx, vy, vz);
            }
            static dist(v1, v2) {
                return Math.sqrt(PVector_1.distSq(v1, v2));
            }
            static distSq(v1, v2) {
                return sq(v1.x - v2.x) + sq(v1.y - v2.y) + sq(v1.z - v2.z);
            }
            static dot(v1, v2) {
                return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
            }
            static cross(v1, v2, target) {
                const cx = v1.y * v2.z - v2.y * v1.z, cy = v1.z * v2.x - v2.z * v1.x, cz = v1.x * v2.y - v2.x * v1.y;
                return target && target.set(cx, cy, cz) || new PVector_1(cx, cy, cz);
            }
            static angleBetween(v1, v2, magSq1, magSq2, dot) {
                if (v1.isZero() || v2.isZero())
                    return 0;
                magSq1 = magSq1 || v1.magSq(), magSq2 = magSq2 || v2.magSq();
                dot = dot || PVector_1.dot(v1, v2);
                const amt = dot / Math.sqrt(magSq1 * magSq2);
                return amt <= -1 ? Math.PI : amt >= 1 ? 0 : Math.acos(amt);
            }
            static lerp(v1, v2, amt, target) {
                return (target && target.set(v1) || v1.clone()).lerp(v2, amt);
            }
            static add(v1, v2, target) {
                return target && target.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                    || new PVector_1(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
            }
            static sub(v1, v2, target) {
                return target && target.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                    || new PVector_1(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
            }
            static subInv(v1, v2, target) {
                return target && target.set(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z)
                    || new PVector_1(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
            }
            static mult(v, n, target) {
                if (typeof n == 'object')
                    return target && target.set(v.x * n.x, v.y * n.y, v.z * n.z)
                        || new PVector_1(v.x * n.x, v.y * n.y, v.z * n.z);
                else
                    return target && target.set(v.x * n, v.y * n, v.z * n)
                        || new PVector_1(v.x * n, v.y * n, v.z * n);
            }
            static div(v, n, target) {
                if (typeof n == 'object')
                    return target && target.set(v.x / n.x, v.y / n.y, v.z / n.z)
                        || new PVector_1(v.x / n.x, v.y / n.y, v.z / n.z);
                else
                    return target && target.set(v.x / n, v.y / n, v.z / n)
                        || new PVector_1(v.x / n, v.y / n, v.z / n);
            }
            static mod(v, n, target) {
                if (typeof n == 'object')
                    return target && target.set(v.x % n.x, v.y % n.y, v.z % n.z)
                        || new PVector_1(v.x % n.x, v.y % n.y, v.z % n.z);
                else
                    return target && target.set(v.x % n, v.y % n, v.z % n)
                        || new PVector_1(v.x % n, v.y % n, v.z % n);
            }
            static compare(a, b) { return a.x - b.x || a.y - b.y || a.z - b.z; }
            compareTo(v) { return this.x - v.x || this.y - v.y || this.z - v.z; }
            array() { return [this.x, this.y, this.z]; }
            object() { return { x: this.x, y: this.y, z: this.z }; }
            clone() { return new PVector_1(this.x, this.y, this.z); }
            get(target) {
                if (!target)
                    return target === void 0 && this.clone() || this.array();
                else if (xyzObjCheck(target))
                    target.x = this.x, target.y = this.y, target.z = this.z;
                else
                    target[0] = this.x, target[1] = this.y, target[2] = this.z;
                return target;
            }
            set(v, y, z) {
                if (y != void 0)
                    this.x = +v, this.y = +y, z != void 0 && (this.z = +z);
                else
                    this.set(v[0] || v.x || 0, v[1] || v.y || 0, v[2] || v.z);
                return this;
            }
            normalize(target, mag) {
                const m = mag || this.mag(), canDivide = m != 0 && m != 1;
                if (!arguments.length)
                    return canDivide && this.div(m) || this;
                return canDivide ? PVector_1.div(this, m, target)
                    : target && target.set(this) || this.clone();
            }
            limit(max, target, magSq) {
                const mSq = magSq || this.magSq(), overMax = mSq > max * max;
                if (target === null)
                    target = new PVector_1;
                return !target ? overMax && this.normalize().mult(max) || this
                    : overMax && this.normalize(target, Math.sqrt(mSq)).mult(max) || target.set(this);
            }
            heading() {
                return Math.atan2(this.y, this.x);
            }
            mag() {
                return Math.sqrt(this.magSq());
            }
            magSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            }
            setMag(target, len, mag) {
                return typeof target == 'object' ? this.normalize(target, mag).mult(len)
                    : this.normalize().mult(target);
            }
            rotate(angle, target) {
                const c = Math.cos(angle), s = Math.sin(angle), x = c * this.x - s * this.y, y = s * this.x + c * this.y;
                if (target === null)
                    target = new PVector_1;
                return target && target.set(x, y) || this.set(x, y);
            }
            rotateX(angle, target) {
                const c = Math.cos(angle), s = Math.sin(angle), y = c * this.y - s * this.z, z = s * this.y + c * this.z;
                if (target === null)
                    target = new PVector_1;
                return target && target.set(this.x, y, z) || this.set(this.x, y, z);
            }
            rotateY(angle, target) {
                const c = Math.cos(angle), s = Math.sin(angle), x = s * this.z + c * this.x, z = c * this.z - s * this.x;
                if (target === null)
                    target = new PVector_1;
                return target && target.set(x, this.y, z) || this.set(x, this.y, z);
            }
            fromAngle(angle, target) {
                return PVector_1.fromAngle(angle, target || this);
            }
            random2D(target, parent) {
                return pjsCheck(target) && PVector_1.random2D(this, target)
                    || PVector_1.random2D(target === void 0 && this || target, parent);
            }
            random3D(target, parent) {
                return pjsCheck(target) && PVector_1.random3D(this, target)
                    || PVector_1.random3D(target === void 0 && this || target, parent);
            }
            dist(v1, v2) {
                return v2 && PVector_1.dist(v1, v2) || PVector_1.dist(this, v1);
            }
            distSq(v1, v2) {
                return v2 && PVector_1.distSq(v1, v2) || PVector_1.distSq(this, v1);
            }
            dot(v, y, z) {
                return typeof v != 'object' ? this.x * v + this.y * +y + this.z * z :
                    y == void 0 ? PVector_1.dot(this, v) : PVector_1.dot(v, y);
            }
            cross(v1, v2, target) {
                return target && PVector_1.cross(v1, v2, target) || PVector_1.cross(this, v1, v2);
            }
            angleBetween(v, magSq1, magSq2, dot) {
                return PVector_1.angleBetween(this, v, magSq1, magSq2, dot);
            }
            lerp(a, b, c, d) {
                let x, y, z, amt;
                const len = arguments.length;
                if ((len | 1) == 1)
                    argsErr('lerp', len, 2);
                if (len == 2) {
                    ({ x, y, z } = a), amt = b;
                }
                else if (len == 3) {
                    return PVector_1.lerp(a, b, c);
                }
                else {
                    x = a, y = b, z = c, amt = d;
                }
                return this.set(lerp(this.x, x, amt), lerp(this.y, y, amt), lerp(this.z, z, amt));
            }
            add(v, y, z) {
                if (y != undefined) {
                    if (typeof y == 'object')
                        return PVector_1.add(v, y, z);
                    this.x += +v, this.y += +y, z != void 0 && (this.z += +z);
                }
                else if (typeof v == 'object')
                    this.x += v.x, this.y += v.y, this.z += v.z;
                else
                    this.x += +v, this.y += +v, this.z += +v;
                return this;
            }
            sub(v, y, z) {
                if (y != undefined) {
                    if (typeof y == 'object')
                        return PVector_1.sub(v, y, z);
                    this.x -= +v, this.y -= y, z != void 0 && (this.z -= +z);
                }
                else if (typeof v == 'object')
                    this.x -= v.x, this.y -= v.y, this.z -= v.z;
                else
                    this.x -= v, this.y -= v, this.z -= v;
                return this;
            }
            subInv(v, y, z) {
                if (y != undefined) {
                    if (typeof y == 'object')
                        return PVector_1.subInv(v, y, z);
                    this.x = +v - this.x, this.y = y - this.y, z != void 0 && (this.z = +z - this.z);
                }
                else if (typeof v == 'object')
                    this.x = v.x - this.x, this.y = v.y - this.y, this.z = v.z - this.z;
                else
                    this.x = v - this.x, this.y = v - this.y, this.z = v - this.z;
                return this;
            }
            mult(v, n, target) {
                if (n != undefined)
                    return PVector_1.mult(v, n, target);
                if (typeof v == 'object')
                    this.x *= v.x, this.y *= v.y, this.z *= v.z;
                else
                    this.x *= v, this.y *= v, this.z *= v;
                return this;
            }
            div(v, n, target) {
                if (n != undefined)
                    return PVector_1.div(v, n, target);
                if (typeof v == 'object')
                    this.x /= v.x, this.y /= v.y, this.z /= v.z;
                else
                    this.x /= v, this.y /= v, this.z /= v;
                return this;
            }
            mod(v, n, target) {
                if (n != undefined)
                    return PVector_1.mod(v, n, target);
                if (typeof v == 'object')
                    this.x %= v.x, this.y %= v.y, this.z %= v.z;
                else
                    this.x %= v, this.y %= v, this.z %= v;
                return this;
            }
            negate() {
                this.x *= -1, this.y *= -1, this.z *= -1;
                return this;
            }
            clear() {
                this.x = this.y = this.z = 0;
                return this;
            }
            isZero(tolerance) {
                return isZero(this.x, tolerance) && isZero(this.y, tolerance) && isZero(this.z, tolerance);
            }
            isNaN() { return this.x != this.x || this.y != this.y || this.z != this.z; }
            toString() { return `[ ${this.x}, ${this.y}, ${this.z} ]`; }
            valueOf() { return this.x; }
            equals(o) {
                return o == this ? true : o instanceof PVector_1 &&
                    o.x == this.x && o.y == this.y && o.z == this.z;
            }
            hashCode() {
                let hash = 1;
                hash = 31 * hash + this.x;
                hash = 31 * hash + this.y;
                return 31 * hash + this.z;
            }
        };
        let PVector = PVector_1;
        PVector = PVector_1 = __decorate([
            InjectInto(PApplet)
        ], PVector);
        math.PVector = PVector;
        PVector.prototype.copy = PVector.prototype.clone;
        PVector.prototype.heading2D = PVector.prototype.heading;
        PVector.prototype.rotateZ = PVector.prototype.rotate;
        function PVectorAltBuilder(p) {
            "use strict";
            const { DEG_TO_RAD, RAD_TO_DEG } = PConstants;
            return class PVectorAlt extends PVector {
                static fromAngle(angle, target) {
                    p._degreeIn && (angle *= DEG_TO_RAD);
                    return target && target.set(Math.cos(angle), Math.sin(angle))
                        || new PVectorAlt(Math.cos(angle), Math.sin(angle));
                }
                fromAngle(angle, target) {
                    return PVectorAlt.fromAngle(angle, target || this);
                }
            }
            ;
        }
        math.PVectorAltBuilder = PVectorAltBuilder;
    })(math = pjs.math || (pjs.math = {}));
})(pjs || (pjs = {}));
