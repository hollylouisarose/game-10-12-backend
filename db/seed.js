import Plot from '../model/plot.js'
import plotData from './data/plots.js'
import { connectDb, truncateDb, disconnectDb } from './helper.js'

async function seed(){
  try {
    await connectDb()
    console.log('Database connected')
    await truncateDb()
    console.log('Database dropped')
  } catch (err) {
    console.log('something went wrong', err)
  }

  await disconnectDb()
  console.log('all done! database disconnected')

}