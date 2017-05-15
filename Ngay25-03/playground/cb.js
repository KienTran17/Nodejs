// function add(a,b) {
//     return a+b;
// }
// const add = (a,b) =>a+b;
const add = (a,b,cb) =>{
    setTimeout(()=>{
        if(typeof a !=='number' || typeof b !== 'number'){
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined,a+b);
    },1000);
};

const mul = (a,b,cb) =>{
    setTimeout(()=>{
        if(typeof a !=='number' || typeof b !== 'number'){
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined,a*b);
    },1000);
};

const div = (a,b,cb) =>{
    setTimeout(()=>{
        if(typeof a !=='number' || typeof b !== 'number'){
            return cb(new Error('Tham so phai co kieu number'));
        }
        if(b === 0 ) return cb(new Error('Chia cho 0'));
        cb(undefined,a/b);
    },1000);
};

const getSquare = (a,b,h,cb)=>{
        add(a,b,(e,r)=>{
            if(e) return cb(e);
            mul(r,h,(errMul, resultMul)=>{
                if(errMul) return cb(errMul);
                div(resultMul,2,(errDiv,resultDiv)=>{
                    if(errDiv) return cb(errDiv);
                    cb(undefined,resultDiv);
                });
            });
        });
};

getSquare(3,2,4,(e,r)=>{
    if(e) return console.log(''+e);
    console.log(r);
})