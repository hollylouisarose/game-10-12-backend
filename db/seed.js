import Plot from '../model/plot.js'
import { connectDb, truncateDb, disconnectDb } from './helper.js'
import plotData from './data/plots.js'

async function seed(){
  try {
    await connectDb()
    console.log('connected')
    await truncateDb()
    console.log('data base dropped')

    const plots = await Plot.create(plotData)

    console.log(`${plots.length} added`)

  } catch (err) {
    console.log('something went wrong')
    console.log(err)
  }
  await disconnectDb()
}

seed()