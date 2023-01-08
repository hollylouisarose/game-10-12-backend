import Plot from '../model/plot.js'

async function plotIndex (_req, res) {
  const plots = await Plot.find()
  return res.status(200).json(plots)
}

async function getOnePlot (req, res) {
  const { plotId } = req.params
  try {
    const plotToFind = await Plot.findById(plotId)
    return res.status(200).json(plotToFind)
  } catch (error) {
    return res.status(404).json({ message: 'Not Found' })
  }
}

export default {
  index: plotIndex,
  show: getOnePlot,
}