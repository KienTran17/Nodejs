// Arrow function day du
var f = (name, message)=>{
  console.log("Xin chao " + name +". Minh ten la: " + message);
}

// Than ham chi co mot lenh duy nhat
var fsimple = (name, message)=> console.log("Xin chao " + name +". Minh ten la: " + message);

// Co the bo dau cham phay cuoi cung
var fsimplenobreak = (name, message)=> console.log("Xin chao " + name +". Minh ten la: " + message)

// Mot doi so co the bo cap ngoat don ()
var fsimplearr = name => console.log("Xin chao " + name)

// Khong co tham so thi dung cap ngoac rong ()
var fsimpleno = () => console.log("Xin chao ")

// function binh thuong
function func(name,  message){
  console.log("Xin chao " + name +". Minh ten la: " + message);
}

f("My","Tien");

fsimple("My","Tien");

fsimplenobreak("My","Tien");

fsimplearr("My");

fsimpleno();

func("My","Tien");
