import MyLocalStorage from "./Mylocalstorage";

// const myLocalStorage = new MyLocalStorage()
// myLocalStorage.setItem('loginUser', {
//   username: 'lisi',
//   age: 21
// })

MyLocalStorage.getInstance()
MyLocalStorage.getInstance()

// 1. 这里的MyLocalStorage只能访问到静态的属性或者方法 要注意和 new Myxx 那种方式的区分
// 2. 使用new方式创建出来的对象也是不能访问到静态成员

console.log('MyLocalStorage.getCount()1', MyLocalStorage.getCount())
MyLocalStorage.addCount()
console.log('MyLocalStorage.getCount()2', MyLocalStorage.getCount())
MyLocalStorage.addCount()
console.log('MyLocalStorage.getCount()3', MyLocalStorage.getCount())
