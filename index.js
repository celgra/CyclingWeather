const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
    axios.get('https://api.darksky.net/forecast/b12773caf7718f7e893086ec9d9761ba/25.900054,-97.485017')
        .then((response) => console.log(response.data));
});

app.listen(3000, () => console.log('listening on 3000'));