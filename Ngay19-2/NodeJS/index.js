// create server
let express = require('express');
let app = express();
app.listen(3000);
//-------------

let handle = (request,response) =>{
  response.send('Hello')
};
app.get('/',handle);


let admin = (request,response) =>{
  response.send('Hello admin')
};
app.get('/admin',admin);


let show = (request,response) =>{
  let myID = request.params.id;
  response.send('Toi nhan duoc id ' +myID);
};
app.get('/show/:id',show);

//  Dat o cuoi de hien thi nhung route khong ton tai
app.get('*',(req,res)=>{
  res.send('Khong ton tai');
});
