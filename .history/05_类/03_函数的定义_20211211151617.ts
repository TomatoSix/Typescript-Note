function foo() {

}


type fnType = () => void

function bar(fn: fnType) {
  fn()
}

bar(foo)

type addType = (n1: number, n2: number) => void 
const add: addType = (a1: number, a2:number) => {
  return a1+a2
}