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

}

class Fish extends Animal implements IEat, ISwim {
  swimming() {

  }

  eating() {

  }


}

// 编写一些公共的API: 可以面向接口编程