/// <reference path="../java/lang/Classes"/>
/// <reference path="../java/util/Classes"/>

namespace pjs.core {
  "use strict"

  import Frozen = utils.Frozen
  import ProtoAssign = utils.ProtoAssign

  @Frozen export abstract class PConstants {
    @ProtoAssign static readonly X = 0
    @ProtoAssign static readonly Y = 1
    @ProtoAssign static readonly Z = 2

    @ProtoAssign static readonly R = 3
    @ProtoAssign static readonly G = 4
    @ProtoAssign static readonly B = 5
    @ProtoAssign static readonly A = 6

    @ProtoAssign static readonly U = 7
    @ProtoAssign static readonly V = 8

    @ProtoAssign static readonly NX = 9
    @ProtoAssign static readonly NY = 10
    @ProtoAssign static readonly NZ = 11

    @ProtoAssign static readonly EDGE = 12

    // Stroke
    @ProtoAssign static readonly SR = 13
    @ProtoAssign static readonly SG = 14
    @ProtoAssign static readonly SB = 15
    @ProtoAssign static readonly SA = 16

    @ProtoAssign static readonly SW = 17

    // Transformations (2D and 3D)
    @ProtoAssign static readonly TX = 18
    @ProtoAssign static readonly TY = 19
    @ProtoAssign static readonly TZ = 20

    @ProtoAssign static readonly VX = 21
    @ProtoAssign static readonly VY = 22
    @ProtoAssign static readonly VZ = 23
    @ProtoAssign static readonly VW = 24

    // Material properties
    @ProtoAssign static readonly AR = 25
    @ProtoAssign static readonly AG = 26
    @ProtoAssign static readonly AB = 27

    @ProtoAssign static readonly DR = 3
    @ProtoAssign static readonly DG = 4
    @ProtoAssign static readonly DB = 5
    @ProtoAssign static readonly DA = 6

    @ProtoAssign static readonly SPR = 28
    @ProtoAssign static readonly SPG = 29
    @ProtoAssign static readonly SPB = 30

    @ProtoAssign static readonly SHINE = 31

    @ProtoAssign static readonly ER = 32
    @ProtoAssign static readonly EG = 33
    @ProtoAssign static readonly EB = 34

    @ProtoAssign static readonly BEEN_LIT = 35

    @ProtoAssign static readonly VERTEX_FIELD_COUNT = 36

    // Renderers
    @ProtoAssign static readonly P2D = 1
    @ProtoAssign static readonly JAVA2D = 1
    @ProtoAssign static readonly WEBGL = 2
    @ProtoAssign static readonly P3D = 2
    @ProtoAssign static readonly OPENGL = 2
    @ProtoAssign static readonly PDF = 0
    @ProtoAssign static readonly DXF = 0

    // Platform IDs
    @ProtoAssign static readonly OTHER = 0
    @ProtoAssign static readonly WINDOWS = 1
    @ProtoAssign static readonly MAXOSX = 2
    @ProtoAssign static readonly LINUX = 3

    // Math Constants
    @ProtoAssign static readonly EPSILON = 1e-4
    @ProtoAssign static readonly EPSILON_ZERO = 1e-12

    @ProtoAssign static readonly MAX_FLOAT = 3.4028235e+38
    @ProtoAssign static readonly MIN_FLOAT = -3.4028235e+38
    @ProtoAssign static readonly MAX_INT = 2147483647
    @ProtoAssign static readonly MIN_INT = -2147483648

    @ProtoAssign static readonly PI = Math.PI               // 180°
    @ProtoAssign static readonly TWO_PI = Math.PI * 2       // 360°
    @ProtoAssign static readonly TAU = Math.PI * 2          // 360°
    @ProtoAssign static readonly HALF_PI = Math.PI / 2      // 90°
    @ProtoAssign static readonly THIRD_PI = Math.PI / 3     // 60°
    @ProtoAssign static readonly QUARTER_PI = Math.PI / 4   // 45°
    @ProtoAssign static readonly SIXTH_PI = Math.PI / 6     // 30°
    @ProtoAssign static readonly EIGHTH_PI = Math.PI / 8    // 22.5°
    @ProtoAssign static readonly TWELFTH_PI = Math.PI / 12  // 15°

