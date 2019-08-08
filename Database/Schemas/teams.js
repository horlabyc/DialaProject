const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your the team name']
    },
    manager: {
        type: String,
        required: [true, 'Please provide the manager name'],
        unique: true
    },
    trainingStadium: {
        type: String,
        required: [true, 'Please provide the stadium name']
    }
});

module.exports = mongoose.model('Teams', TeamSchema);