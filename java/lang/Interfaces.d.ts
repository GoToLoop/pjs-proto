declare namespace java {
  type IterableJS<T> = Iterable<T>

  namespace lang {
    interface Iterable<T> extends IterableJS<T> { iterator(): util.Iterator<T> }
  }
}

declare namespace java.lang {
  interface AutoCloseable { close(): void }
  interface Cloneable { clone(): {} }
  interface Comparable<T> { compareTo(o: T): int32 }
  interface Runnable { run(): void }

  interface Appendable {
    append(c: char): this
    append(csq: CharSequence, start?: int32, end?: int32): this
  }

  interface CharSequence {
    charAt(index: int32): char
    length(): int32
    subSequence(start: int32, end: int32): this
  }
}

// type Appendable = java.lang.Appendable
// type AutoCloseable = java.lang.AutoCloseable
// type CharSequence = java.lang.CharSequence
// type Cloneable = java.lang.Cloneable
// type Comparable<T> = java.lang.Comparable<T>
// type Runnable = java.lang.Runnable
