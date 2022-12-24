// 计算面积
// 计算创建正方形对象 可以给构造器传递宽和高
// 也可以给构造器传递一个包含了宽和高的形状参数对象 这样需要用构造器重载

type type_ChartParam = {
  width?: number
  height?: number
  radius?: number
}
class Square {
  public width: number
  public height: number

  constructor(width_: number, height_: number)
  constructor(value: type_ChartParam)
  constructor(value: any, height: number = 10) {
    if (typeof value === 'object') {
      this.width = value.width
      this.height = value.height
    } else {
      this.width = value
      this.height = height
    }
  }

  public getArea(): number {
    return this.height * this.width
  }
}

let square = new Square(40, 50)
let chartParamObj: type_ChartParam = {
  width: 50,
  height: 20
}
let square2 = new Square(chartParamObj)
console.log('square.getArea()', square.getArea())
console.log('square.getArea()', square2.getArea())