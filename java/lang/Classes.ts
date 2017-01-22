/// <reference path="../../utils/Decorators"/>

/// <reference path="Interfaces"/>
/// <reference path="Annotations"/>

namespace java {
  "use strict"

  import FreezeAll = pjs.utils.FreezeAll
  const Bool = Boolean

  namespace lang {
    @FreezeAll export class Boolean extends Bool {}
  }
}
