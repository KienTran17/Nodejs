let pg = require('pg');

let config = {
  user: 'postgres', //env var: PGUSER
 database: 'NODE1102', //env var: PGDATABASE
 password: '123456', //env var: PGPASSWORD
 host: 'localhost', // Server hosting the postgres database
 port: 5432, //env var: PGPORT
 max: 10, // max number of clients in the pool
 idleTimeoutMillis: 1000 // how long a client is allowed to remain idle before being closed
};

let pool = new pg.Pool(config);

//dùng cb function 2 tham số (err, result) để kiểm tra lỗi khi require sử dụng ở file khác
function queryDB(sql,cb) {
    pool.connect((err,client,done) =>{
    if(err) return cb(err + '',undefined);//ko có undefined cũng được
    client.query(sql, (err,result) =>{
      done(err);
      if(err)      
        return cb(err + '',undefined);
      cb(undefined, result.rows);
    });
  });
}

// queryDB('SELECT * FROM "News"', result=>console.log(result));
module.exports = queryDB;
// pool.connect((err,client,done) =>{
//   if(err) return console.log(err + '');
//   client.query('SELECT * FROM "News"', (err,result) =>{
//     done(err);
//     if(err){
//       return console.error('error running query', err);
//     }
//     console.log(result.rows);
//   });
// });
