function Person(name, age,salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.addAge = function(){
    this.age++
  }
  this.hello = function() {
    console.log('Chao ban minh la:' + this.name + ' ' + this.age + ' tuoi.');
  }
}

let p1 = new Person('Tien', 21,70);
let p2 = new Person('Tuan', 22,90);
let p3 = new Person('Kien', 23,290);

let mang = [p1,p2,p3];
// tra ve doi tuong

let s90 = mang.find(e =>e.salary == 90);
console.log(s90);
