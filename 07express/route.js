const express = require('express')
const router = express.Router() // 把客户端请求统一挂载在router 暴露出去 统一管理路由

router.get('/userList', (req, res) => {
    res.send({
        user_list: ['zhangsan', 'lisi', 'wangwu']
    })
})

router.post('/addUser', (req, res) => {
    res.send('add user success.')
})

router.post('/:userId', (req, res) => { // 动态路由
    res.send(req.params)
})

// console.log(router);
module.exports = router // 路由不能直接写成对象 如：module.exports={router} 会报错
