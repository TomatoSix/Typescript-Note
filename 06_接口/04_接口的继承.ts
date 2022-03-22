// 接口的继承
// 支持多继承

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {
  },
  flying() {
  }
}


export {}