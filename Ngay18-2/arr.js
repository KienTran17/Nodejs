function Person(name, age) {
  this.name = name;
  this.age = age;
  this.addAge = function(){
    this.age++
  }
  this.hello = function() {
    console.log('Chao ban minh la:' + this.name + ' ' + this.age + ' tuoi.');
  }
}

let p1 = new Person('Tien', 21);
let p2 = new Person('Tuan', 22);
let p3 = new Person('Kien', 23);

let mang = [p1,p2,p3];

// Cach 1
// mang.forEach(function(e,i){
//   e.hello();
// });
let ham =  function(e,i){
  e.hello();
}

let ham1 = (e,i)=>{
  e.hello();
}
mang.forEach(ham1);
