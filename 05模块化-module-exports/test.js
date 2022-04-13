/**
 * nodejs 模块化：
 *  模块化分为：系统模块、自定义模块、第三方模块
 *  模块化好处：把复杂程序简单化，提高复用性，方便维护，
 *  模块化使用：module.exports 向外部暴露 可简写为exports
 *  模块化遵循commonJS模块化规范
 * 
*/
const m = require('./模块化') // 导入自定义模块
console.log(m.age)
console.log(m.userName)