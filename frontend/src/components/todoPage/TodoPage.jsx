import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:3001/todos', {
                headers: { Authorization: 'Your token goes here' }
            });
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Your Todos</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoPage;
