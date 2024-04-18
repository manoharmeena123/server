const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = { DataModel }