let express = require('express');
let app = express();
app.use(express.static('public'));
// Gui du lieu dinh dang post
let parser = require('body-parser').urlencoded({extended: false});
// template engine ejs
app.set('view engine','ejs');
app.set('views','./views');
app.listen(3000,() => console.log('Server started'));
app.get('/',(req,res) => res.send('Hello'));


// app.post('/dangky', parser, (req,res) =>{
//   console.log(req.body);
//   res.send('Gui du lieu thanh cong');
// });
//--------Bai tap------------


app.get('/math',(req,res) => {
  res.render('home',{mang: ['android','node','iOS'], isAdmin: true});
})

app.post('/result', parser, require('./controller/xulyTinh.js'));
