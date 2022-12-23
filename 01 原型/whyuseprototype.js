function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQNo_ = QQNo_;
  this.QQAge_ = QQAge_;
  this.QQMark_ = QQMark_;

  this.commonfriends = ["a", "b", "c", "d"];
  this.show = function () {
    console.log(
      `QQ号: ${this.QQNo_},QQ龄${this.QQAge_},QQ标注: ${this.QQMark_}`
    );
    console.log(`共同的好友是: ${this.commonfriends}`);
  };
}

let QQZhangSan = new QQUser("张三", 15, "王阳明的传人");
let QQLisi = new QQUser("李四", 10, "袁隆平的徒弟");
let QQLiuwu = new QQUser("刘武", 12, "飞起来的鸭子");

QQZhangSan.show();
QQLisi.show();
QQLiuwu.show();
