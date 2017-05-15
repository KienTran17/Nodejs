let express = require('express');
let app = express();
app.listen(3000);

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

let handle = (req,res) =>{
  let soA = req.params.soA;
  let pt = req.params.pt;
  let soB = req.params.soB;
  let kq = new PhepTinh(pt,soA,soB);
  let result = kq.tinhToan();

  res.send(result);
}
app.get('/pheptinh/:soA/:pt/:soB/', handle);
