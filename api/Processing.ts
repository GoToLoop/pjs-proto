/// <reference path="Maths.ts"/>
/// <reference path="../classes/PVector.ts"/>

class Processing extends Maths {
  constructor() { super() }
  @ProtoAssign static readonly PVector = pjs.classes.PVector
}

interface Processing extends Processing.prototype {}

namespace Processing {
  export interface prototype {
    readonly PVector: typeof Processing.PVector
  }
}
