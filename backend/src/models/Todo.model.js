import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

const TodoSchema = new mongoose.Schema({
    name: String,
    todo: String,
    todoDone: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true})

const TodoModel = new mongoose.model(dbCollection, TodoSchema)

export default TodoModel