import style from './Card.module.css'
import {useState} from "react"
import TodosService from "../../utils/api/service/TodosService";

const Card = ({name, todo, todoDone, _id}) => {
    const [isTodoDone, setTodoDone] = useState(todoDone)
    const toggleIsDone = () => {
        const load = {
            newTodoStatus: !isTodoDone
        }
        TodosService.toggleTodoDone(_id, load)
            .then(response => {
                console.log(response.data)
                setTodoDone(response.data)
            }).catch(error => console.log(error))
    }

    return (

        <div className={isTodoDone ? style.crossOut : null} onClick={toggleIsDone}>
            <h4>{name} <br/> {todo}</h4>
            <p>{_id}</p>
        </div>
    )
}

export default Card