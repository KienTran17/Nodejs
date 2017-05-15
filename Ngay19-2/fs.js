let fs = require('fs');
//doc file bang dia chi tuyet doi
// fs.readFile(__dirname + '/a.txt','utf8', (err,result)=>{
//   if(err) return console.log(err);
//   console.log(result);
// });
// arrow function
// fs.readFile('./a.txt','utf8', (err,result)=>{
//   if(err) return console.log(err);
//   console.log(result);
// });

// Show loi tren 1 dong
// fs.readFile('../a.txt','utf8', (err,result)=>{
//   if(err) return console.log(err.toString());
//   console.log(result);
// });

// fs.appendFile('./a.txt', 'NodeJS ReactJS', err =>{
//   if(err) return console.log(err + 'fail.');
//   console.log('Success!');
// });
fs.readFile('./a.tx', err =>{
  if(err) throw err;
  console.log('Success!');
});
