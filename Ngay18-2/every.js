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
let p3 = new Person('Kien', 23,290);

let mang = [p1,p2,p3];
// function nay neu co 1 phan tu khong thoa man dieu kien thi no khong thoa man
let biger = mang.every(function(e,i){
  return e.salary > 80;
});

let big = mang.every((e)=>{
  return e.salary > 80;
});
console.log(big);
