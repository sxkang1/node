const express = require('express')
const router = require('./router') // 引入路由组件 

const app = express() // 实例化服务器
 
app.use(express.json()) // 处理json格式数据

app.use(express.urlencoded({extended:false})) // 处理 urlencoded数据

// jsonp 接口的使用
app.get('/api/jsonp',(req,res)=>{ // jsonp接口必须写在 cors 之前  jsonp只能是get请求
    /**
     * 1、得到函数的名称
     * 2、定义发送客户端的数据对象
     * 3、拼接一个函数调用
     * 4、把拼接的字符串 响应给前端
    */
    console.log(req.query);
    console.log(req.query.callback);
    const funcName = req.query.callback
    const data = {name:'ls',age:22}
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})

const cors = require('cors') // 安装中间件解决跨域问题 一定要在路由之前
app.use(cors())

app.use('/api', router) // 给接口添加统一前缀

// 错误级别中间件  处理异常  有执行顺序问题 必须写在客户端请求的后面
app.use((err,req,res,next)=>{
    res.send('ERROR:'+ err.message)
    next()
})

// 启动服务器
app.listen(8080, () => {
    console.log('web server. http://127.0.0.1:8080')
})