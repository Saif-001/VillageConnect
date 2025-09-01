// server/routes/services.js
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// @route   GET /api/services
// @desc    Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/services
// @desc    Create a new service
router.post('/', async (req, res) => {
  try {
    const newService = new Service({
      name: req.body.name,
      description: req.body.description,
    });
    const service = await newService.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;