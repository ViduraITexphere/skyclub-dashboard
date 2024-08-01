const Itinerary = require('../models/itineraryModel')

const getItinerary = async (req, res) => {
  const googleId = req.query.googleId

  if (!googleId) {
    return res.status(400).send('Google ID is required')
  }

  try {
    const itinerary = await Itinerary.findOne({ googleId })
    if (!itinerary) {
      return res.status(404).send('Itinerary not found')
    }
    res.json(itinerary)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getItinerary,
}
