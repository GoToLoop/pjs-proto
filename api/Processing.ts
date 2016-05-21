/// <reference path="Maths.ts"/>

class Processing extends Maths {
  _degreeIn:  boolean
  _degreeOut: boolean

  constructor () {
     super(); /* this.random = () => 10 */
     this.init()
  }

  init() { this.PVector = pjs.classes.PVectorAltBuilder(this), this._degreeIn = true }

  static readonly PVector: typeof pjs.classes.PVector

  random(low?: number, high?: number) { return Math.random() as norm }
}

interface Processing extends Processing.prototype {}

namespace Processing {
  export interface prototype {
    PVector: typeof Processing.PVector
  }
}

const PApplet = Processing
