interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim {

}

const action: IAction = {
  swimming() {

  },
  flying() {
    
  }
}