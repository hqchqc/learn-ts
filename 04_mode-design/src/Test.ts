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

// 静态成员存储在内存的静态区，静态成员的内存空间分配的时间要早于对象空间的分配，也就是任何一个对象
// 创建之前TS就已经为静态成员分配好了空间。但一个静态方法只会分配一个空间

// 总结
// 1. 无论你是否创建对象，创建多少个对象，是否调用该静态方法或静态属性 ts都会为这个静态方法或静态属性分配内存空间 注意静态成员和对象 无关
// 2. 一旦为静态方法或静态属性分配好空间，就一直保存到内存中，直到服务器重启或者控制台程序执行结束才被释放。