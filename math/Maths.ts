/// <reference path="../core/PConstants.ts"/>

namespace pjs.math {
  "use strict"

  import Frozen = utils.Frozen

  export abstract class Maths extends core.PConstants {
    @Frozen random(low?: number, high?: number) { return Math.random() as norm }
    static readonly random = Maths.prototype.random

    @Frozen lerp(start: number, stop: number, amt: norm) { return amt * (stop - start) + start }
    static readonly lerp = Maths.prototype.lerp

    @Frozen sq(n: number) { return n*n }
    static readonly sq = Maths.prototype.sq

    @Frozen isZero(n: number, tolerance?: norm) {
      const epsilon = Math.abs(tolerance) || Maths.EPSILON_ZERO
      return n !== n || (n >= -epsilon && n <= epsilon)
    }
    static readonly isZero = Maths.prototype.isZero
  }
}

const StrictMath = Math
