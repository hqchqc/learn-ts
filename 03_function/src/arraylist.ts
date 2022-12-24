// 1. 对现有的数组进行封装 让数组增删改查变得更加好用
// 2. 提供get方法 remove方法 显示方法(add方法)
//    其中需求中的remove方法有两个 我们用方法重载来实现

type Ele = {
  stuname: string
  age: number
}

class ArrayList {
  // 1. 定义一个引用属性
  constructor(public element: Array<object>) {

  }

  // 2. 根据索引来查询数组中指定元素
  get(index: number) {
    return this.element[index]
  }

  // 3. 显示方法
  show() {
    this.element.forEach(ele => {
      console.log(ele)
    })
  }

  // 4. 删除方法 
  remove(value: number): number
  remove(value: object): object
  remove(value: number | object): number | object | undefined {
    this.element = this.element.filter((item, index) => {
      if (typeof value === 'number') {
        return value !== index
      } else {
        return value !== item
      }
    })
    return value;
  }

}

let stuOne = {
  stuname: 'wangwu',
  age: 23
}
let stuTwo = {
  stuname: 'lisi',
  age: 39
}
let stuThrere = {
  stuname: 'liuqi',
  age: 20
}

const arr = new ArrayList([stuOne, stuTwo, stuThrere])
arr.show()
console.log('arr.remove(0)', arr.remove(0))
arr.show()
console.log('arr.remove(0)', arr.remove(stuTwo))
arr.show()