class Point<T> {
  x: T
  y: T
  z: T

  constructor(x:T, y:T, z:T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

// 这里会默认推导类型
const p1 = new Point("six", "1.88", "18")
const p2 = new Point<number>(1, 2,3)
const p3: Point<number> = new Point(1, 2, 3)

const name1: string[] = ['a', 'b', 'c']
// 以下和泛型类的使用相同，但不推荐
const name2: Array<string> = ['1', '2', '3']
export {}