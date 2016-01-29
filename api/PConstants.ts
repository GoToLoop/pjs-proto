class PConstants {
  static readonly X = 0
  static readonly Y = 1
  static readonly Z = 2

  static readonly R = 3
  static readonly G = 4
  static readonly B = 5
  static readonly A = 6

  static readonly U = 7
  static readonly V = 8

  static readonly NX = 9
  static readonly NY = 10
  static readonly NZ = 11

  static readonly EDGE = 12

  // Stroke
  static readonly SR = 13
  static readonly SG = 14
  static readonly SB = 15
  static readonly SA = 16

  static readonly SW = 17

  // Transformations (2D and 3D)
  static readonly TX = 18
  static readonly TY = 19
  static readonly TZ = 20

  static readonly VX = 21
  static readonly VY = 22
  static readonly VZ = 23
  static readonly VW = 24

  // Material properties
  static readonly AR = 25
  static readonly AG = 26
  static readonly AB = 27

  static readonly DR = 3
  static readonly DG = 4
  static readonly DB = 5
  static readonly DA = 6

  static readonly SPR = 28
  static readonly SPG = 29
  static readonly SPB = 30

  static readonly SHINE = 31

  static readonly ER = 32
  static readonly EG = 33
  static readonly EB = 34

  static readonly BEEN_LIT = 35

  static readonly VERTEX_FIELD_COUNT = 36

  // Renderers
  static readonly P2D = 1
  static readonly JAVA2D = 1
  static readonly WEBGL = 2
  static readonly P3D = 2
  static readonly OPENGL = 2
  static readonly PDF = 0
  static readonly DXF = 0

  // Platform IDs
  static readonly OTHER = 0
  static readonly WINDOWS = 1
  static readonly MAXOSX = 2
  static readonly LINUX = 3

  static readonly EPSILON = 1e-4

  static readonly MAX_FLOAT = 3.4028235e+38
  static readonly MIN_FLOAT = -3.4028235e+38
  static readonly MAX_INT = 2147483647
  static readonly MIN_INT = -2147483648

  static readonly PI = Math.PI
  static readonly TWO_PI = 2 * Math.PI
  static readonly TAU = 2 * Math.PI
  static readonly HALF_PI = Math.PI / 2
  static readonly THIRD_PI = Math.PI / 3
  static readonly QUARTER_PI = Math.PI / 4

  static readonly DEG_TO_RAD = Math.PI / 180
  static readonly RAD_TO_DEG = 180 / Math.PI

  static readonly WHITESPACE = ' \t\n\r\f\u00A0'

  // Color modes
  static readonly RGB = 1
  static readonly ARGB = 2
  static readonly HSB = 3
  static readonly ALPHA = 4
  static readonly CMYK = 5

  // Image file types
  static readonly TIFF = 0
  static readonly TARGA = 1
  static readonly JPEG = 2
  static readonly GIF = 3

  // Filter/convert types
  static readonly BLUR = 11
  static readonly GRAY = 12
  static readonly INVERT = 13
  static readonly OPAQUE = 14
  static readonly POSTERIZE = 15
  static readonly THRESHOLD = 16
  static readonly ERODE = 17
  static readonly DILATE = 18

  // Blend modes
  static readonly REPLACE = 0
  static readonly BLEND = 1 << 0
  static readonly ADD = 1 << 1
  static readonly SUBTRACT = 1 << 2
  static readonly LIGHTEST = 1 << 3
  static readonly DARKEST = 1 << 4
  static readonly DIFFERENCE = 1 << 5
  static readonly EXCLUSION = 1 << 6
  static readonly MULTIPLY = 1 << 7
  static readonly SCREEN = 1 << 8
  static readonly OVERLAY = 1 << 9
  static readonly HARD_LIGHT = 1 << 10
  static readonly SOFT_LIGHT = 1 << 11
  static readonly DODGE = 1 << 12
  static readonly BURN = 1 << 13

  // Color component bit masks
  static readonly ALPHA_MASK = 0xff000000
  static readonly RED_MASK = 0x00ff0000
  static readonly GREEN_MASK = 0x0000ff00
  static readonly BLUE_MASK = 0x000000ff

  // Projection matrices
  static readonly CUSTOM = 0
  static readonly ORTHOGRAPHIC = 2
  static readonly PERSPECTIVE = 3

  // Shapes
  static readonly POINT = 2
  static readonly POINTS = 2
  static readonly LINE = 4
  static readonly LINES = 4
  static readonly TRIANGLE = 8
  static readonly TRIANGLES = 9
  static readonly TRIANGLE_STRIP = 10
  static readonly TRIANGLE_FAN = 11
  static readonly QUAD = 16
  static readonly QUADS = 16
  static readonly QUAD_STRIP = 17
  static readonly POLYGON = 20
  static readonly PATH = 21
  static readonly RECT = 30
  static readonly ELLIPSE = 31
  static readonly ARC = 32
  static readonly SPHERE = 40
  static readonly BOX = 41

  static readonly GROUP = 0
  static readonly PRIMITIVE = 1
  //PATH = 21 // shared with Shape PATH
  static readonly GEOMETRY = 3

  // Shape Vertex
  static readonly VERTEX = 0
  static readonly BEZIER_VERTEX = 1
  static readonly CURVE_VERTEX = 2
  static readonly BREAK = 3
  static readonly CLOSESHAPE = 4

  // Shape closing modes
  static readonly OPEN = 1
  static readonly CLOSE = 2

  // Shape drawing modes
  static readonly CORNER = 0 // Draw mode convention to use (x y) to (width height)
  static readonly CORNERS = 1 // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
  static readonly RADIUS = 2 // Draw mode from the center and using the radius
  static readonly CENTER = 3 // Draw from the center using second pair of values as the diameter
  static readonly DIAMETER = 3 // Synonym for the CENTER constant. Draw from the center

  // Text vertical alignment modes
  static readonly BASELINE = 0 // Default vertical alignment for text placement
  static readonly TOP = 101 // Align text to the top
  static readonly BOTTOM = 102 // Align text from the bottom using the baseline

  // UV Texture coordinate modes
  static readonly NORMAL = 1
  static readonly NORMALIZED = 1
  static readonly IMAGE = 2

  // Text placement modes
  static readonly MODEL = 4
  static readonly SHAPE = 5

  // Stroke modes
  static readonly SQUARE: "butt" = 'butt'
  static readonly ROUND: "round" = 'round'
  static readonly PROJECT: "square" = 'square'
  static readonly MITER: "miter" = 'miter'
  static readonly BEVEL: "bevel" = 'bevel'

  // Lighting modes
  static readonly AMBIENT = 0
  static readonly DIRECTIONAL = 1
  //POINT = 2 Shared with Shape constant
  static readonly SPOT = 3

  // Key constants

  // Both key and keyCode will be equal to these values
  static readonly BACKSPACE = 8
  static readonly TAB = 9
  static readonly ENTER = 10
  static readonly RETURN = 13
  static readonly ESC = 27
  static readonly DELETE = 127
  static readonly CODED = 0xffff

  // p.key will be CODED and p.keyCode will be this value
  static readonly SHIFT = 16
  static readonly CONTROL = 17
  static readonly ALT = 18
  static readonly CAPSLK = 20
  static readonly PGUP = 33
  static readonly PGDN = 34
  static readonly END = 35
  static readonly HOME = 36
  static readonly LEFT = 37
  static readonly UP = 38
  static readonly RIGHT = 39
  static readonly DOWN = 40
  static readonly F1 = 112
  static readonly F2 = 113
  static readonly F3 = 114
  static readonly F4 = 115
  static readonly F5 = 116
  static readonly F6 = 117
  static readonly F7 = 118
  static readonly F8 = 119
  static readonly F9 = 120
  static readonly F10 = 121
  static readonly F11 = 122
  static readonly F12 = 123
  static readonly NUMLK = 144
  static readonly META = 157
  static readonly INSERT = 155

  // Cursor types
  static readonly ARROW: "default" = 'default'
  static readonly CROSS: "crosshair" = 'crosshair'
  static readonly HAND: "pointer" = 'pointer'
  static readonly MOVE: "move" = 'move'
  static readonly TEXT: "text" = 'text'
  static readonly WAIT: "wait" = 'wait'
  static readonly NOCURSOR =
  "url('data:image/gif;base64R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') auto"

  // Hints
  static readonly DISABLE_OPENGL_2X_SMOOTH = 1
  static readonly ENABLE_OPENGL_2X_SMOOTH = -1
  static readonly ENABLE_OPENGL_4X_SMOOTH = 2
  static readonly ENABLE_NATIVE_FONTS = 3
  static readonly DISABLE_DEPTH_TEST = 4
  static readonly ENABLE_DEPTH_TEST = -4
  static readonly ENABLE_DEPTH_SORT = 5
  static readonly DISABLE_DEPTH_SORT = -5
  static readonly DISABLE_OPENGL_ERROR_REPORT = 6
  static readonly ENABLE_OPENGL_ERROR_REPORT = -6
  static readonly ENABLE_ACCURATE_TEXTURES = 7
  static readonly DISABLE_ACCURATE_TEXTURES = -7
  static readonly HINT_COUNT = 10

  // PJS defined constants
  static readonly SINCOS_LENGTH = 720 // every half degree
  static readonly PRECISIONB = 15 // fixed point precision is limited to 15 bits!!
  static readonly PRECISIONF = 1 << 15
  static readonly PREC_MAXVAL = (1 << 15) - 1
  static readonly PREC_ALPHA_SHIFT = 24 - 15
  static readonly PREC_RED_SHIFT = 16 - 15
  static readonly NORMAL_MODE_AUTO = 0
  static readonly NORMAL_MODE_SHAPE = 1
  static readonly NORMAL_MODE_VERTEX = 2
  static readonly MAX_LIGHTS = 8
}

