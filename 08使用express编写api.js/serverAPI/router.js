const express = require('express')

const route = express.Router()


route.get('/login',(req,res)=>{
    const body = req.query   // 客户端使用GET请求时，后端用req.query 接收
    res.send({
        state:0,
        message:'请求成功！',
        data:body
    })
   
})

route.post('/user',(req,res)=>{
    const body = req.body   // 客户端使用POST请求时，后端用req.body 接收
    res.send({
        state:0,
        message:'请求成功！',
        data:body
    })
   
})

module.exports = route