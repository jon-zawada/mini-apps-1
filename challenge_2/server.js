
const express = require('express')
const app = express()
const port = 3000
const text = require('./client/app.js')

// app.get('/', (req, res) => res.send('Hello World!!!!!!!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use('/', express.static('client'))

app.post('/upload_json', (req, res) => {
  console.log(req.body)
  console.log('HELLO FROM SERVER.JS')
  res.send(text)
})

// app.get('/upload_json', (req, res) =>{})