    @ProtoAssign static readonly DEG_TO_RAD = Math.PI / 180
    @ProtoAssign static readonly RAD_TO_DEG = 180 / Math.PI

    @ProtoAssign static readonly RADIANS = 0
    @ProtoAssign static readonly DEGREES = 1

    @ProtoAssign static readonly WHITESPACE = ' \t\n\r\f\u00A0'

    // Color modes
    @ProtoAssign static readonly RGB = 1
    @ProtoAssign static readonly ARGB = 2
    @ProtoAssign static readonly HSB = 3
    @ProtoAssign static readonly ALPHA = 4
    @ProtoAssign static readonly CMYK = 5

    // Image file types
    @ProtoAssign static readonly TIFF = 0
    @ProtoAssign static readonly TARGA = 1
    @ProtoAssign static readonly JPEG = 2
    @ProtoAssign static readonly GIF = 3

    // Filter/convert types
    @ProtoAssign static readonly BLUR = 11
    @ProtoAssign static readonly GRAY = 12
    @ProtoAssign static readonly INVERT = 13
    @ProtoAssign static readonly OPAQUE = 14
    @ProtoAssign static readonly POSTERIZE = 15
    @ProtoAssign static readonly THRESHOLD = 16
    @ProtoAssign static readonly ERODE = 17
    @ProtoAssign static readonly DILATE = 18

    // Blend modes
    @ProtoAssign static readonly REPLACE = 0
    @ProtoAssign static readonly BLEND = 1 << 0
    @ProtoAssign static readonly ADD = 1 << 1
    @ProtoAssign static readonly SUBTRACT = 1 << 2
    @ProtoAssign static readonly LIGHTEST = 1 << 3
    @ProtoAssign static readonly DARKEST = 1 << 4
    @ProtoAssign static readonly DIFFERENCE = 1 << 5
    @ProtoAssign static readonly EXCLUSION = 1 << 6
    @ProtoAssign static readonly MULTIPLY = 1 << 7
    @ProtoAssign static readonly SCREEN = 1 << 8
    @ProtoAssign static readonly OVERLAY = 1 << 9
    @ProtoAssign static readonly HARD_LIGHT = 1 << 10
    @ProtoAssign static readonly SOFT_LIGHT = 1 << 11
    @ProtoAssign static readonly DODGE = 1 << 12
    @ProtoAssign static readonly BURN = 1 << 13

    // Color component bit masks
    @ProtoAssign static readonly ALPHA_MASK = 0xff000000
    @ProtoAssign static readonly RED_MASK = 0x00ff0000
    @ProtoAssign static readonly GREEN_MASK = 0x0000ff00
    @ProtoAssign static readonly BLUE_MASK = 0x000000ff

    // Projection matrices
    @ProtoAssign static readonly CUSTOM = 0
    @ProtoAssign static readonly ORTHOGRAPHIC = 2
    @ProtoAssign static readonly PERSPECTIVE = 3

    // Shapes
    @ProtoAssign static readonly POINT = 2
    @ProtoAssign static readonly POINTS = 2
    @ProtoAssign static readonly LINE = 4
    @ProtoAssign static readonly LINES = 4
    @ProtoAssign static readonly TRIANGLE = 8
    @ProtoAssign static readonly TRIANGLES = 9
    @ProtoAssign static readonly TRIANGLE_STRIP = 10
    @ProtoAssign static readonly TRIANGLE_FAN = 11
    @ProtoAssign static readonly QUAD = 16
    @ProtoAssign static readonly QUADS = 16
    @ProtoAssign static readonly QUAD_STRIP = 17
    @ProtoAssign static readonly POLYGON = 20
    @ProtoAssign static readonly PATH = 21
    @ProtoAssign static readonly RECT = 30
    @ProtoAssign static readonly ELLIPSE = 31
    @ProtoAssign static readonly ARC = 32
    @ProtoAssign static readonly SPHERE = 40
    @ProtoAssign static readonly BOX = 41

