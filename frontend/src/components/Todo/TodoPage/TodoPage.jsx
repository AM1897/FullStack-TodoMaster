import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext.js';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoList from '../CardList/CardList.jsx';
import TodosService from '../../../utils/api/service/TodosService';

function TodoPage() {
    const navigate = useNavigate();
    const { authState } = useContext(AuthContext);
    const { token, username } = authState;
    const [todos, setTodos] = useState([]);
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            fetchTodos();
        }
    }, [token, navigate]);

    const fetchTodos = async () => {
        try {
            const response = await TodosService.getAllTodos();
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    console.log('Auth state in TodoPage:', authState);

    return (
        <>
            <h1>TODO</h1>
            <h2>Välkommen, {username}</h2>
            <button onClick={handleLogout}>Logga ut</button>
            <CreateTodo fetchTodos={fetchTodos} />
            <TodoList todo={todos} fetchTodos={fetchTodos} />
        </>
    );
}

export default TodoPage;
