type none    = null | undefined
type undef   = undefined

type falsy   = boolean
type truthy  = boolean

type char    = string
type url     = string

type int8    = number
type int16   = number
type int32   = number
type int64   = number
type uint8   = number
type uint16  = number
type uint32  = number
type uint64  = number
type float32 = number
type float64 = number

type byte    = int8
type ubyte   = uint8
type short   = int16
type ushort  = uint16
type int     = int32
type uint    = uint32
type long    = int64
type ulong   = uint64
type float   = float32
type double  = float64

declare const enum color {} // Colors
declare const enum gray {}  // Gray Colors
declare const enum alpha {} // Opacity

declare const enum pos {}   // Positives
declare const enum neg {}   // Negatives
declare const enum nzr {}   // Non-Zero
declare const enum whole {} // Integers

declare const enum coord {} // Coordinates
declare const enum size {}  // Dimensions like length, diameter & radius
declare const enum pct {}   // Percentage %
declare const enum norm {}  // Normalized range from 0.0 to 1.0

declare const enum rad {}   // Radians
declare const enum deg {}   // Degrees

type ang = rad | deg

type xy  = [coord, coord]
type xyz = [coord, coord, coord]
type wh  = [size, size]
type whd = [size, size, size]

type xyObj  = { x: coord, y: coord }
type xyzObj = { x: coord, y: coord, z: coord }
type whObj  = { width: size, height: size }
type whdObj = { width: size, height: size, depth: size }

type callback = () => void

type PseudoArray<T> = {
  length: uint
  [idx: number]: T
}

type TypedArray = Int8Array    | Uint8Array  | Uint8ClampedArray |
                  Int16Array   | Uint16Array |
                  Int32Array   | Uint32Array |
                  Float32Array | Float64Array
