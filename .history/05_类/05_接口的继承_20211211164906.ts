interface ISwim {
  swimming: () => void
}

interface IFlying {
  flying: () => void
}


class Animal {

}

class Fish extends Animal implements ISwim, IFlying {
  swimming() {}
  flying() {}
}
