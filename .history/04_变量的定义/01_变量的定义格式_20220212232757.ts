var name: string = 'why'
let age: number = 18
const height: number = 1.88

const message = 'hello world'


let foo = 'qkqq'
foo = '567'

function fn(): void {
  console.log(true);
  
  // return true; //函数类型判断为boolean
}

let info: [string, number] = ['123', 123]
const name1 = info[0]
console.log(name1.length);

// 给返回值加上类型注解
// 在开发中，通常情况下可以不写返回值的类型
function sum(num1: number, num2: number) {
  return num1+num2
}


function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
  
}
printPoint({x: 123, y: 321})

// 联合类型
function printID(id: number | string) {
  console.log(id);
}


export {}