interface PConstants extends PConstants.prototype {}

namespace PConstants {
  export interface prototype {
    X: number
    Y: number
    Z: number

    R: number
    G: number
    B: number
    A: number

    U: number
    V: number

    NX: number
    NY: number
    NZ: number

    EDGE: number

    // Stroke
    SR: number
    SG: number
    SB: number
    SA: number

    SW: number

    // Transformations (2D and 3D)
    TX: number
    TY: number
    TZ: number

    VX: number
    VY: number
    VZ: number
    VW: number

    // Material properties
    AR: number
    AG: number
    AB: number

    DR: number
    DG: number
    DB: number
    DA: number

    SPR: number
    SPG: number
    SPB: number

    SHINE: number

    ER: number
    EG: number
    EB: number

    BEEN_LIT: number

    VERTEX_FIELD_COUNT: number

    // Renderers
    P2D: number
    JAVA2D: number
    WEBGL: number
    P3D: number
    OPENGL: number
    PDF: number
    DXF: number

    // Platform IDs
    OTHER: number
    WINDOWS: number
    MAXOSX: number
    LINUX: number

    EPSILON: number

    MAX_FLOAT: number
    MIN_FLOAT: number
    MAX_INT: number
    MIN_INT: number

    PI: number
    TWO_PI: number
    TAU: number
    HALF_PI: number
    THIRD_PI: number
    QUARTER_PI: number

