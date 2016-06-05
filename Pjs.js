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
            "use strict";
            if (prop) {
                var value = clazz[prop];
                Object.freeze(value) && Object.freeze(value.prototype);
            }
            else
                Object.freeze(Object.freeze(clazz)['prototype']);
        }
        utils.Frozen = Frozen;
        function ProtoAssign(clazz, prop) {
            "use strict";
            "use strong";
            clazz.prototype[prop] = clazz[prop];
        }
        utils.ProtoAssign = ProtoAssign;
        function ProtoAdditions(props) {
            "use strict";
            return function (clazz) {
                for (var prop in props)
                    clazz.prototype[prop] = props[prop];
            };
        }
        utils.ProtoAdditions = ProtoAdditions;
        function InjectInto(target) {
            "use strict";
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
var Deprecated = java.lang.Deprecated;
var FunctionalInterface = java.lang.FunctionalInterface;
var Override = java.lang.Override;
var SafeVarargs = java.lang.SafeVarargs;
var SuppressWarnings = java.lang.SuppressWarnings;
var java;
(function (java) {
    var Bool = Boolean;
    var lang;
    (function (lang) {
        var Boolean = (function (_super) {
            __extends(Boolean, _super);
            function Boolean() {
                _super.apply(this, arguments);
            }
            return Boolean;
        }(Bool));
        lang.Boolean = Boolean;
    })(lang || (lang = {}));
})(java || (java = {}));
var java;
(function (java) {
    var util;
    (function (util) {
        var AbstractCollection = (function () {
            function AbstractCollection() {
            }
            return AbstractCollection;
        }());
        util.AbstractCollection = AbstractCollection;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
var AbstractCollection = java.util.AbstractCollection;
var pjs;
(function (pjs) {
    var core;
    (function (core) {
        "use strict";
        var Frozen = pjs.utils.Frozen;
        var ProtoAssign = pjs.utils.ProtoAssign;
        var PConstants = (function () {
            function PConstants() {
            }
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
            PConstants.SHINE = 31;
            PConstants.ER = 32;
            PConstants.EG = 33;
            PConstants.EB = 34;
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
            __decorate([
                ProtoAssign
            ], PConstants, "X", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "Y", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "Z", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "R", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "G", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "B", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "A", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "U", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "V", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NZ", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EDGE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SR", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SA", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SW", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TZ", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "VX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "VY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "VZ", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "VW", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "AR", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "AG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "AB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DR", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DA", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SPR", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SPG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SPB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SHINE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BEEN_LIT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "VERTEX_FIELD_COUNT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "P2D", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "JAVA2D", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "WEBGL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "P3D", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "OPENGL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PDF", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DXF", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "OTHER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "WINDOWS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MAXOSX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "LINUX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EPSILON", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EPSILON_ZERO", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MAX_FLOAT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MIN_FLOAT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MAX_INT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MIN_INT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TWO_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TAU", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "HALF_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "THIRD_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "QUARTER_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SIXTH_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EIGHTH_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TWELFTH_PI", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DEG_TO_RAD", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RAD_TO_DEG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RADIANS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DEGREES", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "WHITESPACE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RGB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ARGB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "HSB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ALPHA", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CMYK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TIFF", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TARGA", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "JPEG", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "GIF", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BLUR", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "GRAY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "INVERT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "OPAQUE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "POSTERIZE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "THRESHOLD", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ERODE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DILATE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "REPLACE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BLEND", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ADD", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SUBTRACT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "LIGHTEST", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DARKEST", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DIFFERENCE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "EXCLUSION", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MULTIPLY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SCREEN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "OVERLAY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "HARD_LIGHT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SOFT_LIGHT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DODGE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BURN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ALPHA_MASK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RED_MASK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "GREEN_MASK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BLUE_MASK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CUSTOM", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ORTHOGRAPHIC", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PERSPECTIVE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "POINT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "POINTS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "LINE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "LINES", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TRIANGLE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TRIANGLES", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TRIANGLE_STRIP", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TRIANGLE_FAN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "QUAD", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "QUADS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "QUAD_STRIP", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "POLYGON", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PATH", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RECT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ELLIPSE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ARC", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SPHERE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BOX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "GROUP", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PRIMITIVE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "GEOMETRY", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "VERTEX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BEZIER_VERTEX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CURVE_VERTEX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BREAK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CLOSESHAPE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "OPEN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CLOSE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CORNER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CORNERS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RADIUS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CENTER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DIAMETER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BASELINE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TOP", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BOTTOM", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NORMAL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NORMALIZED", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "IMAGE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MODEL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SHAPE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SQUARE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ROUND", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PROJECT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MITER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BEVEL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "AMBIENT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DIRECTIONAL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SPOT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "BACKSPACE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TAB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENTER", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RETURN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ESC", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DELETE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CODED", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SHIFT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CONTROL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ALT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CAPSLK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PGUP", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PGDN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "END", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "HOME", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "LEFT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "UP", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "RIGHT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DOWN", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F1", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F2", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F3", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F4", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F5", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F6", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F7", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F8", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F9", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F10", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F11", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "F12", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NUMLK", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "META", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "INSERT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ARROW", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "CROSS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "HAND", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MOVE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "TEXT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "WAIT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NOCURSOR", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DISABLE_OPENGL_2X_SMOOTH", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_OPENGL_2X_SMOOTH", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_OPENGL_4X_SMOOTH", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_NATIVE_FONTS", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DISABLE_DEPTH_TEST", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_DEPTH_TEST", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_DEPTH_SORT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DISABLE_DEPTH_SORT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DISABLE_OPENGL_ERROR_REPORT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_OPENGL_ERROR_REPORT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "ENABLE_ACCURATE_TEXTURES", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "DISABLE_ACCURATE_TEXTURES", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "HINT_COUNT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "SINCOS_LENGTH", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PRECISIONB", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PRECISIONF", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PREC_MAXVAL", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PREC_ALPHA_SHIFT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "PREC_RED_SHIFT", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NORMAL_MODE_AUTO", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NORMAL_MODE_SHAPE", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "NORMAL_MODE_VERTEX", void 0);
            __decorate([
                ProtoAssign
            ], PConstants, "MAX_LIGHTS", void 0);
            PConstants = __decorate([
                Frozen
            ], PConstants);
            return PConstants;
        }());
        core.PConstants = PConstants;
    })(core = pjs.core || (pjs.core = {}));
})(pjs || (pjs = {}));
var pjs;
(function (pjs) {
    var math;
    (function (math) {
        "use strict";
        var Frozen = pjs.utils.Frozen;
        var Maths = (function (_super) {
            __extends(Maths, _super);
            function Maths() {
                _super.apply(this, arguments);
            }
            Maths.prototype.random = function (low, high) { return Math.random(); };
            Maths.prototype.lerp = function (start, stop, amt) { return amt * (stop - start) + start; };
            Maths.prototype.sq = function (n) { return n * n; };
            Maths.prototype.isZero = function (n, tolerance) {
                if (tolerance === void 0) { tolerance = Maths.EPSILON_ZERO; }
                return n !== n || (n <= (tolerance = Math.abs(tolerance)) && n >= -tolerance);
            };
            Maths.random = Maths.prototype.random;
            Maths.lerp = Maths.prototype.lerp;
            Maths.sq = Maths.prototype.sq;
            Maths.isZero = Maths.prototype.isZero;
            __decorate([
                Frozen
            ], Maths.prototype, "random", null);
            __decorate([
                Frozen
            ], Maths.prototype, "lerp", null);
            __decorate([
                Frozen
            ], Maths.prototype, "sq", null);
            __decorate([
                Frozen
            ], Maths.prototype, "isZero", null);
            return Maths;
        }(pjs.core.PConstants));
        math.Maths = Maths;
    })(math = pjs.math || (pjs.math = {}));
})(pjs || (pjs = {}));
var StrictMath = Math;
var pjs;
(function (pjs) {
    var core;
    (function (core) {
        "use strict";
        var Processing = (function (_super) {
            __extends(Processing, _super);
            function Processing() {
                _super.call(this);
                this.init();
            }
            Processing.prototype.init = function () { this.PVector = pjs.math.PVectorAltBuilder(this), this._degreeIn = true; };
            Processing.prototype.random = function (low, high) { return Math.random(); };
            return Processing;
        }(pjs.math.Maths));
        core.Processing = Processing;
    })(core = pjs.core || (pjs.core = {}));
})(pjs || (pjs = {}));
var Processing = pjs.core.Processing;
var PApplet = Processing;
var pjs;
(function (pjs) {
    var math;
    (function (math) {
        "use strict";
        var Frozen = pjs.utils.Frozen;
        var InjectInto = pjs.utils.InjectInto;
        var PConstants = pjs.core.PConstants;
        var lerp = math.Maths.lerp, sq = math.Maths.sq, isZero = math.Maths.isZero, TAU = PConstants.TAU, argsErr = function (mtd, len, min) {
            throw "Too few args passed to " + mtd + "() [" + len + " < " + min + "].";
        }, xyzObjCheck = function (obj) { return obj != null && 'x' in obj; }, pjsCheck = function (obj) { return obj != null && 'random' in obj; };
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
                return target && target.set(Math.cos(angle), Math.sin(angle))
                    || new PVector(Math.cos(angle), Math.sin(angle));
            };
            PVector.random2D = function (target, parent) {
                var isPjs = pjsCheck(target), rnd = parent ? parent : isPjs ? target : Math;
                return PVector.fromAngle(TAU * rnd.random(), isPjs ? undefined : target);
            };
            PVector.random3D = function (target, parent) {
                var isPjs = pjsCheck(target), rnd = parent ? parent : isPjs ? target : Math, ang = TAU * rnd.random(), vz = 2 * rnd.random() - 1, vzr = Math.sqrt(1 - vz * vz), vx = vzr * Math.cos(ang), vy = vzr * Math.sin(ang);
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
                return target && target.set(cx, cy, cz) || new PVector(cx, cy, cz);
            };
            PVector.angleBetween = function (v1, v2, magSq1, magSq2, dot) {
                if (v1.isZero() || v2.isZero())
                    return 0;
                magSq1 = magSq1 || v1.magSq(), magSq2 = magSq2 || v2.magSq();
                dot = dot || PVector.dot(v1, v2);
                var amt = dot / Math.sqrt(magSq1 * magSq2);
                return amt <= -1 ? Math.PI : amt >= 1 ? 0 : Math.acos(amt);
            };
            PVector.lerp = function (v1, v2, amt, target) {
                return (target && target.set(v1) || v1.clone()).lerp(v2, amt);
            };
            PVector.add = function (v1, v2, target) {
                return target && target.set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
                    || new PVector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
            };
            PVector.sub = function (v1, v2, target) {
                return target && target.set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
                    || new PVector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
            };
            PVector.subInv = function (v1, v2, target) {
                return target && target.set(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z)
                    || new PVector(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
            };
            PVector.mult = function (v, n, target) {
                if (typeof n === 'number')
                    return target && target.set(v.x * n, v.y * n, v.z * n)
                        || new PVector(v.x * n, v.y * n, v.z * n);
                else
                    return target && target.set(v.x * n.x, v.y * n.y, v.z * n.z)
                        || new PVector(v.x * n.x, v.y * n.y, v.z * n.z);
            };
            PVector.div = function (v, n, target) {
                if (typeof n === 'number')
                    return target && target.set(v.x / n, v.y / n, v.z / n)
                        || new PVector(v.x / n, v.y / n, v.z / n);
                else
                    return target && target.set(v.x / n.x, v.y / n.y, v.z / n.z)
                        || new PVector(v.x / n.x, v.y / n.y, v.z / n.z);
            };
            PVector.mod = function (v, n, target) {
                if (typeof n === 'number')
                    return target && target.set(v.x % n, v.y % n, v.z % n)
                        || new PVector(v.x % n, v.y % n, v.z % n);
                else
                    return target && target.set(v.x % n.x, v.y % n.y, v.z % n.z)
                        || new PVector(v.x % n.x, v.y % n.y, v.z % n.z);
            };
            PVector.compare = function (a, b) { return a.x - b.x || a.y - b.y || a.z - b.z; };
            PVector.prototype.compareTo = function (v) { return this.x - v.x || this.y - v.y || this.z - v.z; };
            PVector.prototype.array = function () { return [this.x, this.y, this.z]; };
            PVector.prototype.object = function () { return { x: this.x, y: this.y, z: this.z }; };
            PVector.prototype.clone = function () { return new PVector(this.x, this.y, this.z); };
            PVector.prototype.copy = function () { return this.clone(); };
            PVector.prototype.get = function (target) {
                if (!arguments.length)
                    return this.clone();
                if (typeof target !== 'object')
                    return this.array();
                if (xyzObjCheck(target))
                    target.x = this.x, target.y = this.y, target.z = this.z;
                else
                    target[0] = this.x, target[1] = this.y, target[2] = this.z;
                return target;
            };
            PVector.prototype.set = function (v, y, z) {
                var len = arguments.length;
                if (len > 1)
                    this.x = +v, this.y = +y, z != undefined && (this.z = +z);
                else if (len === 1)
                    this.set(v[0] || v.x || 0, v[1] || v.y || 0, v[2] || v.z);
                else
                    argsErr('set', len, 1);
                return this;
            };
            PVector.prototype.normalize = function (target, mag) {
                var m = mag || this.mag(), canDivide = m !== 0 && m !== 1;
                if (!arguments.length)
                    return canDivide && this.div(m) || this;
                return canDivide ? PVector.div(this, m, target)
                    : target && target.set(this) || this.clone();
            };
            PVector.prototype.limit = function (max, target, magSq) {
                magSq = magSq || this.magSq();
                return magSq > max * max ? this.normalize(target, Math.sqrt(magSq)).mult(max)
                    : target && target.set(this) || this;
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
                return this.x * this.x + this.y * this.y + this.z * this.z;
            };
            PVector.prototype.setMag = function (target, length, mag) {
                var len = arguments.length;
                return len === 1 ? this.normalize().mult(target) :
                    len > 1 ? this.normalize(target, mag).mult(length) :
                        argsErr('setMag', len, 1);
            };
            PVector.prototype.rotate = function (angle, target) {
                var c = Math.cos(angle), s = Math.sin(angle), x = c * this.x - s * this.y, y = s * this.x + c * this.y;
                return target && target.set(x, y) || this.set(x, y);
            };
            PVector.prototype.rotateX = function (angle, target) {
                var c = Math.cos(angle), s = Math.sin(angle), y = c * this.y - s * this.z, z = s * this.y + c * this.z;
                return target && target.set(this.x, y, z) || this.set(this.x, y, z);
            };
            PVector.prototype.rotateY = function (angle, target) {
                var c = Math.cos(angle), s = Math.sin(angle), x = s * this.z + c * this.x, z = c * this.z - s * this.x;
                return target && target.set(x, this.y, z) || this.set(x, this.y, z);
            };
            PVector.prototype.rotateZ = function (angle, target) {
                return this.rotate(angle, target);
            };
            PVector.prototype.fromAngle = function (angle, target) {
                return PVector.fromAngle(angle, target || this);
            };
            PVector.prototype.random2D = function (target, parent) {
                return pjsCheck(target) && PVector.random2D(this, target)
                    || PVector.random2D(target || this, parent);
            };
            PVector.prototype.random3D = function (target, parent) {
                return pjsCheck(target) && PVector.random3D(this, target)
                    || PVector.random3D(target || this, parent);
            };
            PVector.prototype.dist = function (v1, v2) {
                return v2 && PVector.dist(v1, v2) || PVector.dist(this, v1);
            };
            PVector.prototype.distSq = function (v1, v2) {
                return v2 && PVector.distSq(v1, v2) || PVector.distSq(this, v1);
            };
            PVector.prototype.dot = function (v, y, z) {
                var len = arguments.length;
                return len === 1 ? PVector.dot(this, v) :
                    len === 2 ? PVector.dot(v, y) :
                        len > 2 ? this.x * v + this.y * y + this.z * z :
                            argsErr('dot', len, 1);
            };
            PVector.prototype.cross = function (v1, v2, target) {
                return target && PVector.cross(v1, v2, target) || PVector.cross(this, v1, v2);
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
                return this.set(lerp(this.x, x, amt), lerp(this.y, y, amt), lerp(this.z, z, amt));
            };
            PVector.prototype.add = function (v, y, z) {
                if (typeof y !== 'number')
                    return PVector.add(v, y, z);
                else {
                    var len = arguments.length;
                    if (len === 1) {
                        if (typeof v === 'number')
                            this.x += v, this.y += v, this.z += v;
                        else
                            this.x += v.x, this.y += v.y, this.z += v.z;
                    }
                    else if (len > 1) {
                        this.x += +v, this.y += y, z != undefined && (this.z += +z);
                    }
                    else
                        argsErr('add', len, 1);
                }
                return this;
            };
            PVector.prototype.sub = function (v, y, z) {
                if (typeof y !== 'number')
                    return PVector.sub(v, y, z);
                else {
                    var len = arguments.length;
                    if (len === 1) {
                        if (typeof v === 'number')
                            this.x -= v, this.y -= v, this.z -= v;
                        else
                            this.x -= v.x, this.y -= v.y, this.z -= v.z;
                    }
                    else if (len > 1) {
                        this.x -= +v, this.y -= y, z != undefined && (this.z -= +z);
                    }
                    else
                        argsErr('sub', len, 1);
                }
                return this;
            };
            PVector.prototype.subInv = function (v, y, z) {
                if (typeof y !== 'number')
                    return PVector.subInv(v, y, z);
                else {
                    var len = arguments.length;
                    if (len === 1) {
                        if (typeof v === 'number')
                            this.x = v - this.x, this.y = v - this.y, this.z = v - this.z;
                        else
                            this.x = v.x - this.x, this.y = v.y - this.y, this.z = v.z - this.z;
                    }
                    else if (len > 1) {
                        this.x = +v - this.x, this.y = y - this.y, z != undefined && (this.z = +z - this.z);
                    }
                    else
                        argsErr('sub', len, 1);
                }
                return this;
            };
            PVector.prototype.mult = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number')
                        this.x *= v, this.y *= v, this.z *= v;
                    else
                        this.x *= v.x, this.y *= v.y, this.z *= v.z;
                }
                else if (len > 1)
                    return PVector.mult(v, n, target);
                else
                    argsErr('mult', len, 1);
                return this;
            };
            PVector.prototype.div = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number')
                        this.x /= v, this.y /= v, this.z /= v;
                    else
                        this.x /= v.x, this.y /= v.y, this.z /= v.z;
                }
                else if (len > 1)
                    return PVector.div(v, n, target);
                else
                    argsErr('div', len, 1);
                return this;
            };
            PVector.prototype.mod = function (v, n, target) {
                var len = arguments.length;
                if (len === 1) {
                    if (typeof v === 'number')
                        this.x %= v, this.y %= v, this.z %= v;
                    else
                        this.x %= v.x, this.y %= v.y, this.z %= v.z;
                }
                else if (len > 1)
                    return PVector.mod(v, n, target);
                else
                    argsErr('mod', len, 1);
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
            PVector.prototype.valueOf = function () { return this.hashCode(); };
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
                Frozen
            ], PVector.prototype, "compareTo", null);
            __decorate([
                Frozen
            ], PVector.prototype, "array", null);
            __decorate([
                Frozen
            ], PVector.prototype, "object", null);
            __decorate([
                Frozen
            ], PVector.prototype, "clone", null);
            __decorate([
                Frozen
            ], PVector.prototype, "copy", null);
            __decorate([
                Frozen
            ], PVector.prototype, "get", null);
            __decorate([
                Frozen
            ], PVector.prototype, "set", null);
            __decorate([
                Frozen
            ], PVector.prototype, "normalize", null);
            __decorate([
                Frozen
            ], PVector.prototype, "limit", null);
            __decorate([
                Frozen
            ], PVector.prototype, "heading", null);
            __decorate([
                Deprecated,
                Frozen
            ], PVector.prototype, "heading2D", null);
            __decorate([
                Frozen
            ], PVector.prototype, "mag", null);
            __decorate([
                Frozen
            ], PVector.prototype, "magSq", null);
            __decorate([
                Frozen
            ], PVector.prototype, "setMag", null);
            __decorate([
                Frozen
            ], PVector.prototype, "rotate", null);
            __decorate([
                Frozen
            ], PVector.prototype, "rotateX", null);
            __decorate([
                Frozen
            ], PVector.prototype, "rotateY", null);
            __decorate([
                Frozen
            ], PVector.prototype, "rotateZ", null);
            __decorate([
                Frozen
            ], PVector.prototype, "fromAngle", null);
            __decorate([
                Frozen
            ], PVector.prototype, "random2D", null);
            __decorate([
                Frozen
            ], PVector.prototype, "random3D", null);
            __decorate([
                Frozen
            ], PVector.prototype, "dist", null);
            __decorate([
                Frozen
            ], PVector.prototype, "distSq", null);
            __decorate([
                Frozen
            ], PVector.prototype, "dot", null);
            __decorate([
                Frozen
            ], PVector.prototype, "cross", null);
            __decorate([
                Frozen
            ], PVector.prototype, "angleBetween", null);
            __decorate([
                Frozen
            ], PVector.prototype, "lerp", null);
            __decorate([
                Frozen
            ], PVector.prototype, "add", null);
            __decorate([
                Frozen
            ], PVector.prototype, "sub", null);
            __decorate([
                Frozen
            ], PVector.prototype, "subInv", null);
            __decorate([
                Frozen
            ], PVector.prototype, "mult", null);
            __decorate([
                Frozen
            ], PVector.prototype, "div", null);
            __decorate([
                Frozen
            ], PVector.prototype, "mod", null);
            __decorate([
                Frozen
            ], PVector.prototype, "negate", null);
            __decorate([
                Frozen
            ], PVector.prototype, "clear", null);
            __decorate([
                Frozen
            ], PVector.prototype, "isZero", null);
            __decorate([
                Frozen
            ], PVector.prototype, "isNaN", null);
            __decorate([
                Frozen
            ], PVector.prototype, "toString", null);
            __decorate([
                Frozen
            ], PVector.prototype, "valueOf", null);
            __decorate([
                Frozen
            ], PVector.prototype, "equals", null);
            __decorate([
                Frozen
            ], PVector.prototype, "hashCode", null);
            __decorate([
                Frozen
            ], PVector, "fromAngle", null);
            __decorate([
                Frozen
            ], PVector, "random2D", null);
            __decorate([
                Frozen
            ], PVector, "random3D", null);
            __decorate([
                Frozen
            ], PVector, "dist", null);
            __decorate([
                Frozen
            ], PVector, "distSq", null);
            __decorate([
                Frozen
            ], PVector, "dot", null);
            __decorate([
                Frozen
            ], PVector, "cross", null);
            __decorate([
                Frozen
            ], PVector, "angleBetween", null);
            __decorate([
                Frozen
            ], PVector, "lerp", null);
            __decorate([
                Frozen
            ], PVector, "add", null);
            __decorate([
                Frozen
            ], PVector, "sub", null);
            __decorate([
                Frozen
            ], PVector, "subInv", null);
            __decorate([
                Frozen
            ], PVector, "mult", null);
            __decorate([
                Frozen
            ], PVector, "div", null);
            __decorate([
                Frozen
            ], PVector, "mod", null);
            __decorate([
                Frozen
            ], PVector, "compare", null);
            PVector = __decorate([
                InjectInto(Processing)
            ], PVector);
            return PVector;
        }());
        math.PVector = PVector;
        function PVectorAltBuilder(p) {
            var DEG_TO_RAD = PConstants.DEG_TO_RAD, RAD_TO_DEG = PConstants.RAD_TO_DEG;
            return (function (_super) {
                __extends(PVectorAlt, _super);
                function PVectorAlt() {
                    _super.apply(this, arguments);
                }
                PVectorAlt.fromAngle = function (angle, target) {
                    p._degreeIn && (angle *= DEG_TO_RAD);
                    return target && target.set(Math.cos(angle), Math.sin(angle))
                        || new PVectorAlt(Math.cos(angle), Math.sin(angle));
                };
                PVectorAlt.prototype.fromAngle = function (angle, target) {
                    return PVectorAlt.fromAngle(angle, target || this);
                };
                return PVectorAlt;
            }(PVector));
        }
        math.PVectorAltBuilder = PVectorAltBuilder;
    })(math = pjs.math || (pjs.math = {}));
})(pjs || (pjs = {}));
