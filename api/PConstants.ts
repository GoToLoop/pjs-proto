class PConstants {
  static X = 0
  static Y = 1
  static Z = 2

  static R = 3
  static G = 4
  static B = 5
  static A = 6

  static U = 7
  static V = 8

  static NX = 9
  static NY = 10
  static NZ = 11

  static EDGE = 12

  // Stroke
  static SR = 13
  static SG = 14
  static SB = 15
  static SA = 16

  static SW = 17

  // Transformations (2D and 3D)
  static TX = 18
  static TY = 19
  static TZ = 20

  static VX = 21
  static VY = 22
  static VZ = 23
  static VW = 24

  // Material properties
  static AR = 25
  static AG = 26
  static AB = 27

  static DR = 3
  static DG = 4
  static DB = 5
  static DA = 6

  static SPR = 28
  static SPG = 29
  static SPB = 30

  static SHINE = 31

  static ER = 32
  static EG = 33
  static EB = 34

  static BEEN_LIT = 35

  static VERTEX_FIELD_COUNT = 36

  // Renderers
  static P2D = 1
  static JAVA2D = 1
  static WEBGL = 2
  static P3D = 2
  static OPENGL = 2
  static PDF = 0
  static DXF = 0

  // Platform IDs
  static OTHER = 0
  static WINDOWS = 1
  static MAXOSX = 2
  static LINUX = 3

  static EPSILON = 1e-4

  static MAX_FLOAT = 3.4028235e+38
  static MIN_FLOAT = -3.4028235e+38
  static MAX_INT = 2147483647
  static MIN_INT = -2147483648

  static PI = Math.PI
  static TWO_PI = 2 * Math.PI
  static TAU = 2 * Math.PI
  static HALF_PI = Math.PI / 2
  static THIRD_PI = Math.PI / 3
  static QUARTER_PI = Math.PI / 4

  static DEG_TO_RAD = Math.PI / 180
  static RAD_TO_DEG = 180 / Math.PI

  static WHITESPACE = ' \t\n\r\f\u00A0'

  // Color modes
  static RGB = 1
  static ARGB = 2
  static HSB = 3
  static ALPHA = 4
  static CMYK = 5

  // Image file types
  static TIFF = 0
  static TARGA = 1
  static JPEG = 2
  static GIF = 3

  // Filter/convert types
  static BLUR = 11
  static GRAY = 12
  static INVERT = 13
  static OPAQUE = 14
  static POSTERIZE = 15
  static THRESHOLD = 16
  static ERODE = 17
  static DILATE = 18

  // Blend modes
  static REPLACE = 0
  static BLEND = 1 << 0
  static ADD = 1 << 1
  static SUBTRACT = 1 << 2
  static LIGHTEST = 1 << 3
  static DARKEST = 1 << 4
  static DIFFERENCE = 1 << 5
  static EXCLUSION = 1 << 6
  static MULTIPLY = 1 << 7
  static SCREEN = 1 << 8
  static OVERLAY = 1 << 9
  static HARD_LIGHT = 1 << 10
  static SOFT_LIGHT = 1 << 11
  static DODGE = 1 << 12
  static BURN = 1 << 13

  // Color component bit masks
  static ALPHA_MASK = 0xff000000
  static RED_MASK = 0x00ff0000
  static GREEN_MASK = 0x0000ff00
  static BLUE_MASK = 0x000000ff

  // Projection matrices
  static CUSTOM = 0
  static ORTHOGRAPHIC = 2
  static PERSPECTIVE = 3

  // Shapes
  static POINT = 2
  static POINTS = 2
  static LINE = 4
  static LINES = 4
  static TRIANGLE = 8
  static TRIANGLES = 9
  static TRIANGLE_STRIP = 10
  static TRIANGLE_FAN = 11
  static QUAD = 16
  static QUADS = 16
  static QUAD_STRIP = 17
  static POLYGON = 20
  static PATH = 21
  static RECT = 30
  static ELLIPSE = 31
  static ARC = 32
  static SPHERE = 40
  static BOX = 41

  static GROUP = 0
  static PRIMITIVE = 1
  //PATH = 21 // shared with Shape PATH
  static GEOMETRY = 3

  // Shape Vertex
  static VERTEX = 0
  static BEZIER_VERTEX = 1
  static CURVE_VERTEX = 2
  static BREAK = 3
  static CLOSESHAPE = 4

  // Shape closing modes
  static OPEN = 1
  static CLOSE = 2

  // Shape drawing modes
  static CORNER = 0 // Draw mode convention to use (x y) to (width height)
  static CORNERS = 1 // Draw mode convention to use (x1 y1) to (x2 y2) coordinates
  static RADIUS = 2 // Draw mode from the center and using the radius
  static CENTER = 3 // Draw from the center using second pair of values as the diameter
  static DIAMETER = 3 // Synonym for the CENTER constant. Draw from the center

  // Text vertical alignment modes
  static BASELINE = 0 // Default vertical alignment for text placement
  static TOP = 101 // Align text to the top
  static BOTTOM = 102 // Align text from the bottom using the baseline

  // UV Texture coordinate modes
  static NORMAL = 1
  static NORMALIZED = 1
  static IMAGE = 2

  // Text placement modes
  static MODEL = 4
  static SHAPE = 5

  // Stroke modes
  static SQUARE = 'butt'
  static ROUND = 'round'
  static PROJECT = 'square'
  static MITER = 'miter'
  static BEVEL = 'bevel'

  // Lighting modes
  static AMBIENT = 0
  static DIRECTIONAL = 1
  //POINT = 2 Shared with Shape constant
  static SPOT = 3

  // Key constants

  // Both key and keyCode will be equal to these values
  static BACKSPACE = 8
  static TAB = 9
  static ENTER = 10
  static RETURN = 13
  static ESC = 27
  static DELETE = 127
  static CODED = 0xffff

  // p.key will be CODED and p.keyCode will be this value
  static SHIFT = 16
  static CONTROL = 17
  static ALT = 18
  static CAPSLK = 20
  static PGUP = 33
  static PGDN = 34
  static END = 35
  static HOME = 36
  static LEFT = 37
  static UP = 38
  static RIGHT = 39
  static DOWN = 40
  static F1 = 112
  static F2 = 113
  static F3 = 114
  static F4 = 115
  static F5 = 116
  static F6 = 117
  static F7 = 118
  static F8 = 119
  static F9 = 120
  static F10 = 121
  static F11 = 122
  static F12 = 123
  static NUMLK = 144
  static META = 157
  static INSERT = 155

  // Cursor types
  static ARROW = 'default'
  static CROSS = 'crosshair'
  static HAND = 'pointer'
  static MOVE = 'move'
  static TEXT = 'text'
  static WAIT = 'wait'
  static NOCURSOR = "url('data:image/gif;base64R0lGODlhAQABAIAAAP///" +
                    "wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==') auto"

  // Hints
  static DISABLE_OPENGL_2X_SMOOTH = 1
  static ENABLE_OPENGL_2X_SMOOTH = -1
  static ENABLE_OPENGL_4X_SMOOTH = 2
  static ENABLE_NATIVE_FONTS = 3
  static DISABLE_DEPTH_TEST = 4
  static ENABLE_DEPTH_TEST = -4
  static ENABLE_DEPTH_SORT = 5
  static DISABLE_DEPTH_SORT = -5
  static DISABLE_OPENGL_ERROR_REPORT = 6
  static ENABLE_OPENGL_ERROR_REPORT = -6
  static ENABLE_ACCURATE_TEXTURES = 7
  static DISABLE_ACCURATE_TEXTURES = -7
  static HINT_COUNT = 10

  // PJS defined constants
  static SINCOS_LENGTH = 720 // every half degree
  static PRECISIONB = 15 // fixed point precision is limited to 15 bits!!
  static PRECISIONF = 1 << 15
  static PREC_MAXVAL = (1 << 15) - 1
  static PREC_ALPHA_SHIFT = 24 - 15
  static PREC_RED_SHIFT = 16 - 15
  static NORMAL_MODE_AUTO = 0
  static NORMAL_MODE_SHAPE = 1
  static NORMAL_MODE_VERTEX = 2
  static MAX_LIGHTS = 8
}
