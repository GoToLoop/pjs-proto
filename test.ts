/// <reference path="core/Processing.ts"/>
/// <reference path="math/PVector.ts"/>

"use strict"

console.log(Processing.random())
console.log(new Processing().random())
console.log(new Processing().PVector.random2D(new Processing))
console.log(Processing.prototype.PVector.random3D() + "")
console.log(new Processing)
console.log(new Processing().NOCURSOR)
console.log(Processing.PROJECT)
var arr = new Processing().PVector.random3D().get([4, 3, 6, 6])
arr[13] = 7
console.info(arr)

function q(...a: string[]) {
  new Processing().PVector.random3D().get(arguments); console.info(arguments)
}
q('tdfgfdgfd', 'tdfgfdgfd','tdfgfdgfd','tdfgfdgfd')

pjs.math.PVector.random2D()
Processing.PVector.random3D()
Processing.sq(6)

var pa = new PApplet
pa.random = () => 10
pa.sq = n => n*n*n

var cn = new (<typeof PApplet>pa.constructor)().random()
console.warn(cn)

var vec1 = new pa.PVector(+pa.PI, +pa.TAU).fromAngle(90).get(null)
var vec2 = pa.PVector.fromAngle(180)
console.log(vec1, vec2)

vec2.__proto__.rotateZ
vec2.constructor.compare
