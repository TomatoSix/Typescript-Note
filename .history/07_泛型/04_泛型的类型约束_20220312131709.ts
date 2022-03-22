// 泛型类型约束， 可以通过extends
interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  // 因为要求参数arg有length属性, 所以约束参数的类型为ILength
  return arg.length
}

getLength("abc")
getLength([1, 2, 3])

