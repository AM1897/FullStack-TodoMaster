import dotenv from 'dotenv'
import StatusCode from "../utils/StatusCode.js"

dotenv.config()

const notFound = (req, res, next) => {
    const error = new Error(`Hittades inte: ${req.originalUrl}`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stacktrace: process.env.ENVIRONMENT === 'development' ? error.stack : 'haha'
    })
    next()
}


export default {
    notFound,
    errorHandler
}