const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/hello-world', (req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, ()=> console.log(`app running at ${PORT}`))