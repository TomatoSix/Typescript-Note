// 联合类型

type WhyType = number | string
type Direction = "left" | "right" | "center"

// 交叉类型
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim & IFly
type MyType2 = ISwim | IFly

export {

}
