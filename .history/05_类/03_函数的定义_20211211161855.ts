function foo() {
  console.log('foo');
  
}
type fnType = () => void
function bar(fn: fnType) {
  fn()
}
bar(foo)



type addType = (n1: number, n2: number) => number 
const add: addType = (a1: number, a2:number) => {
  return a1+a2
}

// let res = add(1,2)
// console.log(res);


// 
type objType = {
  [index: number]: string
}

const obj: objType = {
  0: 'qkqq',
  1: 'wazt',
  2: 'nha'
  
}

interface addType {
  (num1: number, num2: number): number
}
var add1: addType = (num1, num2) => {
  return num1 + num2
}