declare namespace pjs.utils {
    function Frozen(clazz: Function | Object, prop?: string | symbol): void;
    function ProtoAssign(clazz: Function, prop: string | symbol): void;
    function ProtoAdditions(props: Object): <TFn extends Function>(clazz: TFn) => void;
    function InjectInto(target: Function): <TFn extends Function>(clazz: TFn) => void;
}
declare namespace java.lang {
    function Deprecated(clazz: Object, prop?: string | symbol): void;
    function FunctionalInterface(clazz: Function): void;
    function Override(clazz: Object, prop?: string | symbol): void;
    function SafeVarargs(clazz: Object, prop?: string | symbol): void;
    function SuppressWarnings(clazz: Object, prop?: string | symbol): <TFn extends Function>(clazz: TFn) => void;
}
import Deprecated = java.lang.Deprecated;
import FunctionalInterface = java.lang.FunctionalInterface;
import Override = java.lang.Override;
import SafeVarargs = java.lang.SafeVarargs;
import SuppressWarnings = java.lang.SuppressWarnings;
declare namespace java {
}
declare namespace java.util {
    abstract class AbstractCollection<E> implements Collection<E> {
        abstract iterator(): util.Iterator<E>;
    }
}
import AbstractCollection = java.util.AbstractCollection;
declare namespace pjs.core {
    abstract class PConstants {
        static readonly X: number;
        static readonly Y: number;
        static readonly Z: number;
        static readonly R: number;
        static readonly G: number;
        static readonly B: number;
        static readonly A: number;
        static readonly U: number;
        static readonly V: number;
        static readonly NX: number;
        static readonly NY: number;
        static readonly NZ: number;
        static readonly EDGE: number;
        static readonly SR: number;
        static readonly SG: number;
        static readonly SB: number;
        static readonly SA: number;
        static readonly SW: number;
        static readonly TX: number;
        static readonly TY: number;
        static readonly TZ: number;
        static readonly VX: number;
        static readonly VY: number;
        static readonly VZ: number;
        static readonly VW: number;
        static readonly AR: number;
        static readonly AG: number;
        static readonly AB: number;
        static readonly DR: number;
        static readonly DG: number;
        static readonly DB: number;
        static readonly DA: number;
        static readonly SPR: number;
        static readonly SPG: number;
        static readonly SPB: number;
        static readonly SHINE: number;
        static readonly ER: number;
        static readonly EG: number;
        static readonly EB: number;
        static readonly BEEN_LIT: number;
        static readonly VERTEX_FIELD_COUNT: number;
        static readonly P2D: number;
        static readonly JAVA2D: number;
        static readonly WEBGL: number;
        static readonly P3D: number;
        static readonly OPENGL: number;
        static readonly PDF: number;
        static readonly DXF: number;
        static readonly OTHER: number;
        static readonly WINDOWS: number;
        static readonly MAXOSX: number;
        static readonly LINUX: number;
        static readonly EPSILON: number;
        static readonly EPSILON_ZERO: number;
        static readonly MAX_FLOAT: number;
        static readonly MIN_FLOAT: number;
        static readonly MAX_INT: number;
        static readonly MIN_INT: number;
        static readonly PI: number;
        static readonly TWO_PI: number;
        static readonly TAU: number;
        static readonly HALF_PI: number;
        static readonly THIRD_PI: number;
        static readonly QUARTER_PI: number;
        static readonly SIXTH_PI: number;
        static readonly EIGHTH_PI: number;
        static readonly TWELFTH_PI: number;
        static readonly DEG_TO_RAD: number;
        static readonly RAD_TO_DEG: number;
        static readonly RADIANS: number;
        static readonly DEGREES: number;
        static readonly WHITESPACE: string;
        static readonly RGB: number;
        static readonly ARGB: number;
        static readonly HSB: number;
        static readonly ALPHA: number;
        static readonly CMYK: number;
        static readonly TIFF: number;
        static readonly TARGA: number;
        static readonly JPEG: number;
        static readonly GIF: number;
        static readonly BLUR: number;
        static readonly GRAY: number;
        static readonly INVERT: number;
        static readonly OPAQUE: number;
        static readonly POSTERIZE: number;
        static readonly THRESHOLD: number;
        static readonly ERODE: number;
        static readonly DILATE: number;
        static readonly REPLACE: number;
        static readonly BLEND: number;
        static readonly ADD: number;
        static readonly SUBTRACT: number;
        static readonly LIGHTEST: number;
        static readonly DARKEST: number;
        static readonly DIFFERENCE: number;
        static readonly EXCLUSION: number;
        static readonly MULTIPLY: number;
        static readonly SCREEN: number;
        static readonly OVERLAY: number;
        static readonly HARD_LIGHT: number;
        static readonly SOFT_LIGHT: number;
        static readonly DODGE: number;
        static readonly BURN: number;
        static readonly ALPHA_MASK: number;
        static readonly RED_MASK: number;
        static readonly GREEN_MASK: number;
        static readonly BLUE_MASK: number;
        static readonly CUSTOM: number;
        static readonly ORTHOGRAPHIC: number;
        static readonly PERSPECTIVE: number;
        static readonly POINT: number;
        static readonly POINTS: number;
        static readonly LINE: number;
        static readonly LINES: number;
        static readonly TRIANGLE: number;
        static readonly TRIANGLES: number;
        static readonly TRIANGLE_STRIP: number;
        static readonly TRIANGLE_FAN: number;
        static readonly QUAD: number;
        static readonly QUADS: number;
        static readonly QUAD_STRIP: number;
        static readonly POLYGON: number;
        static readonly PATH: number;
        static readonly RECT: number;
        static readonly ELLIPSE: number;
        static readonly ARC: number;
        static readonly SPHERE: number;
        static readonly BOX: number;
        static readonly GROUP: number;
        static readonly PRIMITIVE: number;
        static readonly GEOMETRY: number;
        static readonly VERTEX: number;
        static readonly BEZIER_VERTEX: number;
        static readonly CURVE_VERTEX: number;
        static readonly BREAK: number;
        static readonly CLOSESHAPE: number;
        static readonly OPEN: number;
        static readonly CLOSE: number;
        static readonly CORNER: number;
        static readonly CORNERS: number;
        static readonly RADIUS: number;
        static readonly CENTER: number;
        static readonly DIAMETER: number;
        static readonly BASELINE: number;
        static readonly TOP: number;
        static readonly BOTTOM: number;
        static readonly NORMAL: number;
        static readonly NORMALIZED: number;
        static readonly IMAGE: number;
        static readonly MODEL: number;
        static readonly SHAPE: number;
        static readonly SQUARE: "butt";
        static readonly ROUND: "round";
        static readonly PROJECT: "square";
        static readonly MITER: "miter";
        static readonly BEVEL: "bevel";
        static readonly AMBIENT: number;
        static readonly DIRECTIONAL: number;
        static readonly SPOT: number;
        static readonly BACKSPACE: number;
        static readonly TAB: number;
        static readonly ENTER: number;
        static readonly RETURN: number;
        static readonly ESC: number;
        static readonly DELETE: number;
        static readonly CODED: number;
        static readonly SHIFT: number;
        static readonly CONTROL: number;
        static readonly ALT: number;
        static readonly CAPSLK: number;
        static readonly PGUP: number;
        static readonly PGDN: number;
        static readonly END: number;
        static readonly HOME: number;
        static readonly LEFT: number;
        static readonly UP: number;
        static readonly RIGHT: number;
        static readonly DOWN: number;
        static readonly F1: number;
        static readonly F2: number;
        static readonly F3: number;
        static readonly F4: number;
        static readonly F5: number;
        static readonly F6: number;
        static readonly F7: number;
        static readonly F8: number;
        static readonly F9: number;
        static readonly F10: number;
        static readonly F11: number;
        static readonly F12: number;
        static readonly NUMLK: number;
        static readonly META: number;
        static readonly INSERT: number;
        static readonly ARROW: "default";
        static readonly CROSS: "crosshair";
        static readonly HAND: "pointer";
        static readonly MOVE: "move";
        static readonly TEXT: "text";
        static readonly WAIT: "wait";
        static readonly NOCURSOR: string;
        static readonly DISABLE_OPENGL_2X_SMOOTH: number;
        static readonly ENABLE_OPENGL_2X_SMOOTH: number;
        static readonly ENABLE_OPENGL_4X_SMOOTH: number;
        static readonly ENABLE_NATIVE_FONTS: number;
        static readonly DISABLE_DEPTH_TEST: number;
        static readonly ENABLE_DEPTH_TEST: number;
        static readonly ENABLE_DEPTH_SORT: number;
        static readonly DISABLE_DEPTH_SORT: number;
        static readonly DISABLE_OPENGL_ERROR_REPORT: number;
        static readonly ENABLE_OPENGL_ERROR_REPORT: number;
        static readonly ENABLE_ACCURATE_TEXTURES: number;
        static readonly DISABLE_ACCURATE_TEXTURES: number;
        static readonly HINT_COUNT: number;
        static readonly SINCOS_LENGTH: number;
        static readonly PRECISIONB: number;
        static readonly PRECISIONF: number;
        static readonly PREC_MAXVAL: number;
        static readonly PREC_ALPHA_SHIFT: number;
        static readonly PREC_RED_SHIFT: number;
        static readonly NORMAL_MODE_AUTO: number;
        static readonly NORMAL_MODE_SHAPE: number;
        static readonly NORMAL_MODE_VERTEX: number;
        static readonly MAX_LIGHTS: number;
    }
    interface PConstants extends PConstants.prototype {
    }
    namespace PConstants {
        interface prototype {
            readonly X: number;
            readonly Y: number;
            readonly Z: number;
            readonly R: number;
            readonly G: number;
            readonly B: number;
            readonly A: number;
            readonly U: number;
            readonly V: number;
            readonly NX: number;
            readonly NY: number;
            readonly NZ: number;
            readonly EDGE: number;
            readonly SR: number;
            readonly SG: number;
            readonly SB: number;
            readonly SA: number;
            readonly SW: number;
            readonly TX: number;
            readonly TY: number;
            readonly TZ: number;
            readonly VX: number;
            readonly VY: number;
            readonly VZ: number;
            readonly VW: number;
            readonly AR: number;
            readonly AG: number;
            readonly AB: number;
            readonly DR: number;
            readonly DG: number;
            readonly DB: number;
            readonly DA: number;
            readonly SPR: number;
            readonly SPG: number;
            readonly SPB: number;
            readonly SHINE: number;
            readonly ER: number;
            readonly EG: number;
            readonly EB: number;
            readonly BEEN_LIT: number;
            readonly VERTEX_FIELD_COUNT: number;
            readonly P2D: number;
            readonly JAVA2D: number;
            readonly WEBGL: number;
            readonly P3D: number;
            readonly OPENGL: number;
            readonly PDF: number;
            readonly DXF: number;
            readonly OTHER: number;
            readonly WINDOWS: number;
            readonly MAXOSX: number;
            readonly LINUX: number;
            readonly EPSILON: number;
            readonly EPSILON_ZERO: number;
            readonly MAX_FLOAT: number;
            readonly MIN_FLOAT: number;
            readonly MAX_INT: number;
            readonly MIN_INT: number;
            readonly PI: number;
            readonly TWO_PI: number;
            readonly TAU: number;
            readonly HALF_PI: number;
            readonly THIRD_PI: number;
            readonly QUARTER_PI: number;
            readonly SIXTH_PI: number;
            readonly EIGHTH_PI: number;
            readonly TWELFTH_PI: number;
            readonly DEG_TO_RAD: number;
            readonly RAD_TO_DEG: number;
            readonly RADIANS: number;
            readonly DEGREES: number;
            readonly WHITESPACE: typeof PConstants.WHITESPACE;
            readonly RGB: number;
            readonly ARGB: number;
            readonly HSB: number;
            readonly ALPHA: number;
            readonly CMYK: number;
            readonly TIFF: number;
            readonly TARGA: number;
            readonly JPEG: number;
            readonly GIF: number;
            readonly BLUR: number;
            readonly GRAY: number;
            readonly INVERT: number;
            readonly OPAQUE: number;
            readonly POSTERIZE: number;
            readonly THRESHOLD: number;
            readonly ERODE: number;
            readonly DILATE: number;
            readonly REPLACE: number;
            readonly BLEND: number;
            readonly ADD: number;
            readonly SUBTRACT: number;
            readonly LIGHTEST: number;
            readonly DARKEST: number;
            readonly DIFFERENCE: number;
            readonly EXCLUSION: number;
            readonly MULTIPLY: number;
            readonly SCREEN: number;
            readonly OVERLAY: number;
            readonly HARD_LIGHT: number;
            readonly SOFT_LIGHT: number;
            readonly DODGE: number;
            readonly BURN: number;
            readonly ALPHA_MASK: number;
            readonly RED_MASK: number;
            readonly GREEN_MASK: number;
            readonly BLUE_MASK: number;
            readonly CUSTOM: number;
            readonly ORTHOGRAPHIC: number;
            readonly PERSPECTIVE: number;
            readonly POINT: number;
            readonly POINTS: number;
            readonly LINE: number;
            readonly LINES: number;
            readonly TRIANGLE: number;
            readonly TRIANGLES: number;
            readonly TRIANGLE_STRIP: number;
            readonly TRIANGLE_FAN: number;
            readonly QUAD: number;
            readonly QUADS: number;
            readonly QUAD_STRIP: number;
            readonly POLYGON: number;
            readonly PATH: number;
            readonly RECT: number;
            readonly ELLIPSE: number;
            readonly ARC: number;
            readonly SPHERE: number;
            readonly BOX: number;
            readonly GROUP: number;
            readonly PRIMITIVE: number;
            readonly GEOMETRY: number;
            readonly VERTEX: number;
            readonly BEZIER_VERTEX: number;
            readonly CURVE_VERTEX: number;
            readonly BREAK: number;
            readonly CLOSESHAPE: number;
            readonly OPEN: number;
            readonly CLOSE: number;
            readonly CORNER: number;
            readonly CORNERS: number;
            readonly RADIUS: number;
            readonly CENTER: number;
            readonly DIAMETER: number;
            readonly BASELINE: number;
            readonly TOP: number;
            readonly BOTTOM: number;
            readonly NORMAL: number;
            readonly NORMALIZED: number;
            readonly IMAGE: number;
            readonly MODEL: number;
            readonly SHAPE: number;
            readonly SQUARE: typeof PConstants.SQUARE;
            readonly ROUND: typeof PConstants.ROUND;
            readonly PROJECT: typeof PConstants.PROJECT;
            readonly MITER: typeof PConstants.MITER;
            readonly BEVEL: typeof PConstants.BEVEL;
            readonly AMBIENT: number;
            readonly DIRECTIONAL: number;
            readonly SPOT: number;
            readonly BACKSPACE: number;
            readonly TAB: number;
            readonly ENTER: number;
            readonly RETURN: number;
            readonly ESC: number;
            readonly DELETE: number;
            readonly CODED: number;
            readonly SHIFT: number;
            readonly CONTROL: number;
            readonly ALT: number;
            readonly CAPSLK: number;
            readonly PGUP: number;
            readonly PGDN: number;
            readonly END: number;
            readonly HOME: number;
            readonly LEFT: number;
            readonly UP: number;
            readonly RIGHT: number;
            readonly DOWN: number;
            readonly F1: number;
            readonly F2: number;
            readonly F3: number;
            readonly F4: number;
            readonly F5: number;
            readonly F6: number;
            readonly F7: number;
            readonly F8: number;
            readonly F9: number;
            readonly F10: number;
            readonly F11: number;
            readonly F12: number;
            readonly NUMLK: number;
            readonly META: number;
            readonly INSERT: number;
            readonly ARROW: typeof PConstants.ARROW;
            readonly CROSS: typeof PConstants.CROSS;
            readonly HAND: typeof PConstants.HAND;
            readonly MOVE: typeof PConstants.MOVE;
            readonly TEXT: typeof PConstants.TEXT;
            readonly WAIT: typeof PConstants.WAIT;
            readonly NOCURSOR: typeof PConstants.NOCURSOR;
            readonly DISABLE_OPENGL_2X_SMOOTH: number;
            readonly ENABLE_OPENGL_2X_SMOOTH: number;
            readonly ENABLE_OPENGL_4X_SMOOTH: number;
            readonly ENABLE_NATIVE_FONTS: number;
            readonly DISABLE_DEPTH_TEST: number;
            readonly ENABLE_DEPTH_TEST: number;
            readonly ENABLE_DEPTH_SORT: number;
            readonly DISABLE_DEPTH_SORT: number;
            readonly DISABLE_OPENGL_ERROR_REPORT: number;
            readonly ENABLE_OPENGL_ERROR_REPORT: number;
            readonly ENABLE_ACCURATE_TEXTURES: number;
            readonly DISABLE_ACCURATE_TEXTURES: number;
            readonly HINT_COUNT: number;
            readonly SINCOS_LENGTH: number;
            readonly PRECISIONB: number;
            readonly PRECISIONF: number;
            readonly PREC_MAXVAL: number;
            readonly PREC_ALPHA_SHIFT: number;
            readonly PREC_RED_SHIFT: number;
            readonly NORMAL_MODE_AUTO: number;
            readonly NORMAL_MODE_SHAPE: number;
            readonly NORMAL_MODE_VERTEX: number;
            readonly MAX_LIGHTS: number;
        }
    }
}
declare namespace pjs.math {
    abstract class Maths extends core.PConstants {
        random(low?: number, high?: number): norm;
        static readonly random: (low?: number, high?: number) => norm;
        lerp(start: number, stop: number, amt: norm): number;
        static readonly lerp: (start: number, stop: number, amt: norm) => number;
        sq(n: number): number;
        static readonly sq: (n: number) => number;
        isZero(n: number, tolerance?: norm): boolean;
        static readonly isZero: (n: number, tolerance?: norm) => boolean;
    }
}
declare var StrictMath: Math;
declare namespace pjs.core {
    class Processing extends math.Maths {
        _degreeIn: boolean;
        _degreeOut: boolean;
        constructor();
        init(): void;
        static readonly PVector: typeof math.PVector;
        random(low?: number, high?: number): norm;
    }
    interface Processing extends Processing.prototype {
    }
    namespace Processing {
        interface prototype {
            PVector: typeof Processing.PVector;
        }
    }
}
import Processing = pjs.core.Processing;
declare var PApplet: typeof Processing;
declare namespace pjs.math {
    class PVector implements Comparable<xyzObj>, Cloneable {
        x: coord;
        y: coord;
        z: coord;
        constructor(x?: coord, y?: coord, z?: coord);
        static fromAngle(angle: rad, target?: PVector): PVector;
        static random2D(target?: PVector | Processing, parent?: Processing): PVector;
        static random3D(target?: PVector | Processing, parent?: Processing): PVector;
        static dist(v1: xyzObj, v2: xyzObj): number;
        static distSq(v1: xyzObj, v2: xyzObj): number;
        static dot(v1: xyzObj, v2: xyzObj): number;
        static cross(v1: xyzObj, v2: xyzObj, target?: PVector): PVector;
        static angleBetween(v1: PVector, v2: PVector, magSq1?: number, magSq2?: number, dot?: number): rad;
        static lerp(v1: PVector, v2: PVector, amt: norm, target?: PVector): PVector;
        static add(v1: xyzObj, v2: xyzObj, target?: PVector): PVector;
        static sub(v1: xyzObj, v2: xyzObj, target?: PVector): PVector;
        static subInv(v1: xyzObj, v2: xyzObj, target?: PVector): PVector;
        static mult(v: xyzObj, n: xyzObj | number, target?: PVector): PVector;
        static div(v: xyzObj, n: xyzObj | number, target?: PVector): PVector;
        static mod(v: xyzObj, n: xyzObj | number, target?: PVector): PVector;
        static compare(a: xyzObj, b: xyzObj): number;
        compareTo(v: xyzObj): number;
        array(): [coord, coord, coord];
        object(): {
            x: coord;
            y: coord;
            z: coord;
        };
        clone(): PVector;
        copy(): PVector;
        get(): PVector;
        get(target: number[]): xyz;
        get(target: TypedArray): TypedArray;
        get(target: ArrayLike<number>): PseudoArray<number>;
        get(target: xyzObj): xyzObj;
        set(v: ArrayLike<number> | xyzObj | coord, y?: coord, z?: coord): this;
        normalize(target?: PVector, mag?: number): PVector;
        limit(max: number, target?: PVector, magSq?: number): PVector;
        heading(): rad;
        heading2D(): rad;
        mag(): number;
        magSq(): number;
        setMag(target: PVector | number, length?: number, mag?: number): PVector;
        rotate(angle: rad, target?: PVector): PVector;
        rotateX(angle: rad, target?: PVector): PVector;
        rotateY(angle: rad, target?: PVector): PVector;
        rotateZ(angle: rad, target?: PVector): PVector;
        fromAngle(angle: rad, target?: PVector): PVector;
        random2D(target?: PVector | Processing, parent?: Processing): PVector;
        random3D(target?: PVector | Processing, parent?: Processing): PVector;
        dist(v1: xyzObj, v2?: xyzObj): number;
        distSq(v1: xyzObj, v2?: xyzObj): number;
        dot(v: xyzObj | number, y?: xyzObj | number, z?: number): number;
        cross(v1: xyzObj, v2?: PVector, target?: PVector): PVector;
        angleBetween(v: PVector, magSq1?: number, magSq2?: number, dot?: number): rad;
        lerp(a: PVector | number, b: PVector | number, c?: number, d?: norm): PVector;
        add(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number): PVector;
        sub(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number): PVector;
        subInv(v: xyzObj | number, y?: xyzObj | number, z?: PVector | number): PVector;
        mult(v: xyzObj | number, n?: number, target?: PVector): PVector;
        div(v: xyzObj | number, n?: number, target?: PVector): PVector;
        mod(v: xyzObj | number, n?: number, target?: PVector): PVector;
        negate(): this;
        clear(): this;
        isZero(tolerance?: norm): boolean;
        isNaN(): boolean;
        toString(): string;
        valueOf(): number;
        equals(o: Object): boolean;
        hashCode(): number;
    }
    class PVectorAlt extends PVector {
    }
    function PVectorAltBuilder(p: Processing): typeof PVectorAlt;
}
