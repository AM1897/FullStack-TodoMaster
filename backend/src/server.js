import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './middlewares/Middlewares.js'
import Configuration from './configurations/Configuration.js'
import TodoRoutes from './routes/Todo.routes.js'
import ApplyMiddlewares from './configurations/ApplyMiddlewares.js'
import AliveRoute from './routes/Alive.route.js'
import authRoutes from './routes/authRoutes.js'  // <-- import here
import cors from 'cors'

dotenv.config()
const app = express()

ApplyMiddlewares(app)
app.use(helmet())
app.use(express.urlencoded({extended: true}))
app.use(morgan('common'))
app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes) 
AliveRoute.AliveRoute(app)
TodoRoutes.routes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToPort(app)
Configuration.connectToDatabase(app)

export default app
