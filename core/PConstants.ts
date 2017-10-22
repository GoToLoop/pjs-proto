/// <reference path="../java/lang/Classes.ts"/>
/// <reference path="../java/util/Classes.ts"/>

namespace pjs.core {
  import Frozen = utils.Frozen
  import ProtoAssignAll = utils.ProtoAssignAll

  @Frozen @ProtoAssignAll
  export abstract class PConstants {
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
    static readonly JAVA2D = 1
    static readonly P2D = PConstants.JAVA2D
    static readonly P3D = 2
    static readonly OPENGL = PConstants.P3D
    static readonly WEBGL = PConstants.P3D
    static readonly PDF = 0
    static readonly DXF = PConstants.PDF

    // Platform IDs
    static readonly OTHER = 0
    static readonly WINDOWS = 1
    static readonly MACOSX = 2
    static readonly LINUX = 3

    // Math Constants
    static readonly EPSILON: norm = 1e-4
    static readonly EPSILON_ZERO: norm = 1e-12

    static readonly MAX_FLOAT = 3.4028235e+38
    static readonly MIN_FLOAT = -3.4028235e+38
    static readonly MAX_INT = 2147483647
    static readonly MIN_INT = -2147483648

    static readonly PI: rad = Math.PI               // 180°
    static readonly TAU: rad = Math.PI * 2          // 360°
    static readonly TWO_PI: rad = PConstants.TAU    // 360°
    static readonly HALF_PI: rad = Math.PI / 2      // 90°
    static readonly THIRD_PI: rad = Math.PI / 3     // 60°
    static readonly QUARTER_PI: rad = Math.PI / 4   // 45°
    static readonly SIXTH_PI: rad = Math.PI / 6     // 30°
    static readonly EIGHTH_PI: rad = Math.PI / 8    // 22.5°
    static readonly TWELFTH_PI: rad = Math.PI / 12  // 15°

    static readonly DEG_TO_RAD = Math.PI / 180
    static readonly RAD_TO_DEG = 180 / Math.PI

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
    static readonly BLEND = 1 << 0        as 1     // 2**0
    static readonly ADD = 1 << 1          as 2     // 2**1
    static readonly SUBTRACT = 1 << 2     as 4     // 2**2
    static readonly LIGHTEST = 1 << 3     as 8     // 2**3
    static readonly DARKEST = 1 << 4      as 16    // 2**4
    static readonly DIFFERENCE = 1 << 5   as 32    // 2**5
    static readonly EXCLUSION = 1 << 6    as 64    // 2**6
    static readonly MULTIPLY = 1 << 7     as 128   // 2**7
    static readonly SCREEN = 1 << 8       as 256   // 2**8
    static readonly OVERLAY = 1 << 9      as 512   // 2**9
    static readonly HARD_LIGHT = 1 << 10  as 1024  // 2**10
    static readonly SOFT_LIGHT = 1 << 11  as 2048  // 2**11
    static readonly DODGE = 1 << 12       as 4096  // 2**12
    static readonly BURN = 1 << 13        as 8192  // 2**13

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
    static readonly DIAMETER = PConstants.CENTER // Alias for CENTER constant.

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
    static readonly SQUARE = 'butt'
    static readonly ROUND = 'round'
    static readonly PROJECT = 'square'
    static readonly MITER = 'miter'
    static readonly BEVEL = 'bevel'

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
    static readonly ARROW = 'default'
    static readonly CROSS = 'crosshair'
    static readonly HAND = 'pointer'
    static readonly MOVE = 'move'
    static readonly TEXT = 'text'
    static readonly WAIT = 'wait'
    static readonly NOCURSOR =
    "url('data:image/gif;base64R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') auto"

    // Hints - hint values are positive for the alternate version,
    // negative of the same value returns to the normal/default state
    static readonly ENABLE_OPENGL_2X_SMOOTH = -1
    static readonly DISABLE_OPENGL_2X_SMOOTH = 1
    static readonly ENABLE_OPENGL_4X_SMOOTH = 2

    static readonly DISABLE_NATIVE_FONTS = -3
    static readonly ENABLE_NATIVE_FONTS = 3

    static readonly ENABLE_DEPTH_TEST = -4
    static readonly DISABLE_DEPTH_TEST = 4

