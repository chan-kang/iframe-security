const express = require('express')
const path = require('path');
const app = express()
const port = 5001

app.get('/', 
 (req, res) => {
  console.log(req.originalUrl)
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, '/clickjacking.html'))
})

app.listen(port, () => {
  console.log(`Example app to embed pillpal at ${port}...`)
})
