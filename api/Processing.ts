/// <reference path="Maths.ts"/>

class Processing extends Maths {
  constructor() { super() }
  static readonly PVector = typeof pjs !== 'undefined' && pjs.classes.PVector
}

interface Processing extends Processing.prototype {}

namespace Processing {
  export interface prototype {
    readonly PVector: typeof Processing.PVector
  }
}
