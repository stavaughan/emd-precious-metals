import express from 'express'
import metalsController from '../controllers/metalsController.js'

const metalsRouter = express.Router();

metalsRouter.route('/').post(metalsController.getMetals)

export default metalsRouter
