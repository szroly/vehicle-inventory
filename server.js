const express = require('express')
const logger = require('morgan')

const users = require('./routes/users')
const vehicles = require('./routes/vehicles')
require('dotenv').config()


const app = express()


// Connect to MongoDB
require('./config/database')

app.use(logger('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const secretKey = process.env.SECRET_KEY
app.set('secretKey', secretKey);

app.use('/users', users)
app.use('/vehicles', vehicles)


app.get('/', (req, res) => {
    res.json({ "tutorial": "garageApp" })
})



app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})