
const add = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham so phai co kieu number'));
            }
            resolve(a + b);
        }, 1000);
    })
);

const mul = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham so phai co kieu number'));
            }
            resolve(a * b);
        }, 1000);
    })
);

const div = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham so phai co kieu number'));
            }
            resolve(a / b);
        }, 1000);
    })
);

const getSquare = (a, b, h) => (
    add(a, b)
    .then(resultAdd => mul(resultAdd, h))
    .then(resultMul => div(resultMul, 2))
    // .then(square => square);
);
getSquare(5, 5, 5).then(res => console.log(res));
