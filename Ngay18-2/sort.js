let mang = [1,3,12,9,7,6];

let arr = mang.sort();
console.log(arr);

let arr2 = mang.sort(function(a,b){
  if(a > b) return 1;
  if(a < b) return -1;
  if(a == b) return 0;
});

console.log(arr2);
