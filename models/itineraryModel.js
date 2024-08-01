const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  googleId: String,
  itinerary: Array,
})

const Itinerary = mongoose.model('Itineraries', itinerarySchema)

module.exports = Itinerary
