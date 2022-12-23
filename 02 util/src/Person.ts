class Person {
  // typescript4.0以后要赋初始值
  // public name: string | undefined
  // 类上定于i的属性一定是描绘这个类本身特征的变量
  public name: string = 'noname'
  public age: number = 0
  public phone: string = '11111'
  // public address: string[] = ['北京海淀区西三环', 'dd', '海甸岛']
  // public addressArray: Array<string> = ['北京海淀区西三环', 'dd', '海甸岛']
  // public resolve: () => void = () => { }

  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_
    this.age = age_
    this.phone = phone_
  }

  // function 错误 类中定义方法不能使用function
  // public doEat(): number {
  //   return 3
  // }

  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}吃饭，在${address}吃饭`)
  }
}


// let zhangSanPerson = new Person()
// 给对象赋值
// 1. 通过类中的属性或方法进行赋值
// zhangSanPerson.name = 'wangwu'
// zhangSanPerson.age = 18

// 2. 通过构造函数的[构造器]来赋值
// 创建对象一共做了三件事
// 1. 在堆中为类的某个对象[实例]分配一个空间
// 2. 调用对应的构造函数[构造器] 自动匹配无参数的构造器
// 3. 把对象赋值给对象变量
let zhangSanPerson = new Person('王五', 12, '1232123')
zhangSanPerson.doEat('lisi', 'ww')
console.log('zhangSanPerson', zhangSanPerson)
