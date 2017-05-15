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

const getSquare = async (a, b, h) => {
    try {
        const total = await add(a, b);
        const multi = await mul(total, h);
        const square = await div(multi, 2);
        return Promise.resolve(square);
    } catch (e) {
        return Promise.reject(e);
    }
};
getSquare(5, 5, 5)
    .then(r => console.log(r));
    
