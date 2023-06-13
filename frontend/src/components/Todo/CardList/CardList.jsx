import React from "react";
import Card from '../Card/Card';

const CardList = ({ todo, fetchTodos }) => {
    return (
        <div>
            {todo.map(({ name, todo, todoIsDone, _id }) => (
                <Card
                    name={name}
                    todo={todo}
                    todoDone={todoIsDone}
                    _id={_id}
                    fetchTodos={fetchTodos}
                    key={_id}
                />
            ))}
        </div>
    );
};

export default CardList;
