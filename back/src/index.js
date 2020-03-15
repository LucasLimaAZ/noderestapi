const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// Database
mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', { useNewUrlParser: true })
.then(() => {console.log('Connected to database...')})
.catch(err => console.error(err))

// Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Controllers
const UserController = require('./controllers/UserController')

// Routes
app.post('/api/user/create', UserController.create)
app.post('/api/user/update', UserController.update)
app.get('/api/user/retrieve/:id?', UserController.retrieve)
app.delete('/api/user/delete', UserController.delete)

// Start Server
app.listen(3001, () => console.log('Server started...'))