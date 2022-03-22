// T表示任何类型
function func<T> (num1: T, num2: T) {
  console.log(num1, num2)
}

func<string>('1,34', '345')
func<number>(1, "1")