    static readonly DISABLE_DEPTH_SORT = -5
    static readonly ENABLE_DEPTH_SORT = 5

    static readonly ENABLE_OPENGL_ERROR_REPORT = -6
    static readonly DISABLE_OPENGL_ERROR_REPORT = 6

    static readonly DISABLE_ACCURATE_TEXTURES = -7
    static readonly ENABLE_ACCURATE_TEXTURES = 7

    static readonly HINT_COUNT = 8

    // PJS defined constants
    static readonly SINCOS_LENGTH: deg = 720 // every half degree

    static readonly PRECISIONB = 15 // fixed point precision is limited to 15 bits!!
    static readonly PRECISIONF = 1 << 15 as 32768
    static readonly PREC_MAXVAL = (1 << 15) - 1 as 32767
    static readonly PREC_ALPHA_SHIFT = 24 - 15 as 9
    static readonly PREC_RED_SHIFT = 16 - 15 as 1

    static readonly NORMAL_MODE_AUTO = 0
    static readonly NORMAL_MODE_SHAPE = 1
    static readonly NORMAL_MODE_VERTEX = 2

    static readonly MAX_LIGHTS = 8
  }

  export interface PConstants extends PConstants.prototype {}

  export namespace PConstants {
    export interface prototype {
      readonly X: typeof PConstants.X
      readonly Y: typeof PConstants.Y
      readonly Z: typeof PConstants.Z

      readonly R: typeof PConstants.R
      readonly G: typeof PConstants.G
      readonly B: typeof PConstants.B
      readonly A: typeof PConstants.A

      readonly U: typeof PConstants.U
      readonly V: typeof PConstants.V

      readonly NX: typeof PConstants.NX
      readonly NY: typeof PConstants.NY
      readonly NZ: typeof PConstants.NZ

      readonly EDGE: typeof PConstants.EDGE

      // Stroke
      readonly SR: typeof PConstants.SR
      readonly SG: typeof PConstants.SG
      readonly SB: typeof PConstants.SB
      readonly SA: typeof PConstants.SA

      readonly SW: typeof PConstants.SW

      // Transformations (2D and 3D)
      readonly TX: typeof PConstants.TX
      readonly TY: typeof PConstants.TY
      readonly TZ: typeof PConstants.TZ

      readonly VX: typeof PConstants.VX
      readonly VY: typeof PConstants.VY
      readonly VZ: typeof PConstants.VZ
      readonly VW: typeof PConstants.VW

      // Material properties
      readonly AR: typeof PConstants.AR
      readonly AG: typeof PConstants.AG
      readonly AB: typeof PConstants.AB

      readonly DR: typeof PConstants.DR
      readonly DG: typeof PConstants.DG
      readonly DB: typeof PConstants.DB
      readonly DA: typeof PConstants.DA

      readonly SPR: typeof PConstants.SPR
      readonly SPG: typeof PConstants.SPG
      readonly SPB: typeof PConstants.SPB

      readonly ER: typeof PConstants.ER
      readonly EG: typeof PConstants.EG
      readonly EB: typeof PConstants.EB

      readonly SHINE: typeof PConstants.SHINE
      readonly BEEN_LIT: typeof PConstants.BEEN_LIT
      readonly VERTEX_FIELD_COUNT: typeof PConstants.VERTEX_FIELD_COUNT

      // Renderers
      readonly P2D: typeof PConstants.P2D
      readonly JAVA2D: typeof PConstants.JAVA2D
      readonly WEBGL: typeof PConstants.WEBGL
      readonly P3D: typeof PConstants.P3D
      readonly OPENGL: typeof PConstants.OPENGL
      readonly PDF: typeof PConstants.PDF
      readonly DXF: typeof PConstants.DXF

      // Platform IDs
      readonly OTHER: typeof PConstants.OTHER
      readonly WINDOWS: typeof PConstants.WINDOWS
      readonly MACOSX: typeof PConstants.MACOSX
      readonly LINUX: typeof PConstants.LINUX

      // Math Constants
      readonly EPSILON: typeof PConstants.EPSILON
      readonly EPSILON_ZERO: typeof PConstants.EPSILON_ZERO

