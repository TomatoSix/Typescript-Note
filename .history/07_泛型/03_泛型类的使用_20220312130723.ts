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
export {}