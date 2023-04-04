import express from 'express'

const PORT = 1337
const app = express()

// Adding ability to read JSON
app.use(express.json())

// Endpoints
app.post('/', function (req, res) {
  console.log(req.body)

  res.status(200).json('Server is working')
})

// Server starting
app.listen(PORT, function () {
  console.log('Server started')
})
