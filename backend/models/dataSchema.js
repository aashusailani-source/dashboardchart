const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    end_year: {
        type: Number,
    },
    topics: {
        type: String,
    },
    region: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    pestle: {
        type: String,
    },
    sector: {
        type: String,
    },
    relevance: {
        type: Number,
    },
    intensity: {
        type: Number,
    },
    likelihood: {
        type: Number,
    }
})

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;