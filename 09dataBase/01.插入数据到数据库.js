const mysql = require('mysql')

const db = mysql.createPool({ // 创建连接数据库连接
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// 插入一条数据
const user = { username: 'qiaqia', password: 'qiaqia123' }

// const sqlInsert = 'insert into users (username,password) values(?,?)' // ? 表示占位符
// db.query(sqlInsert, [user.usernaem,user.password], (err, results) => {// 数组为占位符 set值；

const sqlInsert = 'insert into users set ?' // 便捷插入方式，不管插入多少数据  set ? 直接搞定
db.query(sqlInsert, user, (err, results) => { // 给占位符set数据
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) return console.log('插入数据成功');
})

