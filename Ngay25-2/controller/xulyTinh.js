
let pt = require('./pheptinh.js');
let xulyTinh = (req,res) =>{
  let {soA,pheptinh,soB} = req.body;
  let rs = new pt(pheptinh,soA,soB);
  res.send(rs.tinhToan());
}

module.exports = xulyTinh;
