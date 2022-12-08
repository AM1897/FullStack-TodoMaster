import TodosService from "../utils/api/service/TodosService";
import {useState} from "react";

const DeleteTodo = () => {
    const [data, setData] = useState('')
    const [id, setId] = useState('')

    const sendDataToApi = () => {
        TodosService.deleteTodos(id)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => {
                setData(error.response.data.message)
            })
    }
    return (
        <>
            ID: <input data-testid='dataInput' type="text"
                       value={id}
                       onChange={event => setId(event.target.value)}/>
            <button data-testid='Remove Button' onClick={sendDataToApi}>Ta bort</button>
            <p>{data}</p>
        </>
    )
}

export default DeleteTodo