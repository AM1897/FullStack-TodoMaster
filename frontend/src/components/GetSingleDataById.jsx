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

        </>
    )
}

export default GetSingleDataById