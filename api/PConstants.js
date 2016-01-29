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
    return PConstants;
}());
PConstants.prototype = {
    X: 0,
    Y: 1,
    Z: 2,
    R: 3,
    G: 4,
    B: 5,
    A: 6,
    U: 7,
    V: 8,
    NX: 9,
    NY: 10,
    NZ: 11,
    EDGE: 12,
    SR: 13,
    SG: 14,
    SB: 15,
    SA: 16,
    SW: 17,
    TX: 18,
    TY: 19,
    TZ: 20,
    VX: 21,
    VY: 22,
    VZ: 23,
    VW: 24,
    AR: 25,
    AG: 26,
    AB: 27,
    DR: 3,
    DG: 4,
    DB: 5,
    DA: 6,
    SPR: 28,
    SPG: 29,
    SPB: 30,
    SHINE: 31,
    ER: 32,
    EG: 33,
    EB: 34,
    BEEN_LIT: 35,
    VERTEX_FIELD_COUNT: 36,
    P2D: 1,
    JAVA2D: 1,
    WEBGL: 2,
    P3D: 2,
    OPENGL: 2,
    PDF: 0,
    DXF: 0,
    OTHER: 0,
    WINDOWS: 1,
    MAXOSX: 2,
    LINUX: 3,
    EPSILON: 1e-4,
    MAX_FLOAT: 3.4028235e+38,
    MIN_FLOAT: -3.4028235e+38,
    MAX_INT: 2147483647,
    MIN_INT: -2147483648,
    PI: Math.PI,
    TWO_PI: 2 * Math.PI,
    TAU: 2 * Math.PI,
    HALF_PI: Math.PI / 2,
    THIRD_PI: Math.PI / 3,
    QUARTER_PI: Math.PI / 4,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    WHITESPACE: PConstants.WHITESPACE,
    RGB: 1,
    ARGB: 2,
    HSB: 3,
    ALPHA: 4,
    CMYK: 5,
    TIFF: 0,
    TARGA: 1,
    JPEG: 2,
    GIF: 3,
    BLUR: 11,
    GRAY: 12,
    INVERT: 13,
    OPAQUE: 14,
    POSTERIZE: 15,
    THRESHOLD: 16,
    ERODE: 17,
    DILATE: 18,
    REPLACE: 0,
    BLEND: 1 << 0,
    ADD: 1 << 1,
    SUBTRACT: 1 << 2,
    LIGHTEST: 1 << 3,
    DARKEST: 1 << 4,
    DIFFERENCE: 1 << 5,
    EXCLUSION: 1 << 6,
    MULTIPLY: 1 << 7,
    SCREEN: 1 << 8,
    OVERLAY: 1 << 9,
    HARD_LIGHT: 1 << 10,
    SOFT_LIGHT: 1 << 11,
    DODGE: 1 << 12,
    BURN: 1 << 13,
    ALPHA_MASK: 0xff000000,
    RED_MASK: 0x00ff0000,
    GREEN_MASK: 0x0000ff00,
    BLUE_MASK: 0x000000ff,
    CUSTOM: 0,
    ORTHOGRAPHIC: 2,
    PERSPECTIVE: 3,
    POINT: 2,
    POINTS: 2,
    LINE: 4,
    LINES: 4,
    TRIANGLE: 8,
    TRIANGLES: 9,
    TRIANGLE_STRIP: 10,
    TRIANGLE_FAN: 11,
    QUAD: 16,
    QUADS: 16,
    QUAD_STRIP: 17,
    POLYGON: 20,
    PATH: 21,
    RECT: 30,
    ELLIPSE: 31,
    ARC: 32,
    SPHERE: 40,
    BOX: 41,
    GROUP: 0,
    PRIMITIVE: 1,
    GEOMETRY: 3,
    VERTEX: 0,
    BEZIER_VERTEX: 1,
    CURVE_VERTEX: 2,
    BREAK: 3,
    CLOSESHAPE: 4,
    OPEN: 1,
    CLOSE: 2,
    CORNER: 0,
    CORNERS: 1,
    RADIUS: 2,
    CENTER: 3,
    DIAMETER: 3,
    BASELINE: 0,
    TOP: 101,
    BOTTOM: 102,
    NORMAL: 1,
    NORMALIZED: 1,
    IMAGE: 2,
    MODEL: 4,
    SHAPE: 5,
    SQUARE: PConstants.SQUARE,
    ROUND: PConstants.ROUND,
    PROJECT: PConstants.PROJECT,
    MITER: PConstants.MITER,
    BEVEL: PConstants.BEVEL,
    AMBIENT: 0,
    DIRECTIONAL: 1,
    SPOT: 3,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 10,
    RETURN: 13,
    ESC: 27,
    DELETE: 127,
    CODED: 0xffff,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    CAPSLK: 20,
    PGUP: 33,
    PGDN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLK: 144,
    META: 157,
    INSERT: 155,
    ARROW: PConstants.ARROW,
    CROSS: PConstants.CROSS,
    HAND: PConstants.HAND,
    MOVE: PConstants.MOVE,
    TEXT: PConstants.TEXT,
    WAIT: PConstants.WAIT,
    NOCURSOR: PConstants.NOCURSOR,
    DISABLE_OPENGL_2X_SMOOTH: 1,
    ENABLE_OPENGL_2X_SMOOTH: -1,
    ENABLE_OPENGL_4X_SMOOTH: 2,
    ENABLE_NATIVE_FONTS: 3,
    DISABLE_DEPTH_TEST: 4,
    ENABLE_DEPTH_TEST: -4,
    ENABLE_DEPTH_SORT: 5,
    DISABLE_DEPTH_SORT: -5,
    DISABLE_OPENGL_ERROR_REPORT: 6,
    ENABLE_OPENGL_ERROR_REPORT: -6,
    ENABLE_ACCURATE_TEXTURES: 7,
    DISABLE_ACCURATE_TEXTURES: -7,
    HINT_COUNT: 10,
    SINCOS_LENGTH: 720,
    PRECISIONB: 15,
    PRECISIONF: 1 << 15,
    PREC_MAXVAL: (1 << 15) - 1,
    PREC_ALPHA_SHIFT: 24 - 15,
    PREC_RED_SHIFT: 16 - 15,
    NORMAL_MODE_AUTO: 0,
    NORMAL_MODE_SHAPE: 1,
    NORMAL_MODE_VERTEX: 2,
    MAX_LIGHTS: 8
};
Object.freeze(Object.freeze(PConstants).prototype);
