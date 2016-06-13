/// <reference path="../java/lang/Classes"/>
/// <reference path="../java/util/Classes"/>

namespace pjs.core {
  "use strict"

  import Frozen = utils.Frozen
  import ProtoAssignAll = utils.ProtoAssignAll

  @Frozen @ProtoAssignAll export abstract class PConstants {
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

    static readonly ER = 32
    static readonly EG = 33
    static readonly EB = 34

    static readonly SHINE = 31
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

    // Math Constants
    static readonly EPSILON: norm = 1e-4
    static readonly EPSILON_ZERO: norm = 1e-12

    static readonly MAX_FLOAT = 3.4028235e+38
    static readonly MIN_FLOAT = -3.4028235e+38
    static readonly MAX_INT = 2147483647
    static readonly MIN_INT = -2147483648

    static readonly PI: rad = Math.PI               // 180°
    static readonly TWO_PI: rad = Math.PI * 2       // 360°
    static readonly TAU: rad = Math.PI * 2          // 360°
    static readonly HALF_PI: rad = Math.PI / 2      // 90°
    static readonly THIRD_PI: rad = Math.PI / 3     // 60°
    static readonly QUARTER_PI: rad = Math.PI / 4   // 45°
    static readonly SIXTH_PI: rad = Math.PI / 6     // 30°
    static readonly EIGHTH_PI: rad = Math.PI / 8    // 22.5°
    static readonly TWELFTH_PI: rad = Math.PI / 12  // 15°

    static readonly DEG_TO_RAD: number = Math.PI / 180
    static readonly RAD_TO_DEG: number = 180 / Math.PI

    static readonly RADIANS = 0
    static readonly DEGREES = 1

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
    //static readonly PATH = 21 // shared with Shape PATH
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
    static readonly CORNERS = 1 // Draw mode convention to use (x1 y1) to (x2 y2)
    static readonly RADIUS = 2 // Draw mode from the center and using the radius
    static readonly CENTER = 3 // Draw from center using 2nd pair of values as the diam
    static readonly DIAMETER = 3 // Synonym for CENTER constant. Draw from the center

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
    //static readonly POINT = 2 Shared with Shape constant
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
    static readonly SINCOS_LENGTH: deg = 720 // every half degree
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

  export interface PConstants extends PConstants.prototype {}

  export namespace PConstants {
    export interface prototype {
      readonly X: number
      readonly Y: number
      readonly Z: number

      readonly R: number
      readonly G: number
      readonly B: number
      readonly A: number

      readonly U: number
      readonly V: number

      readonly NX: number
      readonly NY: number
      readonly NZ: number

      readonly EDGE: number

      // Stroke
      readonly SR: number
      readonly SG: number
      readonly SB: number
      readonly SA: number

      readonly SW: number

      // Transformations (2D and 3D)
      readonly TX: number
      readonly TY: number
      readonly TZ: number

      readonly VX: number
      readonly VY: number
      readonly VZ: number
      readonly VW: number

      // Material properties
      readonly AR: number
      readonly AG: number
      readonly AB: number

      readonly DR: number
      readonly DG: number
      readonly DB: number
      readonly DA: number

      readonly SPR: number
      readonly SPG: number
      readonly SPB: number

      readonly ER: number
      readonly EG: number
      readonly EB: number

      readonly SHINE: number
      readonly BEEN_LIT: number
      readonly VERTEX_FIELD_COUNT: number

      // Renderers
      readonly P2D: number
      readonly JAVA2D: number
      readonly WEBGL: number
      readonly P3D: number
      readonly OPENGL: number
      readonly PDF: number
      readonly DXF: number

      // Platform IDs
      readonly OTHER: number
      readonly WINDOWS: number
      readonly MAXOSX: number
      readonly LINUX: number

      // Math Constants
      readonly EPSILON: norm
      readonly EPSILON_ZERO: norm

      readonly MAX_FLOAT: number
      readonly MIN_FLOAT: number
      readonly MAX_INT: number
      readonly MIN_INT: number

      readonly PI: rad           // 180°
      readonly TWO_PI: rad       // 360°
      readonly TAU: rad          // 360°
      readonly HALF_PI: rad      // 90°
      readonly THIRD_PI: rad     // 60°
      readonly QUARTER_PI: rad   // 45°
      readonly SIXTH_PI: rad     // 30°
      readonly EIGHTH_PI: rad    // 22.5°
      readonly TWELFTH_PI: rad   // 15°

      readonly DEG_TO_RAD: number
      readonly RAD_TO_DEG: number

      readonly RADIANS: number
      readonly DEGREES: number

      readonly WHITESPACE: typeof PConstants.WHITESPACE

      // Color modes
      readonly RGB: number
      readonly ARGB: number
      readonly HSB: number
      readonly ALPHA: number
      readonly CMYK: number

      // Image file types
      readonly TIFF: number
      readonly TARGA: number
      readonly JPEG: number
      readonly GIF: number

      // Filter/convert types
      readonly BLUR: number
      readonly GRAY: number
      readonly INVERT: number
      readonly OPAQUE: number
      readonly POSTERIZE: number
      readonly THRESHOLD: number
      readonly ERODE: number
      readonly DILATE: number

      // Blend modes
      readonly REPLACE: number
      readonly BLEND: number
      readonly ADD: number
      readonly SUBTRACT: number
      readonly LIGHTEST: number
      readonly DARKEST: number
      readonly DIFFERENCE: number
      readonly EXCLUSION: number
      readonly MULTIPLY: number
      readonly SCREEN: number
      readonly OVERLAY: number
      readonly HARD_LIGHT: number
      readonly SOFT_LIGHT: number
      readonly DODGE: number
      readonly BURN: number

