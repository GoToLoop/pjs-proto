class Maths extends PConstants {
  constructor() { super() }

  random() { return Math.random() }
  static readonly random = Maths.prototype.random

  lerp(start: number, stop: number, amt: number) { return amt * (stop - start) + start }
  static readonly lerp = Maths.prototype.lerp

  sq(n: number) { return n*n }
  static readonly sq = Maths.prototype.sq
}

Object.freeze(Object.freeze(Maths).prototype)
const StrictMath = Maths;
