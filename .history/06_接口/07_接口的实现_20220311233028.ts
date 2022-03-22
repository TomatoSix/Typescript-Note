// 正常使用
interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

const a: ISwim = {
  swimming() {

  }
}

// 类实现接口
class Animal {
  speak() {
    
  }
}

class Fish extends Animal implements IEat, ISwim {
  swimming() {

  }

  eating() {

  }
}