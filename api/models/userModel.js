const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'L\email ne respecte pas le format demandé.']
    },
    name: {
        type: String,
        required: "Le nom est requis"
    },
    password: {
        type: String,
        required: "Le mot de passe est requis"
    },
    school_id: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);