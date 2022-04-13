/**
 * 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
 * 解决：可以提供一个完整的文件存放路径
*/
const fs = require('fs')

// fs.readFile('./file/1.txt','utf8',function(err,dataStr){  相对路径拼接错误

// 绝对路径可以解决 但是移植性比较差 不利于维护
// fs.readFile('F:\\project\\nodeJS\\fs\\file\\1.txt','utf8',function(err,dataStr){

//解决办法：使用__dirname
console.log(__dirname)
fs.readFile(__dirname + '/file/1.txt', 'utf8', function (err, dataStr) {
    if (err) return console.log('读取文件失败', err.message)
    console.log('读取文件成功')
})