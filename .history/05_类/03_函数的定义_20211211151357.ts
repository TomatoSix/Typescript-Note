function foo() {

}


type fnType = () => void

function bar(foo: fnType) {
  foo()
}

