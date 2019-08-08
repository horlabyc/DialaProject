const mongoose = require('mongoose');

const fixtureSchema = new mongoose.Schema({
    homeTeam: {
        type: String,
        required: [true, 'Please provide your the team name']
    },
    awayTeam: {
        type: String,
        required: [true, 'Please provide the manager name'],
        unique: true
    },
    matchDate: {
        type: String,
        required: [true, 'Please provide the stadium name']
    },
    scoreLine: {
        type: String,
    },
    scorers:{
        type: String
    }
});

module.exports = mongoose.model('Fixtures', fixtureSchema);