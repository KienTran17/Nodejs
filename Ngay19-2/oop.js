class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log('Hello, I am ' + this.name);
  }
}

let p1 = new Person('Pho', 18);
// console.log(p1);
// p1.greet()

class Children extends Person {
  constructor(name, age, hobby){
    super(name, age);
    this.hobby = hobby;
  }
  addAge(){
    this.age++;
  }
  greet(){
    console.log('Hi, I am ' + this.name);
  }
}

// let c1 = new Children('Bin', 4);
// // console.log(c1);
// c1.greet();
// c1.addAge();
// console.log(c1);

let c2 = new Children('Bi', 5, 'Auto');
console.log(c2);
