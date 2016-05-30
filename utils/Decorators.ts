namespace pjs.utils {
  "use strict"

  export function Frozen(clazz: Function | Object, prop?: string | symbol) { // Class, Method, Prop
    "use strict"
    if (prop) {
      const value = clazz[prop]
      Object.freeze(value) && Object.freeze(value.prototype)
    } else Object.freeze(Object.freeze(clazz)['prototype'])
  }

  export function ProtoAssign(clazz: Function, prop: string | symbol) {
    "use strict"; "use strong" // Must be static Method or Prop
    clazz.prototype[prop] = clazz[prop]
  }

  export function ProtoAdditions(props: Object) { // Class only
    "use strict"
    return <TFn extends Function>(clazz: TFn) => {
      for (const prop in props)  clazz.prototype[prop] = props[prop]
    }
  }

  export function InjectInto(target: Function) { // Class only
    "use strict"
    return <TFn extends Function>(clazz: TFn) => {
      //let name = clazz['name'] as string
      let name = clazz.name
      if (!name) {
        name = clazz.toString()
        const start = name.indexOf(' ') + 1,
              stop  = name.indexOf('(', start)
        name = name.substring(start, ~stop? stop : name.lastIndexOf(' \x7b')).trim()
      }
      name && (target[name] = target.prototype[name] = clazz)
    }
  }
}
