function foo() {

}


type fnType = () => void

function bar(fn: fnType) {
  fn()
}

bar(fn)

