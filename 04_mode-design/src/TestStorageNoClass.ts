localStorage.setItem('count', '30')

let loginInfoObj = {
  username: 'lisi',
  age: 20
}

localStorage.setItem("loginUser", JSON.stringify(loginInfoObj))

// 问题1. 代码零散
// 问题2. 可读性差
// 问题3. 后期维护产生影响
// w
let value = localStorage.getItem('loginUser')
value ? JSON.parse(value) : null
// console.log('value.username', value.username)