    @ProtoAssign static readonly GROUP = 0
    @ProtoAssign static readonly PRIMITIVE = 1
    //@ProtoAssign static readonly PATH = 21 // shared with Shape PATH
    @ProtoAssign static readonly GEOMETRY = 3

    // Shape Vertex
    @ProtoAssign static readonly VERTEX = 0
    @ProtoAssign static readonly BEZIER_VERTEX = 1
    @ProtoAssign static readonly CURVE_VERTEX = 2
    @ProtoAssign static readonly BREAK = 3
    @ProtoAssign static readonly CLOSESHAPE = 4

    // Shape closing modes
    @ProtoAssign static readonly OPEN = 1
    @ProtoAssign static readonly CLOSE = 2

    // Shape drawing modes
    @ProtoAssign static readonly CORNER = 0 // Draw mode convention to use (x y) to (width height)
    @ProtoAssign static readonly CORNERS = 1 // Draw mode convention to use (x1 y1) to (x2 y2)
    @ProtoAssign static readonly RADIUS = 2 // Draw mode from the center and using the radius
    @ProtoAssign static readonly CENTER = 3 // Draw from center using 2nd pair of values as the diam
    @ProtoAssign static readonly DIAMETER = 3 // Synonym for CENTER constant. Draw from the center

    // Text vertical alignment modes
    @ProtoAssign static readonly BASELINE = 0 // Default vertical alignment for text placement
    @ProtoAssign static readonly TOP = 101 // Align text to the top
    @ProtoAssign static readonly BOTTOM = 102 // Align text from the bottom using the baseline

    // UV Texture coordinate modes
    @ProtoAssign static readonly NORMAL = 1
    @ProtoAssign static readonly NORMALIZED = 1
    @ProtoAssign static readonly IMAGE = 2

    // Text placement modes
    @ProtoAssign static readonly MODEL = 4
    @ProtoAssign static readonly SHAPE = 5

    // Stroke modes
    @ProtoAssign static readonly SQUARE: "butt" = 'butt'
    @ProtoAssign static readonly ROUND: "round" = 'round'
    @ProtoAssign static readonly PROJECT: "square" = 'square'
    @ProtoAssign static readonly MITER: "miter" = 'miter'
    @ProtoAssign static readonly BEVEL: "bevel" = 'bevel'

    // Lighting modes
    @ProtoAssign static readonly AMBIENT = 0
    @ProtoAssign static readonly DIRECTIONAL = 1
    //@ProtoAssign static readonly POINT = 2 Shared with Shape constant
    @ProtoAssign static readonly SPOT = 3

    // Key constants

    // Both key and keyCode will be equal to these values
    @ProtoAssign static readonly BACKSPACE = 8
    @ProtoAssign static readonly TAB = 9
    @ProtoAssign static readonly ENTER = 10
    @ProtoAssign static readonly RETURN = 13
    @ProtoAssign static readonly ESC = 27
    @ProtoAssign static readonly DELETE = 127
    @ProtoAssign static readonly CODED = 0xffff

    // p.key will be CODED and p.keyCode will be this value
    @ProtoAssign static readonly SHIFT = 16
    @ProtoAssign static readonly CONTROL = 17
    @ProtoAssign static readonly ALT = 18
    @ProtoAssign static readonly CAPSLK = 20
    @ProtoAssign static readonly PGUP = 33
    @ProtoAssign static readonly PGDN = 34
    @ProtoAssign static readonly END = 35
    @ProtoAssign static readonly HOME = 36
    @ProtoAssign static readonly LEFT = 37
    @ProtoAssign static readonly UP = 38
    @ProtoAssign static readonly RIGHT = 39
    @ProtoAssign static readonly DOWN = 40
    @ProtoAssign static readonly F1 = 112
    @ProtoAssign static readonly F2 = 113
    @ProtoAssign static readonly F3 = 114
    @ProtoAssign static readonly F4 = 115
    @ProtoAssign static readonly F5 = 116
    @ProtoAssign static readonly F6 = 117
    @ProtoAssign static readonly F7 = 118
    @ProtoAssign static readonly F8 = 119
    @ProtoAssign static readonly F9 = 120
    @ProtoAssign static readonly F10 = 121
    @ProtoAssign static readonly F11 = 122
    @ProtoAssign static readonly F12 = 123
    @ProtoAssign static readonly NUMLK = 144
    @ProtoAssign static readonly META = 157
    @ProtoAssign static readonly INSERT = 155

