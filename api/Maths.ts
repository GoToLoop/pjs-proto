@Frozen abstract class Maths extends PConstants {
  @Frozen random() { return Math.random() as norm }
  static readonly random = Maths.prototype.random

  @Frozen lerp(start: number, stop: number, amt: norm) { return amt * (stop - start) + start }
  static readonly lerp = Maths.prototype.lerp

  @Frozen sq(n: number) { return n*n }
  static readonly sq = Maths.prototype.sq
}

const StrictMath = Maths
