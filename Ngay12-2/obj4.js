var person = {
  name: 'Khoa',
  age: 18,
  show: function (who) {
    console.log(this.name + ' chao ban ' + who);
  }
};

// var person = {
//   name: 'Khoa',
//   age: 18,
//   show: (who) =>
//     console.log(this.name + ' chao ban ' + who)
// }
person.show('Tien');
