const bcrypt = require('bcrypt')

exports.cryptPassword = (password, salt ) => {
    return bcrypt.hashSync(password, salt);
}