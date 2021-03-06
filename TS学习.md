# 腾讯课堂学习知识点

# js 缺点

1. 没有对类型进行校验
2. 没有对是否传入参数进行校验
   只有等到运行时才会报错，会影响后续代码的执行

# 什么是 TS

TypeScript 是拥有类型的 JavaScript 超集，它可以编译成普通、干净、完整的 JavaScript 代码
TS 会被编译成 JS 代码

# TS 的编译环境

1. tsc: typescript compiler
   npm install typescript -g
   tsc --version
2. babel: plugin/preset

`tsc ts文件` 把 ts 转化成 js

# TS 运行环境

两种方法

1. webpack 搭建一个 ts 环境
2. ts-node 安装
   npm install ts-node
   npm install tslib @types/node
   如何使用 ts-node ts 文件

# 变量声明

eslint -> js 代码规范
tslint -> ts 代码规范

string TS 中的字符串类型
String JS 的字符串包装类的类型

- 如果没有添加类型注解，就会进行类型推导/推断
  类型推导：默认情况下进行赋值时，会将赋值的值得类型，作为前面标识符的类型

# 函数的重载

名称相同但是参数不同

```ts
// 函数类型声明
function add(a1: string, a2: string): string;
// 函数类型声明
function add(a1: number, a2: number): number;

// 函数类型实现
function add(a1: any, a2: any): any {
  return a1 + a2;
}
```

# 可选链 和 特殊操作符

```ts
type Imsg = {
  name: string;
  age: number;
  friend?: {
    name: string;
    age: number;
    girlfriend?: {
      name: string;
      age: number;
    };
  };
};

const msg: Imsg = {
  name: "six",
  age: 18,
  friend: {
    name: "560",
    age: 20,
  },
};

console.log(msg.friend?.name, msg.friend?.girlfriend, "1");
```

# 函数

```ts
// 定义参数为函数
function foo() {
  console.log("foo");
}
type fnType = () => void;
function bar(fn: fnType) {
  fn();
}
bar(foo);

// 定义箭头函数
type addType = (n1: number, n2: number) => number;
const add: addType = (a1: number, a2: number) => {
  return a1 + a2;
};

let res = add(1, 2);
console.log(res);

// 定义索引类型
type objType = {
  [index: number]: string;
};

const obj: objType = {
  0: "qkqq",
  1: "wazt",
  2: "nha",
};

// 接口定义函数类型
// 表示可调用接口
interface IAddType {
  (num1: number, num2: number): number;
}
var add: IAddType = (num1, num2) => {
  return num1 + num2;
};
```

# 接口的继承

```ts
interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

interface IAction extends ISwim, IFly {}

const action: IAction = {
  swimming() {},
  flying() {},
};
```
