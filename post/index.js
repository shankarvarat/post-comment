const express = require('express');
const { randomBytes } = require('crypto');

var bodyParser = require('body-parser')

const cors = require('cors');
const app = express();
const post = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/post', (req, res) => {
    res.status(201).send(post)

})

app.post('/post', (req, res) => {
    console.log("its working!!")
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    post[id] = {
      id,
      title
    };
  

    res.status(201).send(post[id])

})

app.listen(4002, () => { console.log("Listing on 4002!!") })