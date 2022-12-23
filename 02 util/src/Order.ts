import OrderDetail from "./OrderDetail";

class Order {
  // 如果构造函数中已经赋值了这里就不用赋值了
  // public orderId: number;
  // public date: Date;
  // public custname: string;
  // public phone: string;
  // // public orderDetail:OrderDetail[] = []
  // public orderDetail: Array<OrderDetail>

  constructor(public orderId: number, public date: Date, public custname: string, public phone: string, public orderDetail: Array<OrderDetail>) {
    // this.orderId = orderId_
    // this.date = date_
    // this.custname = custname_
    // this.phone = phone_
    // this.orderDetail = orderDetail_
  }
}

let orderDetailOne = new OrderDetail(10, '电视机', 5000, 3)
let orderDetailTwo = new OrderDetail(11, '桌子', 2000, 2)

// let orderDetailArray: Array<OrderDetail> = [orderDetailOne, orderDetailTwo]

let orderDate = new Date(2023, 10, 17, 5, 20, 0)
// let order = new Order(1, orderDate, "李武", '333', orderDetailArray);

let order = new Order(1, orderDate, "李武", '333', [orderDetailOne, orderDetailTwo]);
console.log('order', order)