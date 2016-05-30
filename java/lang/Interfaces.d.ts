/// <reference path="../../typings/Types"/>

declare namespace java.lang {
  interface AutoCloseable { close(): void }
  interface Cloneable { clone(): {} }
  interface Comparable<T> { compareTo(o: T): int32 }
  interface Iterable<T> { iterator(): util.Iterator<T> }
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

import Appendable = java.lang.Appendable
import AutoCloseable = java.lang.AutoCloseable
import CharSequence = java.lang.CharSequence
import Cloneable = java.lang.Cloneable
import Comparable = java.lang.Comparable
import Runnable = java.lang.Runnable
