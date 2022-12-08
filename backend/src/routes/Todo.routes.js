import TodoController from '../controllers/Todo.controller.js'

const routes = (app) => {
    const todoUrl = `/todo`
    const todosUrlById = `/todo/:id`
    const searchTodo = `/searchTodo/:name`
    const toggleTodoDone = `/toggleTodoDone/:id`


    app.post(todoUrl, TodoController.createTodo)
    app.get(todoUrl, TodoController.getAllTodos)
    app.get(todosUrlById, TodoController.getTodoWithId)
    app.get(searchTodo, TodoController.getTodoWithNameQuery)
    app.put(todosUrlById, TodoController.updateTodo)
    app.delete(todosUrlById, TodoController.deleteTodoWithId)
    app.put(toggleTodoDone, TodoController.toggleTodoDone)
}

export default {
    routes
}