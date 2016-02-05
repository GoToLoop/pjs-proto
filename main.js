var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ProtoAssign(clazz, prop) {
    clazz.prototype[prop] = clazz[prop];
}
function Frozen(clazz, prop) {
    //prop? Object.freeze(clazz[prop]) : Object.freeze(Object.freeze(clazz)['prototype'])
    if (prop) {
        var value = clazz[prop];
        Object.freeze(value) && Object.freeze(value.prototype);
    }
    else
        Object.freeze(Object.freeze(clazz)['prototype']);
}
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
    // Stroke
    PConstants.SR = 13;
    PConstants.SG = 14;
    PConstants.SB = 15;
    PConstants.SA = 16;
    PConstants.SW = 17;
    // Transformations (2D and 3D)
    PConstants.TX = 18;
    PConstants.TY = 19;
    PConstants.TZ = 20;
    PConstants.VX = 21;
    PConstants.VY = 22;
    PConstants.VZ = 23;
    PConstants.VW = 24;
    // Material properties
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
    // Renderers
    PConstants.P2D = 1;
    PConstants.JAVA2D = 1;
    PConstants.WEBGL = 2;
    PConstants.P3D = 2;
    PConstants.OPENGL = 2;
    PConstants.PDF = 0;
    PConstants.DXF = 0;
    // Platform IDs
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
    // Color modes
    PConstants.RGB = 1;
    PConstants.ARGB = 2;
    PConstants.HSB = 3;
    PConstants.ALPHA = 4;
    PConstants.CMYK = 5;
    // Image file types
    PConstants.TIFF = 0;
    PConstants.TARGA = 1;
    PConstants.JPEG = 2;
    PConstants.GIF = 3;
    // Filter/convert types
    PConstants.BLUR = 11;
    PConstants.GRAY = 12;
    PConstants.INVERT = 13;
    PConstants.OPAQUE = 14;
    PConstants.POSTERIZE = 15;
    PConstants.THRESHOLD = 16;
    PConstants.ERODE = 17;
    PConstants.DILATE = 18;
    // Blend modes
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
    // Color component bit masks
    PConstants.ALPHA_MASK = 0xff000000;
    PConstants.RED_MASK = 0x00ff0000;
    PConstants.GREEN_MASK = 0x0000ff00;
    PConstants.BLUE_MASK = 0x000000ff;
    // Projection matrices
    PConstants.CUSTOM = 0;
    PConstants.ORTHOGRAPHIC = 2;
    PConstants.PERSPECTIVE = 3;
    // Shapes
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
    //@ProtoAssign static readonly PATH = 21 // shared with Shape PATH
    PConstants.GEOMETRY = 3;
    // Shape Vertex
    PConstants.VERTEX = 0;
    PConstants.BEZIER_VERTEX = 1;
    PConstants.CURVE_VERTEX = 2;
    PConstants.BREAK = 3;
    PConstants.CLOSESHAPE = 4;
    // Shape closing modes
    PConstants.OPEN = 1;
    PConstants.CLOSE = 2;
    // Shape drawing modes
    PConstants.CORNER = 0; // Draw mode convention to use (x y) to (width height)
    PConstants.CORNERS = 1; // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
    PConstants.RADIUS = 2; // Draw mode from the center and using the radius
    PConstants.CENTER = 3; // Draw from the center using second pair of values as the diameter
    PConstants.DIAMETER = 3; // Synonym for the CENTER constant. Draw from the center
    // Text vertical alignment modes
    PConstants.BASELINE = 0; // Default vertical alignment for text placement
    PConstants.TOP = 101; // Align text to the top
    PConstants.BOTTOM = 102; // Align text from the bottom using the baseline
    // UV Texture coordinate modes
    PConstants.NORMAL = 1;
    PConstants.NORMALIZED = 1;
    PConstants.IMAGE = 2;
    // Text placement modes
    PConstants.MODEL = 4;
    PConstants.SHAPE = 5;
    // Stroke modes
    PConstants.SQUARE = 'butt';
    PConstants.ROUND = 'round';
    PConstants.PROJECT = 'square';
    PConstants.MITER = 'miter';
    PConstants.BEVEL = 'bevel';
    // Lighting modes
    PConstants.AMBIENT = 0;
    PConstants.DIRECTIONAL = 1;
    //@ProtoAssign static readonly POINT = 2 Shared with Shape constant
    PConstants.SPOT = 3;
    // Key constants
    // Both key and keyCode will be equal to these values
    PConstants.BACKSPACE = 8;
    PConstants.TAB = 9;
    PConstants.ENTER = 10;
    PConstants.RETURN = 13;
    PConstants.ESC = 27;
    PConstants.DELETE = 127;
    PConstants.CODED = 0xffff;
    // p.key will be CODED and p.keyCode will be this value
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
    // Cursor types
    PConstants.ARROW = 'default';
    PConstants.CROSS = 'crosshair';
    PConstants.HAND = 'pointer';
    PConstants.MOVE = 'move';
    PConstants.TEXT = 'text';
    PConstants.WAIT = 'wait';
    PConstants.NOCURSOR = "url('data:image/gif;base64R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') auto";
    // Hints
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
    // PJS defined constants
    PConstants.SINCOS_LENGTH = 720; // every half degree
    PConstants.PRECISIONB = 15; // fixed point precision is limited to 15 bits!!
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
    ], PConstants, "DEG_TO_RAD", void 0);
    __decorate([
        ProtoAssign
    ], PConstants, "RAD_TO_DEG", void 0);
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
        // Draw mode convention to use (x y) to (width height)
        ProtoAssign
    ], PConstants, "CORNERS", void 0);
    __decorate([
        // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
        ProtoAssign
    ], PConstants, "RADIUS", void 0);
    __decorate([
        // Draw mode from the center and using the radius
        ProtoAssign
    ], PConstants, "CENTER", void 0);
    __decorate([
        // Draw from the center using second pair of values as the diameter
        ProtoAssign
    ], PConstants, "DIAMETER", void 0);
    __decorate([
        // Synonym for the CENTER constant. Draw from the center
        ProtoAssign
    ], PConstants, "BASELINE", void 0);
    __decorate([
        // Default vertical alignment for text placement
        ProtoAssign
    ], PConstants, "TOP", void 0);
    __decorate([
        // Align text to the top
        ProtoAssign
    ], PConstants, "BOTTOM", void 0);
    __decorate([
        // Align text from the bottom using the baseline
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
        // every half degree
        ProtoAssign
    ], PConstants, "PRECISIONB", void 0);
    __decorate([
        // fixed point precision is limited to 15 bits!!
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Maths = (function (_super) {
    __extends(Maths, _super);
    function Maths() {
        _super.apply(this, arguments);
    }
    Maths.prototype.random = function () { return Math.random(); };
    Maths.prototype.lerp = function (start, stop, amt) { return amt * (stop - start) + start; };
    Maths.prototype.sq = function (n) { return n * n; };
    Maths.random = Maths.prototype.random;
    Maths.lerp = Maths.prototype.lerp;
    Maths.sq = Maths.prototype.sq;
    __decorate([
        Frozen
    ], Maths.prototype, "random", null);
    __decorate([
        Frozen
    ], Maths.prototype, "lerp", null);
    __decorate([
        Frozen
    ], Maths.prototype, "sq", null);
    Maths = __decorate([
        Frozen
    ], Maths);
    return Maths;
}(PConstants));
var StrictMath = Maths;
var pjs;
(function (pjs) {
    var classes;
    (function (classes) {
        "use strict"; //; "use strong"
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
                    return this.copy(); // @Deprecated
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
                //return -Math.atan2(-this.y, this.x)
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
                Frozen
            ], PVector.prototype, "array", null);
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
            ], PVector.prototype, "mult", null);
            __decorate([
                Frozen
            ], PVector.prototype, "div", null);
            __decorate([
                Frozen
            ], PVector.prototype, "toString", null);
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
            ], PVector, "mult", null);
            __decorate([
                Frozen
            ], PVector, "div", null);
            PVector = __decorate([
                Frozen
            ], PVector);
            return PVector;
        }());
        classes.PVector = PVector;
        Object.freeze(Object.freeze(PVector.random2D).prototype);
        Object.freeze(Object.freeze(PVector.random3D).prototype);
    })(classes = pjs.classes || (pjs.classes = {}));
})(pjs || (pjs = {}));
var Processing = (function (_super) {
    __extends(Processing, _super);
    function Processing() {
        _super.call(this);
    }
    Processing.PVector = pjs.classes.PVector;
    __decorate([
        ProtoAssign
    ], Processing, "PVector", void 0);
    return Processing;
}(Maths));
