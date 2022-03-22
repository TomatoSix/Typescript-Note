// T表示任何类型
function func<T> (num1: T, nums2: T) {
  console.log(num1, nums2)
}

func<string>('1,34', '345')
