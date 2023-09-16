require('dotenv').config()

require('./config/database')

const app = require('./app-server')

const PORT = process.env.PORT || 8015

 app.listen(PORT, () => {
	console.log(`i am listening on ${PORT}. We in the Building`)
 })