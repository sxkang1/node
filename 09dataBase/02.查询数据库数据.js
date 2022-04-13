const mysql = require('mysql')

const db = mysql.createPool(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'admin123',
        database: 'my_db_01'
    }
)

const sqlSelect = 'select * from users'

db.query(sqlSelect, (err, results) => {
    if (err) return console.log(err.message);
    console.log(results);
})