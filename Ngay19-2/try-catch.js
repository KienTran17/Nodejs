let getAnErr = () =>{
  throw new Error('Loi nhap lieu');
}

try {
  getAnErr();
} catch (e) {
  console.log(e);
}finally {
  console.log('Done!');
}
