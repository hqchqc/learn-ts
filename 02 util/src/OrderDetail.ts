export default class OrderDetail {
  // TS4之前
  // 没有初始化的值 也没有在构造函数中明确给这个赋值的一种解决方案
  // 增加undefiend类型就可以

  // TS4之后 
  // 可以使用 !  
  public orderDetailId: number | undefined
  public productname: string | undefined
  public price!: number
  public count!: number

  constructor(orderDetailId_: number, productname_: string, price_: number, count_: number) {
    // this.orderDetailId = orderDetailId_
    // this.productname = productname_
    // this.price = price_
    // this.count = count_
  }

  public getTotal(): number {
    return this.count * this.price
  }
}

