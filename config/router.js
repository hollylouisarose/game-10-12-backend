import express from 'express'
import plots from '../controllers/plots.js'

const router = express.Router()

router.route('/plots')
  .get(plots.index)

router.route('/plots/:plotId')
  .get(plots.show)

export default router