const express = require('express');
const { randomBytes } = require('crypto');

var bodyParser = require('body-parser')

const app = express();
const commentsByPostId = {};

app.use(bodyParser.json());

app.get('/post/:id/comments', (req, res) => {
    res.status(201).send(commentsByPostId[req.param.id] || [])

})

app.post('/post/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentsByPostId[req.param.id] || []
comments.push({
    id:commentId,content
})
   commentsByPostId[req.param.id]=comments
    res.status(201).send(comments)

})

app.listen(4001, () => { console.log("Listing on 4001!!") })