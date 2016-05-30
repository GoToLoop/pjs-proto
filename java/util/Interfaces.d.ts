declare namespace java {
  type Iter<T> = Iterator<T>

  namespace util {
    interface Iterator<E> extends Iter<E> {
      hasNext(): boolean
      next(value?: any): E & IteratorResult<E>
      remove(): void
    }
  }
}

declare namespace java.util {
  interface Collection<E> extends lang.Iterable<E> {}
  interface Set<E> extends Collection<E> {}
  interface List<E> extends Collection<E> {}
  interface Queue<E> extends Collection<E> {}
  interface BlockingQueue<E> extends Queue<E> {}
  interface Deque<E> extends Queue<E> {}
  interface BlockingDeque<E> extends BlockingQueue<E>, Deque<E> {}
}

import Collection = java.util.Collection
import List = java.util.List
import Queue = java.util.Queue
import BlockingQueue = java.util.BlockingQueue
import Deque = java.util.Deque
import BlockingDeque = java.util.BlockingDeque
