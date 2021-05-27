// different types - string, number, boolean, object, undefinied, null, symbol
// object -> array, function, promise, set

type Mixed = string | number | boolean 

interface Person{
  name: string,
  age: number,
  hometown?: boolean
}

let num: number
let colton: string
let arr: Mixed[]
let myObj:Person = {
  name: '',
  age: 3
}

myObj.hometown = false

arr = [1, '', false]

function sum(a: number, b: number){
  return a + b
}

console.log(sum(2, 5))