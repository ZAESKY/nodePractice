const express = require('express')
// const bodyParser = require('body-parser')
const app = express()

// 配置解析post中间件
app.use(express.urlencoded({extended: false}))
// app.use(express.json())
app.get('/hello',(req,res) => {
  res.send('你好，express已搭建完成！')
})

app.post('/hi', (req,res) => {
  res.send(req.body)
})

app.listen(3000,() => {
  console.log('启动完毕')
})