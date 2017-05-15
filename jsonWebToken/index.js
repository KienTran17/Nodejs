const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const parser = require('body-parser').urlencoded({ extended: false });


const SECRET_KEY = "adfa5f6as8df";

const verify = (token)=>(
    new Promise((resolve,reject)=>{
        jwt.verify(token,SECRET_KEY,(e,decoded)=>{
            if(e) return reject(e);
            return resolve(decoded);
        })
    })
);
const sign = (input) =>(
    new Promise((resolve, reject)=>{
        jwt.sign(input,SECRET_KEY,{expiresIn: 60},(e,r)=>{
            if(e) return reject(e);
            return resolve(r);
        });
    })
);
const app = express();

app.use(cookieParser());

app.listen('3000',()=>console.log('server started'));

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}

const u1 = new User('kien','kien');
const u2 = new User('tien','tien');
const u3 = new User('pho','pho');
const arrUser = [u1,u2,u3];

app.get('/private', (req,res)=>{
    const token = req.cookies.username;
    verify(token).then(r=>res.send('hello '+ r.username)).catch(e=>redirect('public'));
});

app.get('/public', (req,res)=>{
    res.send('public page');
});



app.get('/login',(req,res)=>{
    res.send(`<form action="/login" method="post">
      <input type="text" name="username" placeholder="Your name">
      <input type="password" name="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>`);
});

app.post('/login', parser, async (req,res)=>{
    const {username,password} = req.body;
    const isValid = arrUser.some(user=>{
        user.username === username && user.password === password;
    })
    if(isValid) res.send('Kiem tra lai thong tin dang nhap');
    const token = await sign({username});
    res.cookie('username',token);
    res.redirect('/private');
    // arrUser.forEach((e,i)=>{
    //      if(username === e.username && password === e.password)
            
    //     })
    // });
});

