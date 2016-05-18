/// <reference path="Maths.ts"/>

class Processing extends Maths {
  degreeInput = true
  degreeOutput = false

  constructor () {
     super(); /* this.random = () => 10 */
     this.init()
  }

  init() { this.PVector = pjs.classes.PVectorAltBuilder(this) }

  static readonly PVector = 'pjs' in window && pjs.classes.PVector

  random(low?: number, high?: number) { return Math.random() as norm }
}

interface Processing extends Processing.prototype {}

namespace Processing {
  export interface prototype {
    PVector: typeof Processing.PVector
  }
}

const PApplet = Processing
