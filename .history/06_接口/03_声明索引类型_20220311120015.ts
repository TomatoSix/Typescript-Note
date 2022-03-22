// 声明索引类型

import { Interface } from "readline"

interface IIndexType {
  [age: string]: string
}

const infoObj: IIndexType = {
  0: 'six',
  1: '560',
  2: "jisoo",
  "age": "12"
}

interface ILanYear {
  [name: string] : number
}

const lanYear = {
  "c": 1972,
  "Java": 1995,
  "JS": 1996,
  "TS": 2014,
  
}