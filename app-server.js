const express = require ('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 8025

//middleware
app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data =[]
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
const portfolioRoutes = require('./routes/api/portfolio')
app.use('/api', portfolioRoutes)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app

