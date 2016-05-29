/// <reference path="../math/Maths"/>

namespace pjs.core {
  "use strict"

  export class Processing extends math.Maths {
    _degreeIn:  boolean
    _degreeOut: boolean

    constructor () {
       super(); /* this.random = () => 10 */
       this.init()
    }

    init() { this.PVector = math.PVectorAltBuilder(this), this._degreeIn = true }

    static readonly PVector: typeof math.PVector

    random(low?: number, high?: number) { return Math.random() as norm }
  }

  export interface Processing extends Processing.prototype {}

  export namespace Processing {
    export interface prototype {
      PVector: typeof Processing.PVector
    }
  }
}

import Processing = pjs.core.Processing
var PApplet = Processing