    DEG_TO_RAD: number
    RAD_TO_DEG: number

    WHITESPACE: typeof PConstants.WHITESPACE

    // Color modes
    RGB: number
    ARGB: number
    HSB: number
    ALPHA: number
    CMYK: number

    // Image file types
    TIFF: number
    TARGA: number
    JPEG: number
    GIF: number

    // Filter/convert types
    BLUR: number
    GRAY: number
    INVERT: number
    OPAQUE: number
    POSTERIZE: number
    THRESHOLD: number
    ERODE: number
    DILATE: number

    // Blend modes
    REPLACE: number
    BLEND: number
    ADD: number
    SUBTRACT: number
    LIGHTEST: number
    DARKEST: number
    DIFFERENCE: number
    EXCLUSION: number
    MULTIPLY: number
    SCREEN: number
    OVERLAY: number
    HARD_LIGHT: number
    SOFT_LIGHT: number
    DODGE: number
    BURN: number

    // Color component bit masks
    ALPHA_MASK: number
    RED_MASK: number
    GREEN_MASK: number
    BLUE_MASK: number

    // Projection matrices
    CUSTOM: number
    ORTHOGRAPHIC: number
    PERSPECTIVE: number

    // Shapes
    POINT: number
    POINTS: number
    LINE: number
    LINES: number
    TRIANGLE: number
    TRIANGLES: number
    TRIANGLE_STRIP: number
    TRIANGLE_FAN: number
    QUAD: number
    QUADS: number
    QUAD_STRIP: number
    POLYGON: number
    PATH: number
    RECT: number
    ELLIPSE: number
    ARC: number
    SPHERE: number
    BOX: number

