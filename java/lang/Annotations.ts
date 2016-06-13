namespace java.lang {
  "use strict"
  export function Deprecated(clazz: Object, prop?: string | symbol) {}
  export function FunctionalInterface(clazz: Function) {}
  export function Override(clazz: Object, prop?: string | symbol) {}
  export function SafeVarargs(clazz: Object, prop?: string | symbol) {}
  export function SuppressWarnings(clazz: Object, prop?: string | symbol) {
    return <TFn extends Function>(clazz: TFn) => {}
  }
}

import Deprecated = java.lang.Deprecated
import FunctionalInterface = java.lang.FunctionalInterface
import Override = java.lang.Override
import SafeVarargs = java.lang.SafeVarargs
import SuppressWarnings = java.lang.SuppressWarnings
