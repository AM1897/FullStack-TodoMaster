import TodosService from "../../../utils/api/service/TodosService";
import {useState} from 'react'
import CardList from '../CardList/CardList';

const UpdateTodo = ({ fetchTodos }) => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [todo, setTodo] = useState('')

    const sendDataToApi = () => {
        const convertedTodo = {
            'name': name,
            'todo': todo
        }
        TodosService.updateTodos(id, convertedTodo )
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                setData(dataArray)
                console.log(dataArray)
                // Call fetchTodos to refresh the todo list
                fetchTodos();
            })
            .catch(error => console.log(error))
    }
    return (
        <>

        </>
    )
}

export default UpdateTodo;
