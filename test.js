const express = require('express')
const path = require('path');
const app = express()
const port = 5001

// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     frameAncestors: ["http://localhost:"]
//   }
// }))

app.get('/', 
(req, res, next) => {
  res.set('X-Frame-Options', 'DENY')
  // res.set('X-Frame-Options', 'ALLOW-FROM http://bore.pu')
  // res.set('X-Frame-Options', 'http://blah:41065')
  // Content-Security-Policy: frame-ancestors <source>;
  res.set('Content-Security-Policy', 'frame-ancestors http://bore.pub:42323')
  next()
},
 (req, res) => {
  console.log(req.originalUrl)
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, '/clickjacking.html'))
})

app.listen(port, () => {
  console.log(`Example app to be embedded listening on port ${port}`)
})
