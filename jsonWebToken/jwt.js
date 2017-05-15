const jwt = require('jsonwebtoken');



const SECRET_KEY = "adfa5f6as8df";
// const token = jwt.sign({username: 'kientran'},SECRET_KEY,{expiresIn: 5},(err,token)=>{
//     console.log(token);
//     console.log(err + '');
// });

const verify = (token)=>(
    new Promise((resolve,reject)=>{
        jwt.verify(token,SECRET_KEY,(e,decoded)=>{
            if(e) return reject(e);
            return resolve(decoded);
        })
    })
);
const token = (input) =>(
    new Promise((resolve, reject)=>{
        jwt.sign(input,SECRET_KEY,{expiresIn: 3000},(e,r)=>{
            if(e) return reject(e);
            return resolve(r);
        });
    })
);

module.exports = {}
// const main = async () =>{
//     const atoken = await token({username:'kientran'});
//     const averify = await verify(atoken);
//     console.log(averify);
// }

// main();
// token({username:'kientran'})
// .then(r=>console.log(r))
// .catch(e=>console.log(e+''));
// verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtpZW50cmFuIiwiaWF0IjoxNDkxMDMwODM3LCJleHAiOjE0OTEwMzUwMDB9.zx2GEx0nQIR-wA60jJaJjaytD_eNMyEqLI_5PrsimxY')
// .then(r=>console.log(r));
//const veri
