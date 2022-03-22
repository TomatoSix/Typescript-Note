// 联合类型， 必须有很多if判断类型, 否则会报错
// function add(a1: string | number, a2: string | number) {
//   if (typeof a1 === 'number' && typeof a2 === 'number') {
//     return a1 + a2
//   } else if (typeof a1 === 'string' && typeof a2 === 'string') {
//     return a1+a2
//   }
// }

//  函数的重载: 函数名称相同但是参数不同
function add(a1: string, a2: string): string;  // 没函数体
function add(a1: number, a2: number): number;  // 没函数体

// 重载函数具体的实现， 参数的类型要更加宽泛， 可以用any
function add(a1: any, a2: any): any {
  return a1 + a2
}
add(20, 30)
add('你', '好')

// 联合类型
function getLen(args: string | any[]) {
  return args.length
}

// 函数的重载
function getLen2(args: string): void;

function getLen2(args: any[]): void;

function getLen2(args: any) {
  console.log(args.length);
}

getLen2('123')


export {}




export {}