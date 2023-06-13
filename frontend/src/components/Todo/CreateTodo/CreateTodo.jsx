import TodosService from '../../../utils/api/service/TodosService'
import { useState } from "react";
import styles from './CreateTodo.module.css';

const CreateTodo = ({ fetchTodos }) => {
    const [data, setData] = useState([])
    const [todo, setTodo] = useState('')
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        const newName = {
            'name': name,
            'todo': todo,
            'todoIsDone': false
        }
        TodosService.createTodos(newName)
            .then(response => {
                setData(response.data)
                // Clear the inputs
                setName('');
                setTodo('');
                // Call fetchTodos to refresh the todo list
                fetchTodos();
            }).catch(error => console.log(error))
    }
    return (
        <>
            <div className={styles.column}>
                <input type="text"
                       placeholder="Namn"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
                <input type="text"
                       placeholder="Todo"
                       value={todo}
                       onChange={e => setTodo(e.target.value)}/>
                <button onClick={sendDataToApi}>
                    Skapa ny användare
                </button>
            </div>
        </>
    )
}

export default CreateTodo;
