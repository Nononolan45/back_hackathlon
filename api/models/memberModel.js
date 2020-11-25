const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let memberSchema = new Schema({
    last_name: {
        type: String,
        required: "Le nom est requis",
        min: [1]
    },
    first_name: {
        type: String,
        required: "La rprénom est requis"
    },
    email: {
        type: String,
        required: "L'email est requis",
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'L\email ne respecte pas le format demandé.']
    },
    phone_number: {
        type: String,
        required: "Le numero de téléphone est requis",
        match: [/^((\+)33|0)[1-9](\d{2}){4}$/g, 'Le numéro de téléphone ne respecte pas le format demandé.']
    },
    project_id: {
        type: String,
        required: "L'identifiant du projet est requis'"
    }
});

module.exports = mongoose.model('Member', memberSchema);
