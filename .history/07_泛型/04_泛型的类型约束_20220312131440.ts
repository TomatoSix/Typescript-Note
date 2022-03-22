interface ILength {
  length: number
}

function getLength<ILength>(arg: ILength) {
  // 因为要求参数arg有length属性, 所以约束参数的类型为ILength
  return arg.length
}

getLength("abc")

