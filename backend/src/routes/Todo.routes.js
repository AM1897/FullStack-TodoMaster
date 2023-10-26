import TodoController from '../controllers/Todo.controller.js'
import Middlewares from '../middlewares/Middlewares.js'

const routes = (app) => {
    const todoUrl = `/todos`;
    const todosUrlById = `/todo/:id`;
    const toggleTodoDoneUrl = `/done/:id`;

    app.get(todoUrl, Middlewares.authenticateToken, TodoController.getAllTodos);
    app.post(todoUrl, Middlewares.authenticateToken, TodoController.createTodo);
    app.put(todosUrlById, Middlewares.authenticateToken, TodoController.updateTodo);
    app.get(todosUrlById, Middlewares.authenticateToken, TodoController.getTodoWithId);
    app.delete(todosUrlById, Middlewares.authenticateToken, TodoController.deleteTodoWithId);
    app.put(toggleTodoDoneUrl, Middlewares.authenticateToken, TodoController.toggleTodoDone);
}

export default {
    routes
}
