/// <reference path="Interfaces"/>

namespace java.util {
  "use strict"
  import FreezeAll = pjs.utils.FreezeAll

  @FreezeAll export abstract class AbstractCollection<E> implements Collection<E> {
     abstract iterator(): Iterator<E>
     abstract [Symbol.iterator](): Iterator<E>
  }
}

import AbstractCollection = java.util.AbstractCollection
