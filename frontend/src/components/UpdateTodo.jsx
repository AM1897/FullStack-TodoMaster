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
        <>  <p>
            ID: <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            Namn:<input type="text" value={name} onChange={e => setName(e.target.value)}/>
            Todo: <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button onClick={sendDataToApi}>
                Uppdatera nya användare
            </button>
            {data.length > 0 && data[0].message
                ? <p>{data[0].message}</p>
                : <CardList todo={data}/>}
        </p>
        </>
    )
}

export default UpdateTodo

