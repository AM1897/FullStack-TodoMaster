import TodosService from '../utils/api/service/TodosService'
import {useState} from "react";
import CardList from "./CardList";

const GetAllTodo = () => {
    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        TodosService.getAllTodos()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
        <div class="column" id="right-column">
            <p>Todo Listan:
                <button onClick={fetchDataFromExternalApi}>Öppna</button>
                <button onClick={() => setData([])}> Stänga</button>
                <CardList todo={data}/>
            </p>
        </div>
        </>
    )
}
export default GetAllTodo