      readonly MAX_FLOAT: typeof PConstants.MAX_FLOAT
      readonly MIN_FLOAT: typeof PConstants.MIN_FLOAT
      readonly MAX_INT: typeof PConstants.MAX_INT
      readonly MIN_INT: typeof PConstants.MIN_INT

      readonly PI: typeof PConstants.PI                 // 180°
      readonly TAU: typeof PConstants.TAU               // 360°
      readonly TWO_PI: typeof PConstants.TWO_PI         // 360°
      readonly HALF_PI: typeof PConstants.HALF_PI       // 90°
      readonly THIRD_PI: typeof PConstants.THIRD_PI     // 60°
      readonly QUARTER_PI: typeof PConstants.QUARTER_PI // 45°
      readonly SIXTH_PI: typeof PConstants.SIXTH_PI     // 30°
      readonly EIGHTH_PI: typeof PConstants.EIGHTH_PI   // 22.5°
      readonly TWELFTH_PI: typeof PConstants.TWELFTH_PI // 15°

      readonly DEG_TO_RAD: typeof PConstants.DEG_TO_RAD
      readonly RAD_TO_DEG: typeof PConstants.RAD_TO_DEG

      readonly RADIANS: typeof PConstants.RADIANS
      readonly DEGREES: typeof PConstants.DEGREES

      readonly WHITESPACE: typeof PConstants.WHITESPACE

      // Color modes
      readonly RGB: typeof PConstants.RGB
      readonly ARGB: typeof PConstants.ARGB
      readonly HSB: typeof PConstants.HSB
      readonly ALPHA: typeof PConstants.ALPHA
      readonly CMYK: typeof PConstants.CMYK

      // Image file types
      readonly TIFF: typeof PConstants.TIFF
      readonly TARGA: typeof PConstants.TARGA
      readonly JPEG: typeof PConstants.JPEG
      readonly GIF: typeof PConstants.GIF

      // Filter/convert types
      readonly BLUR: typeof PConstants.BLUR
      readonly GRAY: typeof PConstants.GRAY
      readonly INVERT: typeof PConstants.INVERT
      readonly OPAQUE: typeof PConstants.OPAQUE
      readonly POSTERIZE: typeof PConstants.POSTERIZE
      readonly THRESHOLD: typeof PConstants.THRESHOLD
      readonly ERODE: typeof PConstants.ERODE
      readonly DILATE: typeof PConstants.DILATE

      // Blend modes
      readonly REPLACE: typeof PConstants.REPLACE
      readonly BLEND: typeof PConstants.BLEND
      readonly ADD: typeof PConstants.ADD
      readonly SUBTRACT: typeof PConstants.SUBTRACT
      readonly LIGHTEST: typeof PConstants.LIGHTEST
      readonly DARKEST: typeof PConstants.DARKEST
      readonly DIFFERENCE: typeof PConstants.DIFFERENCE
      readonly EXCLUSION: typeof PConstants.EXCLUSION
      readonly MULTIPLY: typeof PConstants.MULTIPLY
      readonly SCREEN: typeof PConstants.SCREEN
      readonly OVERLAY: typeof PConstants.OVERLAY
      readonly HARD_LIGHT: typeof PConstants.HARD_LIGHT
      readonly SOFT_LIGHT: typeof PConstants.SOFT_LIGHT
      readonly DODGE: typeof PConstants.DODGE
      readonly BURN: typeof PConstants.BURN

      // Color component bit masks
      readonly ALPHA_MASK: typeof PConstants.ALPHA_MASK
      readonly RED_MASK: typeof PConstants.RED_MASK
      readonly GREEN_MASK: typeof PConstants.GREEN_MASK
      readonly BLUE_MASK: typeof PConstants.BLUE_MASK

      // Projection matrices
      readonly CUSTOM: typeof PConstants.CUSTOM
      readonly ORTHOGRAPHIC: typeof PConstants.ORTHOGRAPHIC
      readonly PERSPECTIVE: typeof PConstants.PERSPECTIVE

