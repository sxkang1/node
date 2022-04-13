const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// 删除id为35的数据 注意：写删除语句一定要写 where 子句
const sqlDelete = 'delete from users where id=? '
// 给删除语句占位符赋值的时候 只有一个占位符的 可以直接写值 等价于[35] 
db.query(sqlDelete, 35, (err, results) => {
    if (err) return console.log(err.message);
    // 注意：执行delete 语句之后，返回结果也是一个对象，也会有affectedRows 属性
    if (results.affectedRows === 1) return console.log('删除数据成功！');

})