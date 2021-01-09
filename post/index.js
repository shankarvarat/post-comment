const express = require('express');
const { randomBytes } = require('crypto');

var  bodyParser  = require('body-parser')

const app = express();
const post = {};

app.use(bodyParser.json());

app.get('/get', (req, res) => { })

app.post('/post', (req, res) => {

    const id = randomBytes(4).toString('hex');
    const title = req.body
    post[id] = { id, title }

})

app.listen(4000, () => { console.log("Listing on 4000!!") })