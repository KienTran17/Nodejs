class Diem {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class DoanThang {
  constructor(diemA,diemB) {
    this.diemA = diemA;
    this.diemB = diemB;
  }
  chieuDai(){
    return Math.sqrt(Math.pow(this.diemB.x-this.diemA.x,2) + Math.pow(this.diemB.y-this.diemA.y,2));
  }
}


class TamGiac {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  chuVi(){
    // var ab = new DoanThang(this.diemA,this.diemB).chieuDai();
    // var ac = new DoanThang(this.diemA,this.diemC).chieuDai();
    // var bc = new DoanThang(this.diemB,this.diemC).chieuDai();
    // return Math.round(ab+ac+bc);
    function tinhChieuDai(){
      //code here
    }

  }
}

var a = new Diem(3,4);
var b = new Diem(5,9);
var c = new Diem(7,9);

var tg = new TamGiac(a,b,c);
console.log(tg.chuVi());
