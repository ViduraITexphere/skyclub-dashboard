const express = require('express')
const router = express.Router()
const { getItinerary } = require('../controllers/itineraryController')

router.get('/api/itinerary', getItinerary)

module.exports = router
