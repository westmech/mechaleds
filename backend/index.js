const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.post('/rockies', (req, res) => {
  console.log("req", req.body)
  res.send('Hello World!')
})

app.use('/gifs', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})