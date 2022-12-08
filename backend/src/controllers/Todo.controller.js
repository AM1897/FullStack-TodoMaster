import Logger from "../utils/Logger.js"
import TodoModel from "../models/Todo.model.js"
import StatusCode from "../utils/StatusCode.js"


const createTodo = async (req, res) => {
    Logger.info('createTodo()')
    Logger.http(req.body)

    const {todo, name} = req.body
    if (todo && name) {
        const newName = {
            name: name,
            todo: todo,
            todoDone: false
        }
        Logger.debug(newName)

        try {
            const todo = new TodoModel(newName)
            const response = await todo.save()
            Logger.debug(response)
            res.status(StatusCode.CREATE).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({error: error`Det gick inte att skapa en Todo`})
        }
    } else {
        Logger.error(error)
        res.status(StatusCode.NO_CONTENT).send('No body found')
    }
}

const getAllTodos = (req, res) => {

    try {
        TodoModel.find({}, (error, todos) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({error: 'Det gick inte att hämta Todos'})
            } else {
                Logger.info(todos)
                res.status(StatusCode.OK).send(todos)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({error: 'Det gick inte att hämta Todo'})
    }
}

const getTodoWithId = (req, res) => {
    try {
        TodoModel.findById(req.params.id, (error, todo) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({error: 'Det gick inte att hämta Todo'})
            } else {
                Logger.info(todo)
                res.status(StatusCode.OK).send(todo ? todo : {
                    message: `Todo med id '${req.params.id}' hittades inte`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({error: 'Det gick inte att hitta Todo'})
    }
}

const getTodoWithNameQuery = async (req, res) => {

    try {
        TodoModel.find({name: req.params.name}, (error, todo) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error getting task`
                })
            } else {
                Logger.info(todo)
                res.status(StatusCode.OK).send(todo.length > 0 ? todo : [{
                    message: `Todo med namn: ${req.params.name} hittades inte`
                }])
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Det gick inte att få todo`
        })
    }
}

const updateTodo = async (req, res) => {
    try {
        const updatedTodo = {
            todo: req.body.todo,
            name: req.body.name
        }
        Logger.debug(req.params.id)
        Logger.debug(updatedTodo)
        TodoModel.findByIdAndUpdate(req.params.id, updatedTodo, {new: true}, (error, todo) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send([{
                    error: `Fel vid uppdatering av todo med id: ${req.params.id}`
                }])
            } else {
                Logger.info(todo)
                res.status(StatusCode.ACCEPTED).send(todo ? todo : {messages: `Todo med id '${req.params.id}'hittades inte`})
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({error: 'Fel vid uppdatering av todo'})
    }
}

const deleteTodoWithId = async (req, res) => {
    try {
        TodoModel.findByIdAndDelete(req.params.id, (error, todo) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Det gick inte att ta bort Todo'
                })
            } else {
                Logger.info(todo)
                res.status(StatusCode.OK).send(
                    todo ?
                        `Todo med id '${req.params.id}' togs bort från databasen!`
                        :
                        `Todo med id '${req.params.id}' hittades inte`
                )
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Det gick inte att ta bort todo'
        })
    }
}

const toggleTodoDone = (req, res) => {
    try {
        const {id} = req.params
        const {newTodoStatus} = req.body
        const returnUpdatedObject = {
            new: true
        }
        const Query = {
            todoDone: newTodoStatus
        }
        TodoModel.findByIdAndUpdate(id, Query, returnUpdatedObject, (error, todo) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Det gick inte att ändra todoDone`
                })
            } else {
                res.status(StatusCode.OK).send(todo.todoDone)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Fel vid uppdateringen är klar`
        })
    }
}


export default {
    createTodo,
    getAllTodos,
    getTodoWithNameQuery,
    getTodoWithId,
    updateTodo,
    deleteTodoWithId,
    toggleTodoDone
}