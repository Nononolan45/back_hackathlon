const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptProvider = require('../providers/bcrypt')

let userSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ceci n\'est pas un email valide']
    },
    password: {
        type: String,
        required: "Le mot de passe est requis'"
    },
    name: {
        type: String,
        required: "Le nom est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', function (next) {
    this.password = bcryptProvider.cryptPassword(this.password, 10);
    next();
})

module.exports = mongoose.model('User', userSchema);
