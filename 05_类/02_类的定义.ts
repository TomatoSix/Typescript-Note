// 类的编程
// class Person {
//   name: string
//   age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }

//   eating() {
//     console.log(this.name + "想吃草莓");
//   }
// }

// const p = new Person("番茄炒小六", 18)
// p.eating()

// 类的继承

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + "想吃草莓");
  }
}

class Student {
  name: string = ""
  age: number = 0
  sno: number = 0

  eating() {
    console.log("eating");
    
  }

  studying() {
    console.log("studying"); 
  }
}

class Teacher {
  name: string = ""
  age: number = 0
  title: string = ""
}
// type infoType = {
//   name: string, 
//   age: number
// }

interface infoType  {
  name: string, 
  age: number
}

const info: infoType = {
  name: 'tomatosix',
  age: 18
}

// 可选链的使用
type Imsg = {
  name: string
  age: number
  friend?: {
    name: string
    age: number
    girlfriend?: {
      name: string
      age: number
    }
  }
}

const msg: Imsg = {
  name: 'six',
  age: 18,
  friend: {
    name: '560',
    age: 20
    
  }
}

console.log(msg.friend?.name, msg.friend?.girlfriend, '1');
