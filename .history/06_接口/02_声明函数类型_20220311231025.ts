// 声明函数类型
// 1. 用type进行声明
type CalFn = (n1: number, n2: number) => number

function calc(num1: number, num2:number, calFn: CalFn) {

}

const add: CalFn = (num1, num2) => {
  return num1 + num2
}
// 2. 用interface声明
interface ICalcFn {
  // 定义函数类型
  (n1: number, n2:number): number
}
