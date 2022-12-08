import dotenv from 'dotenv'
import Logger from "../utils/Logger.js"
import mongoose from "mongoose"

dotenv.config()

const port = process.env.PORT
const environment = process.env.NODE_ENV
const mongodb_url = process.env.DATABASE_URL
const dbName = process.env.MONGODB_DB_NAME


function isServerInDevelopmentMode() {
    const denEnv = 'development'
    const env = environment || denEnv
    const isDevelopment = env === denEnv
    if (isDevelopment) {
        Logger.warn('Server är i utvecklingsläge!'.toUpperCase())
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        isServerInDevelopmentMode()
        Logger.info(`Server är igång på port ${port}`)
    })
}

const connectToDatabase = async (app) => {
    const uri = mongodb_url + dbName
    try {
        await mongoose.connect(uri)
        Logger.info('LYCKAD ANSLUTNING TILL DATABASEN!')
    } catch (error) {
        Logger.error('FEL VID FÖRSÖK ATT ANSLUTA TILL DATABASEN:', error)
        process.exit()
    }
}

export default {
    connectToDatabase,
    connectToPort
}

