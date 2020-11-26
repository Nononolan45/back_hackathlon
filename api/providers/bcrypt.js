const bcrypt = require('bcrypt')

exports.cryptPassword = (password, salt ) => {
    return bcrypt.hashSync(password, salt);
}

exports.verifyPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}