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
let p2 = new Person('Tuan', 22,190);
let p3 = new Person('Kien', 23,290);

let mang = [p1,p2,p3];
// function nay chi can co 1 phan tu  thoa man dieu kien thi no thoa man
let biger = mang.some(function(e,i){
  return e.salary > 80;
});

let big = mang.some((e)=>
   e.salary < 80;
);
console.log(big);
