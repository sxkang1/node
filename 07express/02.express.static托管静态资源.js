const express = require('express')

const app = express()
// 在这里 调用express.static() 方法，快速对外提供静态资源 托管多个 就再写个app.use(express.static()) 就可以 执行顺序由上而下
app.use('/abc',express.static('./clock')) // 在资源前面添加路径 /abc 俗称：挂载路径前缀

app.listen(8080, () => {
    console.log('express server runningat http://127.0.0.1:8080')
})
