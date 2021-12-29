const express = require('express')

const app = express()
const PORT = 3000
// maps to http://localhost:3000/about
// GET HTTP method
app.get('/about', (req, res) => {
  res.send('about route')
})

// maps to http://localhost:3000/about
// POST HTTP method
app.post('/about', (req, res) => {
  res.send('about route. Post request')
})

app.listen(PORT, () => console.log(`app running at ${PORT}`))