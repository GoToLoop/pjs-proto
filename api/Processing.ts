/// <reference path="Maths.ts"/>

class Processing extends Maths {
  constructor() { super(); /* this.random = () => 10 */  this.PVector = pjs.classes.PVectorAlt }
  static readonly PVector = pjs.classes.PVector
  random(low?: number, high?: number) { return Math.random() as norm }
}

interface Processing extends Processing.prototype {}

namespace Processing {
  export interface prototype {
    PVector: typeof Processing.PVector
  }
}
