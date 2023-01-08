import express from 'express'
import Plot from './model/plot.js'
import { connectDb } from './db/helper.js'

const app = express()

app.use(express.json())
const port = 4000

app.use('/', (req, _res, next) => {
  console.log(`🤖 Incoming Request: ${req.method} to ${req.url}`)
  next()
})

app.get('/plots', async (_req, res) => {
  const plots = await Plot.find()
  return res.status(200).json(plots)
})

app.get('/plots/:plotId', async (req, res) => {
  const { plotId } = req.params
  try {
    const plotToFind = await Plot.findById(plotId)
    return res.status(200).json(plotToFind)
  } catch (error) {
    return res.status(404).json({ message: 'Not Found' })
  }
})


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
