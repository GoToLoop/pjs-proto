/// <reference path="Interfaces"/>

namespace java.util {
  export abstract class AbstractCollection<E> implements Collection<E> {
     abstract iterator(): Iterator<E>
     abstract [Symbol.iterator](): Iterator<E>
  }
}

import AbstractCollection = java.util.AbstractCollection
