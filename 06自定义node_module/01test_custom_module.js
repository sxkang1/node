const d = require('./custom_node_modules') // 引入自己写的 包
const str = d.dateFormat(new Date())

const b = '<h1 style="abc">123 </h1>'
const t = '&lt;h1 style=&quot;abc&quot;&gt;123 &lt;/h1&gt;'

console.log('测试自定义包333--', str); //格式化时间

console.log('html标签转义---', d.html2Escape(b)); //普通字符转换成转义符
console.log('html标签转义---', d.escape2Html(t)); //转义符转换成普通字符