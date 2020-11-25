const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    },
    location: {
        type: String,
        required: "La localisation est requise",
        unique: true
    }
});

module.exports = mongoose.model('School', schoolSchema);
