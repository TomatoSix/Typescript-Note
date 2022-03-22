// T表示任何类型

// 平时开发中常用的名称
// T： Type的缩写
// K, V: key和value的缩写
// E：Element的缩写
// O：Object的缩写
interface IType {
  name: string,
  age: number
}

function func<T> (num1: T, num2: T) {
  console.log(num1, num2)
}

func<string>('1,34', '345')
func<number>(1, 2)
func<IType>({name: "six", age:18}, {name: '560', age: 30})