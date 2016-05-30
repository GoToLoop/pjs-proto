/// <reference path="Interfaces"/>

namespace java.util {
  export abstract class AbstractCollection<E> implements Collection<E> {
     abstract iterator(): util.Iterator<E>
  }
}

import AbstractCollection = java.util.AbstractCollection
