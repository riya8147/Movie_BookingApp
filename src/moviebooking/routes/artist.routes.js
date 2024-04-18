const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

// Base URL: http://localhost:3000/api/artists

// Route to get all Artists
router.get('/', artistController.findAllArtists);

module.exports = router;
