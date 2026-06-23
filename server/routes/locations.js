import express from 'express'
import Locations from '../controllers/locations.js'

const router = express.Router()

router.get('/', Locations.getLocations)
router.get('/:id', Locations.getLocationById)

export default router
