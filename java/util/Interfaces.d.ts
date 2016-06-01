declare namespace java.util {
  interface Iterator<E> extends IterableIterator<E> {
    hasNext(): boolean
    next(value?: any): E & IteratorResult<E>
    remove(): void
  }

  interface Collection<E> extends lang.Iterable<E> {}
  interface Set<E> extends Collection<E> {}
  interface List<E> extends Collection<E> {}
  interface Queue<E> extends Collection<E> {}
  interface BlockingQueue<E> extends Queue<E> {}
  interface Deque<E> extends Queue<E> {}
  interface BlockingDeque<E> extends BlockingQueue<E>, Deque<E> {}
}

type Collection<E> = java.util.Collection<E>
type List<E> = java.util.List<E>
type Queue<E> = java.util.Queue<E>
type BlockingQueue<E> = java.util.BlockingQueue<E>
type Deque<E> = java.util.Deque<E>
type BlockingDeque<E> = java.util.BlockingDeque<E>
