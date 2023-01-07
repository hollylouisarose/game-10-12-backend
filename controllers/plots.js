import Plot from '../model/plot.js'

// * Show plot point

async function getOnePlot(req, res){
  const { plotId } = req.params
  try {
    const nextPlot = await Plot.findByID(plotId) 
    return res.status(200).json(nextPlot)   
  } catch (err) {
    console.log('error', err)
  }
}

export default {
  show: getOnePlot,
}