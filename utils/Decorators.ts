/// <reference path="../typings/Types"/>
/// <reference path="TypeOfs"/>

namespace pjs.utils {
  "use strict"

  export function Frozen(clazz: Function | Object, prop?: string | symbol) { // Class, Method, Prop
    if (prop) {
      const value = clazz[prop]
      Object.freeze(value) && Object.freeze(value.prototype)
    } else Object.freeze(Object.freeze(clazz)[PTY])
  }

  export function FreezeAll(clazz: Function) { // Class only
    const proto = clazz.prototype
    //for (const prop in Object.freeze(clazz))  Object.freeze(clazz[prop].prototype) // Not FF!
    //for (const prop in Object.freeze(proto))  Object.freeze(proto[prop].prototype)
    for (let prop in Object.freeze(clazz))  Object.freeze(clazz[prop].prototype)
    for (let prop in Object.freeze(proto))  Object.freeze(proto[prop].prototype)
  }

  export function ProtoAssign(clazz: Function, prop: string | symbol) {  // Static Method or Prop
    clazz.prototype[prop] = clazz[prop]
  }

  export function ProtoAssignAll(clazz: Function) { // Class only
    //for (const prop in clazz) { // Not compatible w/ FF!
    for (let prop in clazz) {
      const value = clazz[prop]
      typeof value !== FNT && (clazz.prototype[prop] = value)
    }
  }

  export function ProtoAdditions(props: Object): ClassDecorator { // Class only
    return <TFn extends Function>(clazz: TFn) => {
      //for (const prop in props)  clazz.prototype[prop] = props[prop] // Not compatible w/ FF!
      for (let prop in props)  clazz.prototype[prop] = props[prop]
    }
  }

  export function InjectInto(target: Function): ClassDecorator { // Class only
    return <TFn extends Function>(clazz: TFn) => {
      //let name = clazz['name'] as string
      let name = clazz.name
      if (!name) {
        name = clazz.toString()
        const start = name.indexOf(SPC) + 1,
              stop  = name.indexOf('(', start)
        name = name.substring(start, ~stop? stop : name.lastIndexOf(' \x7b')).trim()
      }
      name && (target[name] = target.prototype[name] = clazz)
    }
  }

  export function Timeout(millis = 0): MethodDecorator { // Methods only
    return (tgt: Function | {}, prop: string | symbol, d: TypedPropertyDescriptor<Function>) => {
      if (typeof d.value !== 'function')  return
      const originalMethod = d.value
      d.value = function (this: typeof tgt, ...args: any[]) {
        setTimeout(() => originalMethod.apply(this, args), millis)
      }
    }
  }

  export function Interval(millis = 0): MethodDecorator { // Methods only
    return (tgt: Function | {}, prop: string | symbol, d: TypedPropertyDescriptor<Function>) => {
      if (typeof d.value !== 'function')  return
      const originalMethod = d.value
      d.value = function (this: typeof tgt, ...args: any[]) {
        setInterval(() => originalMethod.apply(this, args), millis)
      }
    }
  }
}
