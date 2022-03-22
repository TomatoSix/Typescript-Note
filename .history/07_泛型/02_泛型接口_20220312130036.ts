// 使用泛型接口
// 可以给默认类型
interface IPerson<T1 = string, T2 = number> {
  name: T1,
  age: T2
}

const p: IPerson<string, number> = {
  name: 'six',
  age: 18
}
