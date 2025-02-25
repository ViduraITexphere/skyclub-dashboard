const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const itineraryRoutes = require('./routes/itineraryRoutes')

const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use(
  cors({
    origin: [
      'https://66ab42537c4d909e836ca634--effortless-longma-ef2d53.netlify.app',
      'https://another-allowed-origin.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)

mongoose.connect(
  'mongodb+srv://viduraitexphere:roRLEpN5PnbGKO4q@cluster0.0fmf41p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
)

app.use('/', itineraryRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
