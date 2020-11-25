const mongoose = require('mongoose');
const bcryptProvider = require('../providers/bcrypt')
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


userSchema.pre('save', function (next) {
    this.password = bcryptProvider.cryptPassword(this.password, 10);
    next();
})

module.exports = mongoose.model('User', userSchema);