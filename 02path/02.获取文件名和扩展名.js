const path = require('path')

const fpath = './a/b/c/index.html'

const name = path.basename(fpath)
console.log(name); // index.html

// 第二个参数，指定删除文件名后缀
const name2 = path.basename(fpath,'.html')
console.log(name2); // index

// 获取扩展名
const name3 = path.extname(fpath)
console.log(name3); // index