const bcrypt = require('bcrypt');

// with bcrypt , cryppt and verify password user 

exports.cryptPassword = (password, salt) => {
    return bcrypt.hashSync(password, salt);
}

exports.verifyPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}