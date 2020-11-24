const axios = require('axios');

exports.getTextToApiLoripsum = (res) => {
   return  axios.get('https://loripsum.net/api/plaintext')
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
            res.status(500);
            res.json({ message: "Erreur serveur." })
        })

}