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

let p1 = new Person('Tien', 21,90);
let p2 = new Person('Tuan', 22,190);
let p3 = new Person('Kien', 20,290);

let mang = [p1,p2,p3];

let arr = mang.sort((a,b)=> {
return a.age - b.age;
});
console.log(mang);