      // Shapes
      readonly POINT: typeof PConstants.POINT
      readonly POINTS: typeof PConstants.POINTS
      readonly LINE: typeof PConstants.LINE
      readonly LINES: typeof PConstants.LINES
      readonly TRIANGLE: typeof PConstants.TRIANGLE
      readonly TRIANGLES: typeof PConstants.TRIANGLES
      readonly TRIANGLE_STRIP: typeof PConstants.TRIANGLE_STRIP
      readonly TRIANGLE_FAN: typeof PConstants.TRIANGLE_FAN
      readonly QUAD: typeof PConstants.QUAD
      readonly QUADS: typeof PConstants.QUADS
      readonly QUAD_STRIP: typeof PConstants.QUAD_STRIP
      readonly POLYGON: typeof PConstants.POLYGON
      readonly PATH: typeof PConstants.PATH
      readonly RECT: typeof PConstants.RECT
      readonly ELLIPSE: typeof PConstants.ELLIPSE
      readonly ARC: typeof PConstants.ARC
      readonly SPHERE: typeof PConstants.SPHERE
      readonly BOX: typeof PConstants.BOX

      readonly GROUP: typeof PConstants.GROUP
      readonly PRIMITIVE: typeof PConstants.PRIMITIVE
      //readonly PATH: typeof PConstants.PATH // shared with Shape PATH
      readonly GEOMETRY: typeof PConstants.GEOMETRY

      // Shape Vertex
      readonly VERTEX: typeof PConstants.VERTEX
      readonly BEZIER_VERTEX: typeof PConstants.BEZIER_VERTEX
      readonly CURVE_VERTEX: typeof PConstants.CURVE_VERTEX
      readonly BREAK: typeof PConstants.BREAK
      readonly CLOSESHAPE: typeof PConstants.CLOSESHAPE

      // Shape closing modes
      readonly OPEN: typeof PConstants.OPEN
      readonly CLOSE: typeof PConstants.CLOSE

      // Shape drawing modes
      readonly CORNER: typeof PConstants.CORNER // (x y) to (width height)
      readonly CORNERS: typeof PConstants.CORNERS // (x1 y1) to (x2 y2) coordinates
      readonly RADIUS: typeof PConstants.RADIUS // Draw mode from the center and using radius
      readonly CENTER: typeof PConstants.CENTER // Draw from the center using diameter
      readonly DIAMETER: typeof PConstants.DIAMETER // Alias for the CENTER constant.

      // Text vertical alignment modes
      readonly BASELINE: typeof PConstants.BASELINE // Default vert. align. for text placement
      readonly TOP: typeof PConstants.TOP // Align text to the top
      readonly BOTTOM: typeof PConstants.BOTTOM // Align text from the bottom using baseline

      // UV Texture coordinate modes
      readonly NORMAL: typeof PConstants.NORMAL
      readonly NORMALIZED: typeof PConstants.NORMALIZED
      readonly IMAGE: typeof PConstants.IMAGE

      // Text placement modes
      readonly MODEL: typeof PConstants.MODEL
      readonly SHAPE: typeof PConstants.SHAPE

      // Stroke modes
      readonly SQUARE: typeof PConstants.SQUARE
      readonly ROUND: typeof PConstants.ROUND
      readonly PROJECT: typeof PConstants.PROJECT
      readonly MITER: typeof PConstants.MITER
      readonly BEVEL: typeof PConstants.BEVEL

      // Lighting modes
      readonly AMBIENT: typeof PConstants.AMBIENT
      readonly DIRECTIONAL: typeof PConstants.DIRECTIONAL
      //readonly POINT: typeof PConstants.POINT // Shared with Shape PATH
      readonly SPOT: typeof PConstants.SPOT

      // Key constants

      // Both key and keyCode will be equal to these values
      readonly BACKSPACE: typeof PConstants.BACKSPACE
      readonly TAB: typeof PConstants.TAB
      readonly ENTER: typeof PConstants.ENTER
      readonly RETURN: typeof PConstants.RETURN
      readonly ESC: typeof PConstants.ESC
      readonly DELETE: typeof PConstants.DELETE
      readonly CODED: typeof PConstants.CODED

