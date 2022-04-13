const path = require('path')
const fs = require("fs")

// 注意 ../ 会抵消上一级拼接路径  以后遇到拼接路径使用path.join

const newPath = path.join('a/', '/b/c', '../../', '/d', '/e')
console.log(newPath);

fs.readFile(path.join(__dirname,'./file/1.txt'),'utf8',function(err,dataStr){
    if(err) return console.log('读取文件失败',err.message);
    console.log('读取文件成功',dataStr);
})