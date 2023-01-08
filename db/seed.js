import Plot from '../model/plot.js'
import plotData from './data/plots.js'
import { connectDb, truncateDb, disconnectDb } from './helper.js'

async function seed(){
  try {
    await connectDb()
    console.log('Database connected')
    await truncateDb()
    console.log('Database dropped')
    const plot = await Plot.create(plotData)
    console.log(`${plot.length} number of plots added`, plot)
  } catch (err) {
    console.log('something went wrong')
    console.log(err)
  }
  await disconnectDb()
  console.log('all done! database disconnected')

}

seed()