      // p.key will be CODED and p.keyCode will be this value
      readonly SHIFT: typeof PConstants.SHIFT
      readonly CONTROL: typeof PConstants.CONTROL
      readonly ALT: typeof PConstants.ALT
      readonly CAPSLK: typeof PConstants.CAPSLK
      readonly PGUP: typeof PConstants.PGUP
      readonly PGDN: typeof PConstants.PGDN
      readonly END: typeof PConstants.END
      readonly HOME: typeof PConstants.HOME
      readonly LEFT: typeof PConstants.LEFT
      readonly UP: typeof PConstants.UP
      readonly RIGHT: typeof PConstants.RIGHT
      readonly DOWN: typeof PConstants.DOWN
      readonly F1: typeof PConstants.F1
      readonly F2: typeof PConstants.F2
      readonly F3: typeof PConstants.F3
      readonly F4: typeof PConstants.F4
      readonly F5: typeof PConstants.F5
      readonly F6: typeof PConstants.F6
      readonly F7: typeof PConstants.F7
      readonly F8: typeof PConstants.F8
      readonly F9: typeof PConstants.F9
      readonly F10: typeof PConstants.F10
      readonly F11: typeof PConstants.F11
      readonly F12: typeof PConstants.F12
      readonly NUMLK: typeof PConstants.NUMLK
      readonly META: typeof PConstants.META
      readonly INSERT: typeof PConstants.INSERT

      // Cursor types
      readonly ARROW: typeof PConstants.ARROW
      readonly CROSS: typeof PConstants.CROSS
      readonly HAND: typeof PConstants.HAND
      readonly MOVE: typeof PConstants.MOVE
      readonly TEXT: typeof PConstants.TEXT
      readonly WAIT: typeof PConstants.WAIT
      readonly NOCURSOR: typeof PConstants.NOCURSOR

      // Hints - hint values are positive for the alternate version,
      // negative of the same value returns to the normal/default state
      readonly ENABLE_OPENGL_2X_SMOOTH: typeof PConstants.ENABLE_OPENGL_2X_SMOOTH
      readonly DISABLE_OPENGL_2X_SMOOTH: typeof PConstants.DISABLE_OPENGL_2X_SMOOTH
      readonly ENABLE_OPENGL_4X_SMOOTH: typeof PConstants.ENABLE_OPENGL_4X_SMOOTH

      readonly DISABLE_NATIVE_FONTS: typeof PConstants.DISABLE_NATIVE_FONTS
      readonly ENABLE_NATIVE_FONTS: typeof PConstants.ENABLE_NATIVE_FONTS

      readonly ENABLE_DEPTH_TEST: typeof PConstants.ENABLE_DEPTH_TEST
      readonly DISABLE_DEPTH_TEST: typeof PConstants.DISABLE_DEPTH_TEST

      readonly DISABLE_DEPTH_SORT: typeof PConstants.DISABLE_DEPTH_SORT
      readonly ENABLE_DEPTH_SORT: typeof PConstants.ENABLE_DEPTH_SORT

      readonly ENABLE_OPENGL_ERROR_REPORT: typeof PConstants.ENABLE_OPENGL_ERROR_REPORT
      readonly DISABLE_OPENGL_ERROR_REPORT: typeof PConstants.DISABLE_OPENGL_ERROR_REPORT

      readonly DISABLE_ACCURATE_TEXTURES: typeof PConstants.DISABLE_ACCURATE_TEXTURES
      readonly ENABLE_ACCURATE_TEXTURES: typeof PConstants.ENABLE_ACCURATE_TEXTURES

      readonly HINT_COUNT: typeof PConstants.HINT_COUNT

      // PJS defined constants
      readonly SINCOS_LENGTH: typeof PConstants.SINCOS_LENGTH // 720°

      readonly PRECISIONB: typeof PConstants.PRECISIONB // 15 bits
      readonly PRECISIONF: typeof PConstants.PRECISIONF // 1 << 15
      readonly PREC_MAXVAL: typeof PConstants.PREC_MAXVAL // (1 << 15) - 1
      readonly PREC_ALPHA_SHIFT: typeof PConstants.PREC_ALPHA_SHIFT // 24 - 15
      readonly PREC_RED_SHIFT: typeof PConstants.PREC_RED_SHIFT // 16 - 15

      readonly NORMAL_MODE_AUTO: typeof PConstants.NORMAL_MODE_AUTO
      readonly NORMAL_MODE_SHAPE: typeof PConstants.NORMAL_MODE_SHAPE
      readonly NORMAL_MODE_VERTEX: typeof PConstants.NORMAL_MODE_VERTEX

      readonly MAX_LIGHTS: typeof PConstants.MAX_LIGHTS
    }
  }
}
