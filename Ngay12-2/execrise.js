function addtoIndex(array, index, value){
  var remove = array.splice(index,array.length-index);
  array.push(value);
  remove.forEach((e,i)=>array.push(e));
}
var arr = [2,3,4,5,6,7,8];
console.log(arr);
// addtoIndex(arr,3,9);
arr.splice(2,0,5);//Them vao tai phan tu bat ky voi 3 tham so
console.log(arr);
