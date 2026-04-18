const express = require('express');
const app = express();

app.use(express.json());

let books = [
    {
        id : "1",
        title : "Book 1"
    },
    {
        id : "2",
        title : "Book 2"
    }
]

app.get('/', (req, res) => {

    req.json({
        message : "Welcome to our bookstore api"
    })
})