const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({

    response_one: {
        type: String,
        required: "La réponse est requise"
    },
    response_two: {
        type: String,
        required: "La réponse est requise"
    },
    response_three: {
        type: String,
        required: "La réponse est requise"
    },
    response_four: {
        type: String,
        required: "La réponse est requise"
    },
    response_five: {
        type: String,
        required: "La réponse est requise"
    },
    about: {
        type: String,
        required: "A propos requis"
        
    },
    school_id: {
        type: String,
        required: "L'identifiant de l'école est requis"
    }
});

module.exports = mongoose.model('Project', projectSchema);
