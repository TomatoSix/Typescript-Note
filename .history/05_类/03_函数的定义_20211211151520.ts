function foo() {

}


type fnType = () => void

function bar(fn: fnType) {
  fn()
}

bar(foo)


const add = (a1: number, a2:number) => {
  return a1+a2
}