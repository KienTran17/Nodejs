const fs = require('fs');
const request = require('then-request');

// const write = (data, filename) => (
//     new Promise((resolve, reject) => {
//         fs.writeFile(filename, data, 'utf-8', (err) => {
//             if (err) return reject(err);
//             resolve();
//         });
//     })
// );

// request('GET', 'http://vtimes.com.au/tu-vi-phuong-dong-thu-sau-24-03-2017-2591684.html')
// .then(res => write(res.getBody(), 'b.txt'))
// .catch(err => console.log(`${err}`));

const data  = require('./b');

class Tin {
    constructor(date,canchi,desc){
        this.date = date;
        this.canchi = canchi;
        this.desc = desc;
    }
}
function getDate(data){
    d = data.search("<title>");
    c =  data.search("</title>");
    da = data.substring(d,c);
    v = da.search("(");
}
searchDau = data.search(`<ol class="comment disqus"`);
searchCuoi = data.search(`Article sourced from Fengshuiexpress`);
duLieu = data.substring(searchDau,searchCuoi);

tuoi = duLieu.split('<p><strong>');
console.log(tuoi);
