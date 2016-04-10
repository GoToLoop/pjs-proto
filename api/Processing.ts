/// <reference path="Maths.ts"/>

class Processing extends Maths {
  constructor() { super(); /* this.random = () => 10 */ }
  static readonly PVector = pjs.classes.PVector
}

interface Processing extends Processing.prototype {}

namespace Processing {
  export interface prototype {
    readonly PVector: typeof Processing.PVector
  }
}