    // Cursor types
    @ProtoAssign static readonly ARROW: "default" = 'default'
    @ProtoAssign static readonly CROSS: "crosshair" = 'crosshair'
    @ProtoAssign static readonly HAND: "pointer" = 'pointer'
    @ProtoAssign static readonly MOVE: "move" = 'move'
    @ProtoAssign static readonly TEXT: "text" = 'text'
    @ProtoAssign static readonly WAIT: "wait" = 'wait'
    @ProtoAssign static readonly NOCURSOR =
    "url('data:image/gif;base64R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') auto"

    // Hints
    @ProtoAssign static readonly DISABLE_OPENGL_2X_SMOOTH = 1
    @ProtoAssign static readonly ENABLE_OPENGL_2X_SMOOTH = -1
    @ProtoAssign static readonly ENABLE_OPENGL_4X_SMOOTH = 2
    @ProtoAssign static readonly ENABLE_NATIVE_FONTS = 3
    @ProtoAssign static readonly DISABLE_DEPTH_TEST = 4
    @ProtoAssign static readonly ENABLE_DEPTH_TEST = -4
    @ProtoAssign static readonly ENABLE_DEPTH_SORT = 5
    @ProtoAssign static readonly DISABLE_DEPTH_SORT = -5
    @ProtoAssign static readonly DISABLE_OPENGL_ERROR_REPORT = 6
    @ProtoAssign static readonly ENABLE_OPENGL_ERROR_REPORT = -6
    @ProtoAssign static readonly ENABLE_ACCURATE_TEXTURES = 7
    @ProtoAssign static readonly DISABLE_ACCURATE_TEXTURES = -7
    @ProtoAssign static readonly HINT_COUNT = 10

    // PJS defined constants
    @ProtoAssign static readonly SINCOS_LENGTH = 720 // every half degree
    @ProtoAssign static readonly PRECISIONB = 15 // fixed point precision is limited to 15 bits!!
    @ProtoAssign static readonly PRECISIONF = 1 << 15
    @ProtoAssign static readonly PREC_MAXVAL = (1 << 15) - 1
    @ProtoAssign static readonly PREC_ALPHA_SHIFT = 24 - 15
    @ProtoAssign static readonly PREC_RED_SHIFT = 16 - 15
    @ProtoAssign static readonly NORMAL_MODE_AUTO = 0
    @ProtoAssign static readonly NORMAL_MODE_SHAPE = 1
    @ProtoAssign static readonly NORMAL_MODE_VERTEX = 2
    @ProtoAssign static readonly MAX_LIGHTS = 8
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

      readonly SHINE: number

      readonly ER: number
      readonly EG: number
      readonly EB: number

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
      readonly EPSILON: number
      readonly EPSILON_ZERO: number

      readonly MAX_FLOAT: number
      readonly MIN_FLOAT: number
      readonly MAX_INT: number
      readonly MIN_INT: number

      readonly PI: number           // 180°
      readonly TWO_PI: number       // 360°
      readonly TAU: number          // 360°
      readonly HALF_PI: number      // 90°
      readonly THIRD_PI: number     // 60°
      readonly QUARTER_PI: number   // 45°
      readonly SIXTH_PI: number     // 30°
      readonly EIGHTH_PI: number    // 22.5°
      readonly TWELFTH_PI: number   // 15°

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
      readonly SINCOS_LENGTH: number // every half degree
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
