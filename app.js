const express = require('express')
const app = express()
const port = 3000

app.get('/xin-chao', (req, res) => {
    let a=1,b=2;
    let c=a+b;
  res.send('Hello World! xin chào mọi người')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})