let multer = require('multer');
let storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null,'./public');
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname);
    console.log(file);
  }
});
function fileFilter(req, file, cb) {
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
    return cb(null,true);
  }
  cb(new Error('Sai dinh dang file'));
}
let upload = multer({
   storage,
   limits: {fileSize: 10000 * 1024},
   fileFilter
 }).single('avatar');

 module.exports = upload;