    GROUP: number
    PRIMITIVE: number
    //PATH: number // shared with Shape PATH
    GEOMETRY: number

    // Shape Vertex
    VERTEX: number
    BEZIER_VERTEX: number
    CURVE_VERTEX: number
    BREAK: number
    CLOSESHAPE: number

    // Shape closing modes
    OPEN: number
    CLOSE: number

    // Shape drawing modes
    CORNER: number // Draw mode convention to use (x y) to (width height)
    CORNERS: number // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
    RADIUS: number // Draw mode from the center and using the radius
    CENTER: number // Draw from the center using second pair of values as the diameter
    DIAMETER: number // Synonym for the CENTER constant. Draw from the center

    // Text vertical alignment modes
    BASELINE: number // Default vertical alignment for text placement
    TOP: number // Align text to the top
    BOTTOM: number // Align text from the bottom using the baseline

    // UV Texture coordinate modes
    NORMAL: number
    NORMALIZED: number
    IMAGE: number

    // Text placement modes
    MODEL: number
    SHAPE: number

    // Stroke modes
    SQUARE: typeof PConstants.SQUARE
    ROUND: typeof PConstants.ROUND
    PROJECT: typeof PConstants.PROJECT
    MITER: typeof PConstants.MITER
    BEVEL: typeof PConstants.BEVEL

    // Lighting modes
    AMBIENT: number
    DIRECTIONAL: number
    //POINT: number Shared with Shape constant
    SPOT: number

    // Key constants

    // Both key and keyCode will be equal to these values
    BACKSPACE: number
    TAB: number
    ENTER: number
    RETURN: number
    ESC: number
    DELETE: number
    CODED: number

    // p.key will be CODED and p.keyCode will be this value
    SHIFT: number
    CONTROL: number
    ALT: number
    CAPSLK: number
    PGUP: number
    PGDN: number
    END: number
    HOME: number
    LEFT: number
    UP: number
    RIGHT: number
    DOWN: number
    F1: number
    F2: number
    F3: number
    F4: number
    F5: number
    F6: number
    F7: number
    F8: number
    F9: number
    F10: number
    F11: number
    F12: number
    NUMLK: number
    META: number
    INSERT: number

    // Cursor types
    ARROW: typeof PConstants.ARROW
    CROSS: typeof PConstants.CROSS
    HAND: typeof PConstants.HAND
    MOVE: typeof PConstants.MOVE
    TEXT: typeof PConstants.TEXT
    WAIT: typeof PConstants.WAIT
    NOCURSOR: typeof PConstants.NOCURSOR

    // Hints
    DISABLE_OPENGL_2X_SMOOTH: number
    ENABLE_OPENGL_2X_SMOOTH: number
    ENABLE_OPENGL_4X_SMOOTH: number
    ENABLE_NATIVE_FONTS: number
    DISABLE_DEPTH_TEST: number
    ENABLE_DEPTH_TEST: number
    ENABLE_DEPTH_SORT: number
    DISABLE_DEPTH_SORT: number
    DISABLE_OPENGL_ERROR_REPORT: number
    ENABLE_OPENGL_ERROR_REPORT: number
    ENABLE_ACCURATE_TEXTURES: number
    DISABLE_ACCURATE_TEXTURES: number
    HINT_COUNT: number

