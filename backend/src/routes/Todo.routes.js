import TodoController from '../controllers/Todo.controller.js'
import Middlewares from '../middlewares/Middlewares.js'

const routes = (app) => {
    const todoUrl = `/todo`;
    const todosUrlById = `/todo/:id`;
    const searchTodo = `/searchTodo/:name`;
    const toggleTodoDone = `/toggleTodoDone/:id`;


    app.post(todoUrl, Middlewares.authenticateToken, TodoController.createTodo)
    app.get(todoUrl, Middlewares.authenticateToken, TodoController.getAllTodos)
    app.get(todosUrlById, Middlewares.authenticateToken, TodoController.getTodoWithId)
    app.get(searchTodo, Middlewares.authenticateToken, TodoController.getTodoWithNameQuery)
    app.put(todosUrlById, Middlewares.authenticateToken, TodoController.updateTodo)
    app.delete(todosUrlById, Middlewares.authenticateToken, TodoController.deleteTodoWithId)
    app.put(toggleTodoDone, Middlewares.authenticateToken, TodoController.toggleTodoDone)
}

export default {
    routes
}