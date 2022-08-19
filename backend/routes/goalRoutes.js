const express = require('express');
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../goalController/goalController');

module.exports = router;

router.route('/').get(getGoals).post(setGoal);

module.eports = router;
