// 通过类型(type) 别名来声明对象类型

// type IInfoType = {name: string, age: number}

// 通过接口interface声明对象类型

interface IInfoType {
  name: string,
  // ?表示可选，对象声明时该属性可写或不写
  age?: number
}

const info: IInfoType = {
  name: 'six',
  // age: 18
}