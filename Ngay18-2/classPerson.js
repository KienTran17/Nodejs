class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  xinChao(){
    console.log("Xin chao minh ten la " + this.name + " nam nay minh " + this.age + " tuoi.");
  }
  addAge(){
    this.age++;
  }
}

let p1 = new Person('Tien' ,21);

console.log(p1);
p1.xinChao();
p1.addAge();
console.log(p1);

// them thuoc tinh moi
p1.salary = 1000;
console.log(p1);

// them phuong thuc moi

p1.showSalary = function(){
  console.log('Tien luong: '+ this.salary);
}
// khong su dung duoc arrow function trong truong hop nay vi scope khac
// p1.showSalary = () => {console.log('Tien luong: '+ this.salary);};
p1.showSalary();

// them thuoc tinh hoac phuong thuc
Person.prototype.showInfo = function () {
  console.log('Ten ' + this.name + ' tuoi ' + this.age);
};
p1.showInfo();
