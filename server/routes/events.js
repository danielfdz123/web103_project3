import express from 'express'
import Events from '../controllers/events.js'

const router = express.Router()

// route to get all events
router.get('/', Events.getEvents)
// route to get all events for a location
router.get('/location/:id', Events.getEventsByLocationId)

export default router
