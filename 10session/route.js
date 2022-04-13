const express = require('express')
const route = express.Router()
route.post('/login', (req, res) => {
    console.log(req.body);
    if (req.body.username !== 'admin' || req.body.password !== '000') {
        return res.send({ status: 1, msg: '用户名或密码错误！' })
    }
    /**
     * 注意：配置完express-session这个中间件，即可通过req.session 来访问session对象
     * */
    req.session.user = req.body
    req.session.islogin = true

    res.send({ status: 0, msg: '登录成功！' })
})
route.post('/user', (req, res) => {
    console.log(req.session.isLogin);
    if (!req.session.isLogin) { // 判断用户是否是登录状态  
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send(
        {
            status: 0,
            username: req.session.user.username,
            msg: 'success'
        }
    )
})

route.post('/logout', (req, res) => {

    req.session.destroy() // 用户退出时，清空session信息
    res.send(
        {
            status: 0,
            msg: '退出登陆成功！'
        }
    )
})
module.exports = route