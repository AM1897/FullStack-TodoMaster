import TodosService from "../utils/api/service/TodosService";
import {useState} from "react";
import CardList from "./CardList";
import Card from "./Card.module.css/Card";

const GetSingleDataById = () => {
    const [singleTodo, setSingleTodo] = useState([])
    const [id, setId] = useState('')

    const sendDataToApi = () => {
        TodosService.getTodoWithId(id)
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                console.log(dataArray)
                setSingleTodo(dataArray)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div>
                ID: <input type="text"
                           value={id}
                           onChange={event => setId(event.target.value)}/>
                <button onClick={() => setId([])}>Ta bort</button>
                <button onClick={sendDataToApi}>Hämta ID</button>
                {singleTodo.length > 0 && singleTodo[0].message
                    ? <p>{singleTodo[0].message}</p>
                    : <CardList todo={singleTodo}/> }

            </div>
        </>
    )
}

export default GetSingleDataById