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
// 表示两个接口都必须同时满足
type MyType1 = ISwim & IFly
// 表示两个接口满足其中一种即可
type MyType2 = ISwim | IFly

export {

}