      // Color component bit masks
      readonly ALPHA_MASK: number
      readonly RED_MASK: number
      readonly GREEN_MASK: number
      readonly BLUE_MASK: number

      // Projection matrices
      readonly CUSTOM: number
      readonly ORTHOGRAPHIC: number
      readonly PERSPECTIVE: number

      // Shapes
      readonly POINT: number
      readonly POINTS: number
      readonly LINE: number
      readonly LINES: number
      readonly TRIANGLE: number
      readonly TRIANGLES: number
      readonly TRIANGLE_STRIP: number
      readonly TRIANGLE_FAN: number
      readonly QUAD: number
      readonly QUADS: number
      readonly QUAD_STRIP: number
      readonly POLYGON: number
      readonly PATH: number
      readonly RECT: number
      readonly ELLIPSE: number
      readonly ARC: number
      readonly SPHERE: number
      readonly BOX: number

      readonly GROUP: number
      readonly PRIMITIVE: number
      //readonly PATH: number // shared with Shape PATH
      readonly GEOMETRY: number

      // Shape Vertex
      readonly VERTEX: number
      readonly BEZIER_VERTEX: number
      readonly CURVE_VERTEX: number
      readonly BREAK: number
      readonly CLOSESHAPE: number

      // Shape closing modes
      readonly OPEN: number
      readonly CLOSE: number

      // Shape drawing modes
      readonly CORNER: number // Draw mode convention to use (x y) to (width height)
      readonly CORNERS: number // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
      readonly RADIUS: number // Draw mode from the center and using the radius
      readonly CENTER: number // Draw from the center using second pair of values as the diameter
      readonly DIAMETER: number // Synonym for the CENTER constant. Draw from the center

      // Text vertical alignment modes
      readonly BASELINE: number // Default vertical alignment for text placement
      readonly TOP: number // Align text to the top
      readonly BOTTOM: number // Align text from the bottom using the baseline

      // UV Texture coordinate modes
      readonly NORMAL: number
      readonly NORMALIZED: number
      readonly IMAGE: number

      // Text placement modes
      readonly MODEL: number
      readonly SHAPE: number

      // Stroke modes
      readonly SQUARE: typeof PConstants.SQUARE
      readonly ROUND: typeof PConstants.ROUND
      readonly PROJECT: typeof PConstants.PROJECT
      readonly MITER: typeof PConstants.MITER
      readonly BEVEL: typeof PConstants.BEVEL

      // Lighting modes
      readonly AMBIENT: number
      readonly DIRECTIONAL: number
      //readonly POINT: number Shared with Shape constant
      readonly SPOT: number

      // Key constants

      // Both key and keyCode will be equal to these values
      readonly BACKSPACE: number
      readonly TAB: number
      readonly ENTER: number
      readonly RETURN: number
      readonly ESC: number
      readonly DELETE: number
      readonly CODED: number

      // p.key will be CODED and p.keyCode will be this value
      readonly SHIFT: number
      readonly CONTROL: number
      readonly ALT: number
      readonly CAPSLK: number
      readonly PGUP: number
      readonly PGDN: number
      readonly END: number
      readonly HOME: number
      readonly LEFT: number
      readonly UP: number
      readonly RIGHT: number
      readonly DOWN: number
      readonly F1: number
      readonly F2: number
      readonly F3: number
      readonly F4: number
      readonly F5: number
      readonly F6: number
      readonly F7: number
      readonly F8: number
      readonly F9: number
      readonly F10: number
      readonly F11: number
      readonly F12: number
      readonly NUMLK: number
      readonly META: number
      readonly INSERT: number

      // Cursor types
      readonly ARROW: typeof PConstants.ARROW
      readonly CROSS: typeof PConstants.CROSS
      readonly HAND: typeof PConstants.HAND
      readonly MOVE: typeof PConstants.MOVE
      readonly TEXT: typeof PConstants.TEXT
      readonly WAIT: typeof PConstants.WAIT
      readonly NOCURSOR: typeof PConstants.NOCURSOR

      // Hints
      readonly DISABLE_OPENGL_2X_SMOOTH: number
      readonly ENABLE_OPENGL_2X_SMOOTH: number
      readonly ENABLE_OPENGL_4X_SMOOTH: number
      readonly ENABLE_NATIVE_FONTS: number
      readonly DISABLE_DEPTH_TEST: number
      readonly ENABLE_DEPTH_TEST: number
      readonly ENABLE_DEPTH_SORT: number
      readonly DISABLE_DEPTH_SORT: number
      readonly DISABLE_OPENGL_ERROR_REPORT: number
      readonly ENABLE_OPENGL_ERROR_REPORT: number
      readonly ENABLE_ACCURATE_TEXTURES: number
      readonly DISABLE_ACCURATE_TEXTURES: number
      readonly HINT_COUNT: number

      // PJS defined constants
      readonly SINCOS_LENGTH: deg // every half degree
      readonly PRECISIONB: number // fixed point precision is limited to 15 bits!!
      readonly PRECISIONF: number
      readonly PREC_MAXVAL: number
      readonly PREC_ALPHA_SHIFT: number
      readonly PREC_RED_SHIFT: number
      readonly NORMAL_MODE_AUTO: number
      readonly NORMAL_MODE_SHAPE: number
      readonly NORMAL_MODE_VERTEX: number
      readonly MAX_LIGHTS: number
    }
  }
}
