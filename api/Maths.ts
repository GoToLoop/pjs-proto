abstract class Maths extends PConstants {
  random() { return Math.random() as norm }
  static readonly random = Maths.prototype.random

  lerp(start: number, stop: number, amt: norm) { return amt * (stop - start) + start }
  static readonly lerp = Maths.prototype.lerp

  sq(n: number) { return n*n }
  static readonly sq = Maths.prototype.sq
}

Object.freeze(Object.freeze(Maths).prototype)
const StrictMath = Maths
