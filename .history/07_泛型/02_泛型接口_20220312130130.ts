// 使用泛型接口
interface IAnimal<T1, T2> {
  name: T1,
  age: T2
}
// 可以给默认类型
interface IPerson<T1 = string, T2 = number> {
  name: T1,
  age: T2
}

const p: IPerson = {
  name: 'six',
  age: 18
}
