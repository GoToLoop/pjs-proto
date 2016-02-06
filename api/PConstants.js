var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    PConstants.MAX_FLOAT = 3.4028235e+38;
    PConstants.MIN_FLOAT = -3.4028235e+38;
    PConstants.MAX_INT = 2147483647;
    PConstants.MIN_INT = -2147483648;
    PConstants.PI = Math.PI;
    PConstants.TWO_PI = 2 * Math.PI;
    PConstants.TAU = 2 * Math.PI;
    PConstants.HALF_PI = Math.PI / 2;
    PConstants.THIRD_PI = Math.PI / 3;
    PConstants.QUARTER_PI = Math.PI / 4;
    PConstants.DEG_TO_RAD = Math.PI / 180;
    PConstants.RAD_TO_DEG = 180 / Math.PI;
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
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "X", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "Y", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "Z", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "R", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "G", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "B", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "A", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "U", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "V", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NZ", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "EDGE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SR", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SA", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SW", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TZ", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "VX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "VY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "VZ", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "VW", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "AR", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "AG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "AB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DR", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DA", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SPR", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SPG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SPB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SHINE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "EG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "EB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BEEN_LIT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "VERTEX_FIELD_COUNT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "P2D", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "JAVA2D", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "WEBGL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "P3D", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "OPENGL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PDF", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DXF", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "OTHER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "WINDOWS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MAXOSX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "LINUX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "EPSILON", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MAX_FLOAT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MIN_FLOAT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MAX_INT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MIN_INT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PI", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TWO_PI", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TAU", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "HALF_PI", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "THIRD_PI", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "QUARTER_PI", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DEG_TO_RAD", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RAD_TO_DEG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "WHITESPACE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RGB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ARGB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "HSB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ALPHA", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CMYK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TIFF", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TARGA", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "JPEG", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "GIF", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BLUR", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "GRAY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "INVERT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "OPAQUE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "POSTERIZE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "THRESHOLD", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ERODE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DILATE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "REPLACE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BLEND", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ADD", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SUBTRACT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "LIGHTEST", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DARKEST", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DIFFERENCE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "EXCLUSION", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MULTIPLY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SCREEN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "OVERLAY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "HARD_LIGHT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SOFT_LIGHT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DODGE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BURN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ALPHA_MASK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RED_MASK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "GREEN_MASK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BLUE_MASK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CUSTOM", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ORTHOGRAPHIC", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PERSPECTIVE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "POINT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "POINTS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "LINE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "LINES", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TRIANGLE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TRIANGLES", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TRIANGLE_STRIP", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TRIANGLE_FAN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "QUAD", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "QUADS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "QUAD_STRIP", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "POLYGON", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PATH", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RECT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ELLIPSE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ARC", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SPHERE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BOX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "GROUP", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PRIMITIVE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "GEOMETRY", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "VERTEX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BEZIER_VERTEX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CURVE_VERTEX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BREAK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CLOSESHAPE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "OPEN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CLOSE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CORNER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CORNERS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RADIUS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CENTER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DIAMETER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BASELINE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TOP", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BOTTOM", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NORMAL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NORMALIZED", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "IMAGE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MODEL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SHAPE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "SQUARE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "ROUND", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "PROJECT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "MITER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "BEVEL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "AMBIENT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DIRECTIONAL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SPOT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "BACKSPACE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "TAB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENTER", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RETURN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ESC", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DELETE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CODED", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SHIFT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CONTROL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ALT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "CAPSLK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PGUP", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PGDN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "END", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "HOME", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "LEFT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "UP", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "RIGHT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DOWN", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F1", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F2", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F3", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F4", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F5", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F6", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F7", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F8", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F9", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F10", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F11", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "F12", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NUMLK", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "META", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "INSERT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "ARROW", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "CROSS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "HAND", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "MOVE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "TEXT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', String)
    ], PConstants, "WAIT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NOCURSOR", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DISABLE_OPENGL_2X_SMOOTH", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_OPENGL_2X_SMOOTH", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_OPENGL_4X_SMOOTH", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_NATIVE_FONTS", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DISABLE_DEPTH_TEST", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_DEPTH_TEST", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_DEPTH_SORT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DISABLE_DEPTH_SORT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DISABLE_OPENGL_ERROR_REPORT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_OPENGL_ERROR_REPORT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "ENABLE_ACCURATE_TEXTURES", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "DISABLE_ACCURATE_TEXTURES", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "HINT_COUNT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "SINCOS_LENGTH", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PRECISIONB", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PRECISIONF", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PREC_MAXVAL", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PREC_ALPHA_SHIFT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "PREC_RED_SHIFT", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NORMAL_MODE_AUTO", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NORMAL_MODE_SHAPE", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "NORMAL_MODE_VERTEX", void 0);
    __decorate([
        ProtoAssign, 
        __metadata('design:type', Object)
    ], PConstants, "MAX_LIGHTS", void 0);
    PConstants = __decorate([
        Frozen, 
        __metadata('design:paramtypes', [])
    ], PConstants);
    return PConstants;
}());
