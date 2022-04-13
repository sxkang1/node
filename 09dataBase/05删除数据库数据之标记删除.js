/**
 * 开发过程中不建议使用delete语句直接删除
 * 为了保险起见，推荐使用‘标记删除’的形式，来模拟删除的动作
 * 所谓的标记删除就是设置类似status这样的状态字段，来标记这条数据是否被删除
 * 当用户执行了删除的动作时，我们并没有执行delete语句把数据删除掉，而是执行了update语句，将
 * 这条数据的status字段标记为删除即可
*/
const { strictEqual } = require('assert')
const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// 标记删除 将id为1的 status设置成1  
const sqlStr = 'update users set status=1 where id=? '

db.query(sqlStr, [1], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) return console.log('标记删除成功！');
})