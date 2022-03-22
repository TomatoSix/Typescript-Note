// 声明索引类型

import { Interface } from "readline"

interface IIndexType {
  [index: number]: string
}

const infoObj: IIndexType = {
  0: 'six',
  1: '560',
  2: "jisoo",

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