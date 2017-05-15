const fs = require('fs');

// fs.readFile('./a.txt', 'utf-8' ,(e,d)=>{
//     if(e) return console.log(e + '');
//     console.log(d);
// });

const read = (filename) => (
    new Promise((resolve,reject)=>{
        fs.readFile('./a.txt', 'utf-8' ,(e,d)=>{
        if(e) return reject(e);
        resolve(d);
        });
    })
);


const write = (data,filename)=>(
    new Promise((resolve,reject)=>{
        fs.writeFile(filename, data, 'utf-8' , (err) => {
            if (err) return reject(err);
            resolve();
        });
    })
);

// read('./a.txt')
// .then(res=> write(res,'./b.txt'))
// .then(() => console.log('Thanh Cong'))
// .catch(err=> console.log(err+''));
const coppyFile = (fileSource, fileTarget) => (
    read(fileSource)
    .then(res=> write(res,fileTarget))
);

coppyFile('./a.txt','./b.txt').then(()=>console.log('Thanh Cong'));