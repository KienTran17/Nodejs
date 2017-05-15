class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  hello(){
    console.log('Xin chao');
  }
}

let p1 = new Person('Tien',21);

// Alias
// let newObj = p1;
// copy object
let newO = Object.assign({},p1);
p1.name = 'SAA';
// console.log(newO);

//JSON chi tra ve thuoc tinh khong tra ve phuong thuc
console.log(JSON.stringify(p1));
