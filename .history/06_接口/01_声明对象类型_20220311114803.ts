// 通过类型(type) 别名来声明对象类型

// type InfoType = {name: string, age: number}

// 通过接口interface声明对象类型

interface InfoType {
  name: string,
  age: number
}

const info: InfoType = {
  name: 'six',
  age: 18
}