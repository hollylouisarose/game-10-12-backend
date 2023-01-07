import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/game10-12-db'

mongoose.set('strictQuery', false)

app.use('/', (req, _res, next) => {
  console.log(`incoming request: ${req.method} to ${req.url}`)
  next()
})

app.get('/plots', async (req, res) => {
  const plots = await Plot.find()
  return res.status(200).json(plots)
})

// get request, parse the key out of the url
// return one clue

async function connectToMongoose() {
  try {
    await mongoose.connect(dbURI)
    console.log('mongoose connected')
  } catch (err) {
    console.log('something went wrong', err)
  }
}

//logging middleware

app.use('/', (req,_res,next)=> {
  console.log(`Incoming ${req.method} to ${req.url}`)
  next()
})

// Body Parsing middleware (all incoming data will be in JSON, please parse and add to req in a key called "body")

app.use(express.json())

app.listen(port, ()=> {
  console.log(`app listening on port ${port}`)
})

connectToMongoose()
