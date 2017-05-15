class PhepTinh {
  constructor(pt,soA,soB) {
    this.pt = pt;
    this.soA = soA;
    this.soB = soB;
  }
  tinhToan(){
    let chuoi = `${parseInt(this.soA)} ${this.pt} ${parseInt(this.soB)}`
    var rs = eval(chuoi);
    return `${chuoi} = ${rs}`;
  }
}
module.exports = PhepTinh;
