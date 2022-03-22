// 联合类型
// function add(a1: string | number, a2: string | number) {
//   if (typeof a1 === 'number' && typeof a2 === 'number') {
//     return a1 + a2
//   } else if (typeof a1 === 'string' && typeof a2 === 'string') {
//     return a1+a2
//   }
// }

//  函数的重载: 函数名称相同但是参数不同
function add(a1: string, a2: string): string;

function add(a1: number, a2: number): number;

// 实现
function add(a1: any, a2: any): any {
  return a1 + a2
}

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