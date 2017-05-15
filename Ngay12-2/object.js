//Khai bao doi tuong
var nhanVien = {name: 'Khoa', age: 18};
// console.log(nhanVien);
// console.log(nhanVien.name);

// class va function deu co the tao ra lop doi tuong

// function
function NhanVien(name,age){
  //Thuoc tinh doi tuong
  this.ten = name;
  this.tuoi = age;
  //Phuong thuc doi tuong
  this.xinChao = function(){
    console.log('Xin chao, ten toi la: ' + this.ten);
  }
}

// var Tien = new NhanVien('Tien',20);
// console.log(Tien);
// console.log(Tien.ten);
// console.log(Tien.tuoi);
// Tien.xinChao();

//---------------------------------------------
function TamGiac(a,b,c){
  this.canhA = a;
  this.canhB = b;
  this.canhC = c;

  this.chuVi = () => this.canhA + this.canhB + this.canhC;

  this.dienTich = () => Math.round(Math.sqrt(this.chuVi()/2*(this.chuVi()/2*this.canhA)*(this.chuVi()/2*this.canhB)*(this.chuVi()/2*this.canhC)));
}
var tg = new TamGiac(3,4,5);

// console.log(tg.chuVi());
//
// console.log(tg.dienTich());

//-----------------------------

function DoanThang(x1,x2,y1,y2){
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;

  this.chieuDai = () => Math.sqrt(Math.pow(this.x2-this.x1,2) + Math.pow(this.y2-this.y1,2));
}

var dt = new DoanThang(3,6,4,8);
// console.log(dt.chieuDai());


function Person(name, age){
  this.name = name;
  this.age = age;

  this.newAge = () => this.age++;
}

var nguoi = new Person('Tien',20);
console.log(nguoi.age);
nguoi.newAge()
console.log(nguoi.age);