    // PJS defined constants
    SINCOS_LENGTH: number // every half degree
    PRECISIONB: number // fixed point precision is limited to 15 bits!!
    PRECISIONF: number
    PREC_MAXVAL: number
    PREC_ALPHA_SHIFT: number
    PREC_RED_SHIFT: number
    NORMAL_MODE_AUTO: number
    NORMAL_MODE_SHAPE: number
    NORMAL_MODE_VERTEX: number
    MAX_LIGHTS: number
  }
}

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

  // Stroke
  SR: 13,
  SG: 14,
  SB: 15,
  SA: 16,

  SW: 17,

  // Transformations (2D and 3D)
  TX: 18,
  TY: 19,
  TZ: 20,

  VX: 21,
  VY: 22,
  VZ: 23,
  VW: 24,

  // Material properties
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

  // Renderers
  P2D: 1,
  JAVA2D: 1,
  WEBGL: 2,
  P3D: 2,
  OPENGL: 2,
  PDF: 0,
  DXF: 0,

  // Platform IDs
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

  // Color modes
  RGB: 1,
  ARGB: 2,
  HSB: 3,
  ALPHA: 4,
  CMYK: 5,

  // Image file types
  TIFF: 0,
  TARGA: 1,
  JPEG: 2,
  GIF: 3,

  // Filter/convert types
  BLUR: 11,
  GRAY: 12,
  INVERT: 13,
  OPAQUE: 14,
  POSTERIZE: 15,
  THRESHOLD: 16,
  ERODE: 17,
  DILATE: 18,

  // Blend modes
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

  // Color component bit masks
  ALPHA_MASK: 0xff000000,
  RED_MASK: 0x00ff0000,
  GREEN_MASK: 0x0000ff00,
  BLUE_MASK: 0x000000ff,

  // Projection matrices
  CUSTOM: 0,
  ORTHOGRAPHIC: 2,
  PERSPECTIVE: 3,

  // Shapes
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
  //PATH: 21, // shared with Shape PATH
  GEOMETRY: 3,

  // Shape Vertex
  VERTEX: 0,
  BEZIER_VERTEX: 1,
  CURVE_VERTEX: 2,
  BREAK: 3,
  CLOSESHAPE: 4,

  // Shape closing modes
  OPEN: 1,
  CLOSE: 2,

  // Shape drawing modes
  CORNER: 0, // Draw mode convention to use (x y) to (width height)
  CORNERS: 1, // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
  RADIUS: 2, // Draw mode from the center and using the radius
  CENTER: 3, // Draw from the center using second pair of values as the diameter
  DIAMETER: 3, // Synonym for the CENTER constant. Draw from the center

  // Text vertical alignment modes
  BASELINE: 0, // Default vertical alignment for text placement
  TOP: 101, // Align text to the top
  BOTTOM: 102, // Align text from the bottom using the baseline

  // UV Texture coordinate modes
  NORMAL: 1,
  NORMALIZED: 1,
  IMAGE: 2,

  // Text placement modes
  MODEL: 4,
  SHAPE: 5,

  // Stroke modes
  SQUARE: PConstants.SQUARE,
  ROUND: PConstants.ROUND,
  PROJECT: PConstants.PROJECT,
  MITER: PConstants.MITER,
  BEVEL: PConstants.BEVEL,

  // Lighting modes
  AMBIENT: 0,
  DIRECTIONAL: 1,
  //POINT: 2, // Shared with Shape constant
  SPOT: 3,

  // Key constants

  // Both key and keyCode will be equal to these values
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 10,
  RETURN: 13,
  ESC: 27,
  DELETE: 127,
  CODED: 0xffff,

  // p.key will be CODED and p.keyCode will be this value
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

  // Cursor types
  ARROW: PConstants.ARROW,
  CROSS: PConstants.CROSS,
  HAND: PConstants.HAND,
  MOVE: PConstants.MOVE,
  TEXT: PConstants.TEXT,
  WAIT: PConstants.WAIT,
  NOCURSOR: PConstants.NOCURSOR,

  // Hints
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

  // PJS defined constants
  SINCOS_LENGTH: 720, // every half degree
  PRECISIONB: 15, // fixed point precision is limited to 15 bits!!
  PRECISIONF: 1 << 15,
  PREC_MAXVAL: (1 << 15) - 1,
  PREC_ALPHA_SHIFT: 24 - 15,
  PREC_RED_SHIFT: 16 - 15,
  NORMAL_MODE_AUTO: 0,
  NORMAL_MODE_SHAPE: 1,
  NORMAL_MODE_VERTEX: 2,
  MAX_LIGHTS: 8
}

Object.freeze(Object.freeze(PConstants).prototype)
