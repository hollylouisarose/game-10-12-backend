import express from 'express'
import { connectDb } from './db/helper.js'
import router from './config/router.js'

const app = express()

app.use(express.json())
const port = 4000

app.use('/', (req, _res, next) => {
  console.log(`🤖 Incoming Request: ${req.method} to ${req.url}`)
  next()
})

app.use(router)

async function startServer() {
  try {
    await connectDb()
    console.log('🤖 Database has connected')
    app.listen(port, () => console.log(`🤖 Up and running on port ${port}`))
  } catch (error) {
    console.log('🤖 Something went wrong starting the App')
    console.log(error)
  }
}

startServer()
