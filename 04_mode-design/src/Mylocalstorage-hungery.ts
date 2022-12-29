// 构建饿汉式单件设计模式

export default class MyLocalStorage {
  static localstorage: MyLocalStorage = new MyLocalStorage();
  private static count: number = 0

  private constructor() {
    console.log('调用了一次')
  }

  // 提供一个外部访问的方法
  // 通过这个方法来提供外部得到一个对象的方法

  // 1. 带static关键字的方法就是一个静态方法
  // 2. 静态方法和对象无关 外部的对象变量不能调用静态方法和静态属性
  // 3. 
  public static getInstance() {
    // 使用局部变量 不行 任然调用两次
    // let localstorage
    // if (!localstorage) {
    //   localstorage = new MyLocalStorage()
    // }

    // 静态的方法不可以访问实例属性或实例方法 只能访问静态的属性或方法
    if (!this.localstorage) {
      this.localstorage = new MyLocalStorage()
    }

    return this.localstorage
  }

  // 保存 key-value
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public getItem(key: string) {
    let value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  public static addCount() {
    this.count += 3
  }

  public static getCount() {
    return this.count
  }
}

MyLocalStorage.addCount()
console.log('MyLocalStorage.getCount()', MyLocalStorage.getCount())