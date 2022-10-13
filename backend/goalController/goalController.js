// @desc    Get goal
// @route   GET /api/v1/goals
// @access  Public
const getGoals = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: "Get goals"});
}

// @desc    Set goal
// @route   POST /api/v1/goals
// @access  Public
const setGoal = (req, res) => {
    res.status(200).json({message: "Set goals"});
}

// @desc    Update goal
// @route   PUT /api/v1/goals/:id
// @access  Public
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
}

// @desc    Delete goal
// @route   DELETE /api/v1/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}