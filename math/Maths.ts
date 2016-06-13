/// <reference path="../core/PConstants"/>

namespace pjs.math {
  "use strict"

  export abstract class Maths extends core.PConstants {
    random(low?: number, high?: number) { return Math.random() as norm }
    static readonly random = Maths.prototype.random

    lerp(start: number, stop: number, amt: norm) { return amt * (stop - start) + start }
    static readonly lerp = Maths.prototype.lerp

    sq(n: number) { return n*n }
    static readonly sq = Maths.prototype.sq

    isZero(n: number, tolerance=Maths.EPSILON_ZERO) {
      return n != n || (n <= (tolerance = Math.abs(tolerance)) && n >= -tolerance)
    }
    static readonly isZero = Maths.prototype.isZero
  }
}

var StrictMath = Math
