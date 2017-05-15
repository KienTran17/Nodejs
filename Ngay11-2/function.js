function add(a,b) {
  return a + b;
}


var b = add;
console.log(b(2,3));


function getF(bool){
  if(bool){
    return function(){
      console.log("TRUE");
    }
  }else {
    return function () {
      console.log("FALSE");
    }
  }
}

// CACH 1
var f = getF(true); f();

// CACH 2
getF(true)();
