/**
 * 1.导入 fs 文件系统模块
 * 2.调用fs.writeFile() 方法，写入文件的内容
 *      参数1：表示文件的存入路径
 *      参数2：表示要写入的文件内容
 *      参数3：表示编码格式，默认utf8
 *      参数4：回调函数
*/
const fs = require('fs')

fs.writeFile('./file/1.txt', 'abc', 'utf8', function (err) {
    /**
     * 1.如果文件写入成功，则err的值为null
     * 2.如果文件写入失败，则err的值等于一个错误对象
    */
    // 判断文件写入成功还是失败
    if (err) {
        return console.log('文件写入失败', err.message)
    }
    console.log('文件写入成功')

})