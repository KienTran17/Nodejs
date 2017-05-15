var arr = [3,2,1];
var arr2 = new Array(1);

// length

// console.log(arr.length);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function(e,i){
// console.log('Xin chao: ' + e + ':' + i);
// });

arr.forEach((e,i)=>console.log('Xin chao: ' + e + ':' + i));

console.log(arr);

// Them cuoi
arr.push('Hello');

//Xoa cuoi
arr.pop();

// Xoa dau
arr.shift();
// Them dau
arr.unshift(1);

// Xoa phan tu bat ki trong mang - dong thoi tra ve phan tu da xoa
var remove = arr.splice(2,1);
console.log(remove);

//join
console.log(arr.join(' '));
