// 引入需要到的模块
const fs = require('fs')
const path = require('path')
// 定义正则匹配css js
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
// 读取要文件
fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', function (err, dataStr) {
    if (err) return console.log('读取文件失败', err.message);
    // 读取文件成功后，调用对应的方法，分别拆分 css js html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
// 处理css
function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    console.log(r1); // 返回数据 下标为0的就是匹配到的
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    console.log(newCSS); // 得到css样式
    // 写入文件
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
        if (err) return console.log('css文件写入失败！', err.message);
        console.log('css文件写入成功！');
    })
}
// 处理js
function resolveJS(htmlStr) {
    const r1 = regScript.exec(htmlStr)
    console.log(r1); // 返回数据 下标为0的就是匹配到的
    const newJS = r1[0].replace('<script>', '').replace('</script>', '')
    console.log(newJS); // 得到js
    // 写入文件
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('js文件写入失败！', err.message);
        console.log('js文件写入成功！');
    })
}
// 处理html
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace
        (regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
        if (err) return console.log('html文件写入失败', err.message);
        console.log('html文件写入成功！');
    })
}