/// <reference path="../math/Maths"/>

namespace pjs.core {
  "use strict"

  export class PApplet extends math.Maths {
    _degreeIn:  boolean
    _degreeOut: boolean

    constructor () {
       super(); /* this.random = () => 10 */
       this.init()
    }

    init() { this.PVector = math.PVectorDegBuilder(this), this._degreeIn = true }

    static readonly PVector: typeof math.PVector
    static readonly AbstractCollection = java.util.AbstractCollection

    random(low?: number, high?: number) { return Math.random() as norm }

    noLoop() {}
  }

  export interface PApplet extends PApplet.prototype {}

  export namespace PApplet {
    export interface prototype {
      PVector: typeof PApplet.PVector
      AbstractCollection: typeof PApplet.AbstractCollection
    }
  }
}

import PApplet = pjs.core.PApplet
var Processing = PApplet
