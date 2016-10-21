var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
                var value = clazz[prop];
                Object.freeze(value) && Object.freeze(value.prototype);
            }
            else
                Object.freeze(Object.freeze(clazz)['prototype']);
        }
        utils.Frozen = Frozen;
        function FreezeAll(clazz) {
            var proto = clazz.prototype;
            for (var prop in Object.freeze(clazz))
                Object.freeze(clazz[prop].prototype);
            for (var prop in Object.freeze(proto))
                Object.freeze(proto[prop].prototype);
        }
        utils.FreezeAll = FreezeAll;
        function ProtoAssign(clazz, prop) {
            clazz.prototype[prop] = clazz[prop];
        }
        utils.ProtoAssign = ProtoAssign;
        function ProtoAssignAll(clazz) {
            for (var prop in clazz) {
                var value = clazz[prop];
                typeof value != 'function' && (clazz.prototype[prop] = value);
            }
        }
        utils.ProtoAssignAll = ProtoAssignAll;
        function ProtoAdditions(props) {
            return function (clazz) {
                for (var prop in props)
                    clazz.prototype[prop] = props[prop];
            };
        }
        utils.ProtoAdditions = ProtoAdditions;
        function InjectInto(target) {
            return function (clazz) {
                var name = clazz.name;
                if (!name) {
                    name = clazz.toString();
                    var start = name.indexOf(' ') + 1, stop = name.indexOf('(', start);
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
            return function (clazz) { };
        }
        lang.SuppressWarnings = SuppressWarnings;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
var java;
(function (java) {
    "use strict";
    var FreezeAll = pjs.utils.FreezeAll;
    var Bool = Boolean;
    var lang;
    (function (lang) {
        var Boolean = (function (_super) {
            __extends(Boolean, _super);
            function Boolean() {
                return _super.apply(this, arguments) || this;
            }
            return Boolean;
        }(Bool));
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
        var AbstractCollection = (function () {
            function AbstractCollection() {
            }
            return AbstractCollection;
        }());
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
        var PConstants = (function () {
            function PConstants() {
            }
            return PConstants;
        }());
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
            Frozen, ProtoAssignAll
        ], PConstants);
        core.PConstants = PConstants;
    })(core = pjs.core || (pjs.core = {}));
})(pjs || (pjs = {}));
var pjs;
(function (pjs) {
    var math;
    (function (math) {
        "use strict";
        var Maths = (function (_super) {
            __extends(Maths, _super);
            function Maths() {
                return _super.apply(this, arguments) || this;
            }
            Maths.prototype.random = function (low, high) { return Math.random(); };
            Maths.prototype.lerp = function (start, stop, amt) { return +start + amt * (stop - start); };
            Maths.prototype.sq = function (n) { return n * n; };
            Maths.prototype.isZero = function (n, tolerance) {
                if (tolerance === void 0) { tolerance = Maths.EPSILON_ZERO; }
                return n != n || (n <= (tolerance = Math.abs(tolerance)) && n >= -tolerance);
            };
            return Maths;
        }(pjs.core.PConstants));
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
        var PApplet = (function (_super) {
            __extends(PApplet, _super);
            function PApplet() {
                var _this = _super.call(this) || this;
                _this.init();
                return _this;
            }
            PApplet.prototype.init = function () { this.PVector = pjs.math.PVectorAltBuilder(this), this._degreeIn = true; };
            PApplet.prototype.random = function (low, high) { return Math.random(); };
            return PApplet;
        }(pjs.math.Maths));
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
        var lerp = math.Maths.lerp, sq = math.Maths.sq, isZero = math.Maths.isZero, TAU = PConstants.TAU, argsErr = function (mtd, len, min) {
            throw "Too few args passed to " + mtd + "() [" + len + " < " + min + "].";
        }, xyzObjCheck = function (obj) { return obj != null && 'z' in obj; }, pjsCheck = function (obj) { return obj != null && 'random' in obj; };
        var PVector = (function () {
            function PVector(x, y, z) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (z === void 0) { z = 0; }
                this.x = x;
                this.y = y;
                this.z = z;
            }
            PVector.fromAngle = function (ang, t) {
                return t && t.set(Math.cos(ang), Math.sin(ang))
                    || new PVector(Math.cos(ang), Math.sin(ang));
            };
            PVector.random2D = function (t, p) {
                var isPjs = pjsCheck(t), rnd = p ? p : isPjs && t || Math;
                return PVector.fromAngle(TAU * rnd.random(), isPjs ? void 0 : t);
            };
            PVector.random3D = function (t, p) {
                var isPjs = pjsCheck(t), rnd = p ? p : isPjs && t || Math, ang = TAU * rnd.random(), vz = 2 * rnd.random() - 1, vzr = Math.sqrt(1 - vz * vz), vx = vzr * Math.cos(ang), vy = vzr * Math.sin(ang);
                return t && !isPjs ? t.set(vx, vy, vz) : new PVector(vx, vy, vz);
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
            PVector.cross = function (v1, v2, t) {
                var cx = v1.y * v2.z - v2.y * v1.z, cy = v1.z * v2.x - v2.z * v1.x, cz = v1.x * v2.y - v2.x * v1.y;
                return t && t.set(cx, cy, cz) || new PVector(cx, cy, cz);
            };
            PVector.angleBetween = function (v1, v2, magSq1, magSq2, dot) {
                if (v1.isZero() || v2.isZero())
                    return 0;
                magSq1 = magSq1 || v1.magSq(), magSq2 = magSq2 || v2.magSq();
                dot = dot || PVector.dot(v1, v2);
                var amt = dot / Math.sqrt(magSq1 * magSq2);
                return amt <= -1 ? Math.PI : amt >= 1 ? 0 : Math.acos(amt);
            };
            PVector.lerp = function (v1, v2, amt, t) {
                return (t && t.set(v1) || v1.clone()).lerp(v2, amt);
            };
            PVector.add = function (v1, v2, t) {
                return t && t.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                    || new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
            };
            PVector.sub = function (v1, v2, t) {
                return t && t.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                    || new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
            };
            PVector.mult = function (v, n, t) {
                if (typeof n === 'object')
                    return t && t.set(v.x * n.x, v.y * n.y, v.z * n.z)
                        || new PVector(v.x * n.x, v.y * n.y, v.z * n.z);
                else
                    return t && t.set(v.x * n, v.y * n, v.z * n)
                        || new PVector(v.x * n, v.y * n, v.z * n);
            };
            PVector.div = function (v, n, t) {
                if (typeof n === 'object')
                    return t && t.set(v.x / n.x, v.y / n.y, v.z / n.z)
                        || new PVector(v.x / n.x, v.y / n.y, v.z / n.z);
                else
                    return t && t.set(v.x / n, v.y / n, v.z / n)
                        || new PVector(v.x / n, v.y / n, v.z / n);
            };
            PVector.mod = function (v, n, t) {
                if (typeof n === 'object')
                    return t && t.set(v.x % n.x, v.y % n.y, v.z % n.z)
                        || new PVector(v.x % n.x, v.y % n.y, v.z % n.z);
                else
                    return t && t.set(v.x % n, v.y % n, v.z % n)
                        || new PVector(v.x % n, v.y % n, v.z % n);
            };
            PVector.compare = function (a, b) { return a.x - b.x || a.y - b.y || a.z - b.z; };
            PVector.prototype.compareTo = function (v) { return this.x - v.x || this.y - v.y || this.z - v.z; };
            PVector.prototype.array = function () { return [this.x, this.y, this.z]; };
            PVector.prototype.object = function () { return { x: this.x, y: this.y, z: this.z }; };
            PVector.prototype.clone = function () { return new PVector(this.x, this.y, this.z); };
            PVector.prototype.get = function (t) {
                if (!t)
                    return t === void 0 && this.clone() || this.array();
                else if (xyzObjCheck(t))
                    t.x = this.x, t.y = this.y, t.z = this.z;
                else
                    t[0] = this.x, t[1] = this.y, t[2] = this.z;
                return t;
            };
            PVector.prototype.set = function (v, y, z) {
                if (y != void 0)
                    this.x = +v, this.y = +y, z != void 0 && (this.z = +z);
                else
                    this.set(v[0] || v.x || 0, v[1] || v.y || 0, v[2] || v.z);
                return this;
            };
            PVector.prototype.normalize = function (t, mag) {
                var m = +mag || this.mag(), canDivide = m === m && m !== 0 && m !== 1;
                if (!arguments.length)
                    return canDivide && this.div(m) || this;
                return canDivide ? PVector.div(this, m, t)
                    : t && t.set(this) || this.clone();
            };
            PVector.prototype.limit = function (max, t, magSq) {
                var mSq = magSq || this.magSq(), overMax = mSq > max * max;
                t === null && (t = new PVector);
                return !t ? overMax && this.normalize().mult(max) || this
                    : overMax && this.normalize(t, Math.sqrt(mSq)).mult(max) || t.set(this);
            };
            PVector.prototype.heading = function () {
                return Math.atan2(this.y, this.x);
            };
            PVector.prototype.mag = function () {
                return Math.sqrt(this.magSq());
            };
            PVector.prototype.magSq = function () {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            };
            PVector.prototype.setMag = function (t, len, mag) {
                return typeof t === 'object' ? this.normalize(t, mag).mult(len)
                    : this.normalize().mult(t);
            };
            PVector.prototype.rotate = function (ang, t) {
                var c = Math.cos(ang), s = Math.sin(ang), x = c * this.x - s * this.y, y = s * this.x + c * this.y;
                t === null && (t = new PVector);
                return (t || this).set(x, y);
            };
            PVector.prototype.rotateX = function (ang, t) {
                var c = Math.cos(ang), s = Math.sin(ang), y = c * this.y - s * this.z, z = s * this.y + c * this.z;
                t === null && (t = new PVector);
                return (t || this).set(this.x, y, z);
            };
            PVector.prototype.rotateY = function (ang, t) {
                var c = Math.cos(ang), s = Math.sin(ang), x = s * this.z + c * this.x, z = c * this.z - s * this.x;
                t === null && (t = new PVector);
                return (t || this).set(x, this.y, z);
            };
            PVector.prototype.fromAngle = function (ang, t) {
                return PVector.fromAngle(ang, t || this);
            };
            PVector.prototype.random2D = function (t, p) {
                return pjsCheck(t) && PVector.random2D(this, t)
                    || PVector.random2D(t === void 0 && this || t, p);
            };
            PVector.prototype.random3D = function (t, p) {
                return pjsCheck(t) && PVector.random3D(this, t)
                    || PVector.random3D(t === void 0 && this || t, p);
            };
            PVector.prototype.dist = function (v1, v2) {
                return v2 ? PVector.dist(v1, v2) : PVector.dist(this, v1);
            };
            PVector.prototype.distSq = function (v1, v2) {
                return v2 ? PVector.distSq(v1, v2) : PVector.distSq(this, v1);
            };
            PVector.prototype.dot = function (v, y, z) {
                return typeof v !== 'object' ? this.x * v + this.y * +y + this.z * z :
                    y == void 0 ? PVector.dot(this, v) : PVector.dot(v, y);
            };
            PVector.prototype.cross = function (v1, v2, t) {
                return t && PVector.cross(v1, v2, t) || PVector.cross(this, v1, v2);
            };
            PVector.prototype.angleBetween = function (v, magSq1, magSq2, dot) {
                return PVector.angleBetween(this, v, magSq1, magSq2, dot);
            };
            PVector.prototype.lerp = function (a, b, c, d) {
                var x, y, z, amt;
                var len = arguments.length;
                if ((len | 1) === 1)
                    argsErr('lerp', len, 2);
                if (len === 2) {
                    (_a = a, x = _a.x, y = _a.y, z = _a.z, _a), amt = b;
                }
                else if (len === 3) {
                    return PVector.lerp(a, b, c);
                }
                else {
                    x = a, y = b, z = c, amt = d;
                }
                return this.set(lerp(this.x, x, amt), lerp(this.y, y, amt), lerp(this.z, z, amt));
                var _a;
            };
            PVector.prototype.add = function (v, y, z) {
                if (y != undefined) {
                    if (typeof y === 'object')
                        return PVector.add(v, y, z);
                    this.x += +v, this.y += +y, z != void 0 && (this.z += +z);
                }
                else if (typeof v === 'object')
                    this.x += v.x, this.y += v.y, this.z += v.z;
                else
                    this.x += +v, this.y += +v, this.z += +v;
                return this;
            };
            PVector.prototype.sub = function (v, y, z) {
                if (y != undefined) {
                    if (typeof y === 'object')
                        return PVector.sub(v, y, z);
                    this.x -= +v, this.y -= y, z != void 0 && (this.z -= +z);
                }
                else if (typeof v === 'object')
                    this.x -= v.x, this.y -= v.y, this.z -= v.z;
                else
                    this.x -= v, this.y -= v, this.z -= v;
                return this;
            };
            PVector.prototype.mult = function (v, n, t) {
                if (n != undefined)
                    return PVector.mult(v, n, t);
                if (typeof v === 'object')
                    this.x *= v.x, this.y *= v.y, this.z *= v.z;
                else
                    this.x *= v, this.y *= v, this.z *= v;
                return this;
            };
            PVector.prototype.div = function (v, n, t) {
                if (n != undefined)
                    return PVector.div(v, n, t);
                if (typeof v === 'object')
                    this.x /= v.x, this.y /= v.y, this.z /= v.z;
                else
                    this.x /= v, this.y /= v, this.z /= v;
                return this;
            };
            PVector.prototype.mod = function (v, n, t) {
                if (n != undefined)
                    return PVector.mod(v, n, t);
                if (typeof v === 'object')
                    this.x %= v.x, this.y %= v.y, this.z %= v.z;
                else
                    this.x %= v, this.y %= v, this.z %= v;
                return this;
            };
            PVector.prototype.negate = function () {
                this.x *= -1, this.y *= -1, this.z *= -1;
                return this;
            };
            PVector.prototype.clear = function () {
                this.x = this.y = this.z = 0;
                return this;
            };
            PVector.prototype.isZero = function (tolerance) {
                return isZero(this.x, tolerance) && isZero(this.y, tolerance) && isZero(this.z, tolerance);
            };
            PVector.prototype.isNaN = function () { return this.x !== this.x || this.y !== this.y || this.z !== this.z; };
            PVector.prototype.toString = function () { return "[ " + this.x + ", " + this.y + ", " + this.z + " ]"; };
            PVector.prototype.valueOf = function () { return this.x; };
            PVector.prototype.hashCode = function () { return this.x + this.y + this.z; };
            PVector.prototype.equals = function (o) {
                return o === this ? true : o instanceof PVector &&
                    o.x === this.x && o.y === this.y && o.z === this.z;
            };
            return PVector;
        }());
        PVector = __decorate([
            InjectInto(PApplet)
        ], PVector);
        math.PVector = PVector;
        PVector.prototype.copy = PVector.prototype.clone;
        PVector.prototype.heading2D = PVector.prototype.heading;
        PVector.prototype.rotateZ = PVector.prototype.rotate;
        function PVectorAltBuilder(p) {
            "use strict";
            var DEG_TO_RAD = PConstants.DEG_TO_RAD, RAD_TO_DEG = PConstants.RAD_TO_DEG;
            return (function (_super) {
                __extends(PVectorAlt, _super);
                function PVectorAlt() {
                    return _super.apply(this, arguments) || this;
                }
                PVectorAlt.fromAngle = function (ang, t) {
                    p._degreeIn && (ang *= DEG_TO_RAD);
                    return t && t.set(Math.cos(ang), Math.sin(ang))
                        || new PVectorAlt(Math.cos(ang), Math.sin(ang));
                };
                PVectorAlt.prototype.fromAngle = function (ang, t) {
                    return PVectorAlt.fromAngle(ang, t || this);
                };
                return PVectorAlt;
            }(PVector));
        }
        math.PVectorAltBuilder = PVectorAltBuilder;
    })(math = pjs.math || (pjs.math = {}));
})(pjs || (pjs = {}));
