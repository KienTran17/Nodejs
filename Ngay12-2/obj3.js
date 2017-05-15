function Person(ten,tuoi,soDu) {
  this.ten = ten;
  this.tuoi = tuoi;
  var soduTK = soDu;
  this.getTK = function () {
    return soduTK;
  }
  this.setTK = function (soduMoi) {
    soduTK = soduMoi;
  }
}

var ng = new Person('Tien',22,1000);
console.log(ng.getTK());
ng.setTK(1500);
console.log(ng.getTK());
