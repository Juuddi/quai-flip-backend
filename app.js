const koa = require('koa')
const koaRouter = require('koa-router')
const json = require('koa-json')
const mongoose = require('mongoose')

const app = new koa()
const router = new koaRouter()

// Json prettier middleware
app.use(json())

// Router Middleware
app.use(router.routes()).use(router.allowedMethods())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongo', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

mongoose.connection.on('error', (err) => {
	console.error('Mongoose connection error:', err)
})

mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB')
})
