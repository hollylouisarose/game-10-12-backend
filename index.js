import express from 'express'
import router from './config/router.js'
import { connectDb } from './db/helper.js'

const app = express()

app.use(express.json())
const port = 4000
app.use('/api', router)

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
