// setTimeout(function() {
//   console.log("HELLO");
// }, 500);
//
// var f = function(){
//   console.log("HELLO");
// }
// setTimeout(f,1000);//  tham so thu nhat la
//
// let a = 100;

// arrow function
var f = () => console.log('Chao')

 var sq = (num) => console.log("Binh phuong" + num*num);
  var sq1 = () => console.log("Binh phuong" + num*num);
   var sq2 = num => console.log("Binh phuong" + num*num);

   setTimeout(function(){
     sq2(10);
   },500);

var a = 10;
   function funcDemo(){
      a = 10;
   }

    console.log(a);
