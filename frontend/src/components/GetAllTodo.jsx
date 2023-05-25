import TodosService from '../utils/api/service/TodosService'
import {useState, useEffect} from "react";
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

    
    useEffect(() => {
        fetchDataFromExternalApi();
    }, [data]);

    return (
        <>
            <div class="column" id="right-column">
                <p>
                    <CardList todo={data}/>
                </p>
            </div>
        </>
    )
}
export default GetAllTodo;
