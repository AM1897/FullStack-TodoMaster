import TodosService from "../utils/api/service/TodosService";
import {useState} from 'react'
import CardList from "./CardList";

const UpdateTodo = () => {
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
            })
            .catch(error => console.log(error))
    }
    return (
        <>  
        
        </>
    )
}

export default UpdateTodo

