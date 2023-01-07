// this is where my plot routes will go

import express from 'express'
import plots from '../controllers/plots.js'

const router = express.Router()

// * Plots routes

router.route('plots/:plotId')
  .get(plots.show)

export default router