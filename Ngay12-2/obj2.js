function Diem(x,y) {
  this.x = x;
  this.y = y;
}

function DoanThang(diemA, diemB) {
  this.diemA = diemA;
  this.diemB = diemB;

  this.chieuDai = () => Math.sqrt(Math.pow(this.diemB.x-this.diemA.x,2) + Math.pow(this.diemB.y-this.diemA.y,2));
}
var a = new Diem(1,2);
var b = new Diem(4,6);
var ab = new DoanThang(a,b);
// console.log(ab.chieuDai());

function TamGiac(diemA,diemB,diemC) {
  this.diemA = diemA;
  this.diemB = diemB;
  this.diemC = diemC;
  // this.chieuDai = (diemA,diemB) => Math.sqrt(Math.pow(diemB.x-diemA.x,2) + Math.pow(diemB.y-diemA.y,2));
  // this.chuVi = ()=> this.chieuDai(diemA,diemB) +  this.chieuDai(diemA,diemC) +  this.chieuDai(diemB,diemC);
  this.chuVi = () =>{
    var ab = new DoanThang(this.diemA,this.diemB).chieuDai();
    var ac = new DoanThang(this.diemA,this.diemC).chieuDai();
    var bc = new DoanThang(this.diemB,this.diemC).chieuDai();
    return Math.round(ab+ac+bc);
  }
}

var a = new Diem(3,4);
var b = new Diem(5,9);
var c = new Diem(7,9);

var tg = new TamGiac(a,b,c);
console.log(tg.chuVi());
