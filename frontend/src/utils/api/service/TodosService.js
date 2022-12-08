import http from '../MyAPI'

const getAllTodos = () => {
    return http.get('/todo')
}

const createTodos = (newName) => {
    return http.post('/todo', newName)
}

const updateTodos = (id, convertedTodo) => {
    return http.put(`/todo/${id}`, convertedTodo)
}

const deleteTodos = (id) => {
    return http.delete(`/todo/${id}`)
}

const getTodoWithUsernameQuery = (name) => {
    return http.get(`/searchTodo/${name}`)
}

const getTodoWithId = (id) => {
    return http.get(`/todo/${id}`)
}

const toggleTodoDone = (id, load) => {
    return http.put(`/toggleTodoDone/${id}`, load)
}


export default {
    getAllTodos,
    createTodos,
    updateTodos,
    deleteTodos,
    getTodoWithUsernameQuery,
    toggleTodoDone,
    getTodoWithId
}