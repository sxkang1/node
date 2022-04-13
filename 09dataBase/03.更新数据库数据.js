// 引入数据库
const mysql = require('mysql')
// 连接数据库
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'my_db_01'
})
// 演示如何更新用户的信息
const user = {username:'xiaohei',password:'xiaohei123',id:1}
// 定义 更新的 sql 语句
// const sqlStr = 'update users set username=?,password=? where id=?'
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{

const sqlStr = 'update users set ? where id=?' // 定义更新的 便捷方式 
// 执行 sql 语句
db.query(sqlStr,[user,user.id],(err,results)=>{ // 定义更新的 便捷方式 
    if(err) return console.log(err.message);
    console.log('更新数据成功！');
})