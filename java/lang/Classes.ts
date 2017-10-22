/// <reference path="../../utils/Decorators.ts"/>

/// <reference path="Interfaces.d.ts"/>
/// <reference path="Annotations.ts"/>

namespace java {
  import FreezeAll = pjs.utils.FreezeAll
  const Bool = Boolean

  namespace lang {
    @FreezeAll export class Boolean extends Bool {}
  }
}
