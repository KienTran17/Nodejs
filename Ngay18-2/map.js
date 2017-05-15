let mang = [2,9,7,9,3,5,8];

let arr = mang.map(function (e,i) {
  return e * 2;
});
arr.sort((a,b) => a-b);
console.log(arr);
