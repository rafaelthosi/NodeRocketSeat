const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello RocketSeat')
})

app.listen(3030)