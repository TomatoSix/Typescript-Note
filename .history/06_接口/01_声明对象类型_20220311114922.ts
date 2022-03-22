// 通过类型(type) 别名来声明对象类型

// type IInfoType = {name: string, age: number}

// 通过接口interface声明对象类型

interface IInfoType {
  name: string,
  // ?表示可选，
  age?: number
}

const info: IInfoType = {
  name: 'six',
  // age: 18
}