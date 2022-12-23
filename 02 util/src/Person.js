var Person = /** @class */ (function () {
  function Person(name_, age_, phone_) {
    this.name = "noname";
    this.age = 0;
    this.phone = "11111";
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }

  Person.prototype.doEat = function (who, address) {
    console.log(
      ""
        .concat(this.name, "\u548C")
        .concat(who, "\u5403\u996D\uFF0C\u5728")
        .concat(address, "\u5403\u996D")
    );
  };
  return Person;
})();

var zhangSanPerson = new Person("王五", 12, "1232123");
zhangSanPerson.doEat("lisi", "ww");
console.log("zhangSanPerson", zhangSanPerson);
