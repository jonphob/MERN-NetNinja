const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workouts' });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET single workout' });
});

// POST new workout
router.post('/', (req, res) => {
  res.json({ mssg: 'POST new workout' });
});

// DELETE workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE single workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a workout' });
});

module.exports = router;
