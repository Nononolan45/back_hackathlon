const axios = require('axios');

exports.getTextToApiLoripsum = (res) => {
    const baseUrl = 'https://loripsum.net/api';
    return axios.get(`${baseUrl}/plaintext`, { responseType: 'text' })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            res.status(500);
            res.json({ message: "Erreur serveur." })
        })

}