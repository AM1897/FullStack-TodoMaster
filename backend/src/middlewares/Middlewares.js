import dotenv from 'dotenv'
import StatusCode from "../utils/StatusCode.js"
import jwt from 'jsonwebtoken';

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

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the Bearer

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.user = user;
        next();
    });
}

export default {
    notFound,
    errorHandler,
    authenticateToken
};