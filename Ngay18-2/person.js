function Person(name,age) {
  this.name = name;
  this.age = age;
  this.tinhTuoi = function(){
    this.age++;
  }
  this.hello = () =>{console.log("xin chao");}
}

let p1 = new Person('Tien', 20);
console.log(p1);
p1.tinhTuoi()
console.log(p1);
p1.hello();
