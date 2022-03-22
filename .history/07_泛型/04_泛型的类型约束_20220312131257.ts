interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: string | any[]) {
  return arg.length
}

