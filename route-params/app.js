const express = require('express')

const app = express()
const PORT = 3000
// maps to something like: http://localhost:3000/books/34/30040
// Request URI: http://localhost:3000/books/<bookId>/<authorId>
// GET HTTP method
app.get('/books/:bookId/:authorId', (req, res) => {
  const bookId = req.params.bookId
  const authorId = req.params.authorId

  res.send(bookId, authorId) // send the bookId & authorId in the responsde

})

app.listen(PORT, () => console.log(`app running at ${PORT}`))