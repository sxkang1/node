/**
 * 核心实现步骤：
 *  1.导入需要的fs文件系统模块
 *  2.使用readFile()方法，读取素材目录下的成绩.txt文件
 *  3.判断文件是否读取失败
 *  4.文件读取成功后，处理数据,
 *     按照空格使用split进行分割得到数据，
 *     replace进行替换操作，‘=’替换‘：’,
 *     使用join(\r\n)换行得到新的字符转
 *  5.将处理完的数据，调用fs.writeFile(),写入到新的文件 成绩-ok.txt
 * 
*/
const { Console } = require('console')
const fs = require('fs')
fs.readFile('./file/成绩.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败', err.message)
    }
    console.log(dataStr)
    // 把得到的成绩数据， 使用split按照空格进行分割 ，得到一个数组
    const arrOld = dataStr.split(' ')
    console.log(arrOld)

    // 循环分割后的数组，对每一项数据，进行字符串替换操作 使用replace把‘=’更改成‘：’
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    console.log(arrNew)
    // 把新数组中的每一项，进行合并，得到一个新的字符串 使用join换行操作
    const newStr = arrNew.join('\r\n')
    console.log(newStr)
    // 把处理完的数据，写入到新的文件
    fs.writeFile('./file/成绩-ok.txt',newStr,'utf8',function(err){
        if(err){
            return console.log('文件写入失败',err.message)
        }
        console.log('文件写入成功')
    })
})