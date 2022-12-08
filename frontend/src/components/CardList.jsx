import Card from "./Card.module.css/Card"


const CardList = ({todo}) => {
    return (
        <>
            {
                todo.map((todo) => {
                    return (
                        <Card key={todo._id}
                              _id={todo._id}
                              name={todo.name}
                              todo={todo.todo}
                              todoDone={todo.todoDone}/>
                    )
                })
            }
        </>
    )
}

export default CardList