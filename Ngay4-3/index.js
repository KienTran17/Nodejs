let express = require('express');
let app = express();
let queryDB = require('./db');
// let upload = multer({dest: 'upload/'});

let upload = require('./controller/func.js');
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'));

// app.get('/', (req,res) => res.render('home'));
app.post('/signup', (req,res) =>{
  upload(req,res,(err) =>{
    if(err) return res.send(err + '');
    console.log(req.body);
    res.send('Upload success!!!');
  });
});

app.get('/',(req,res)=>{
   queryDB('select * from "News"', (err, result) => {
     if(err) return res.send(err + '');
     res.send(result);

    });
});
