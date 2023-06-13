import { useState } from "react";
import TodosService from '../../../utils/api/service/TodosService';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './Card.module.css';

const Card = ({ name, todo, todoDone, _id, fetchTodos }) => {
    const [isTodoDone, setTodoDone] = useState(todoDone);
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newTodo, setNewTodo] = useState(todo);

    const handleCheckChange = () => {
        const load = {
            newTodoStatus: !isTodoDone
        };
        TodosService.toggleTodoDone(_id, load)
            .then(response => {
                console.log(response.data);
                setTodoDone(response.data);
            })
            .catch(error => console.log(error));
    };

    const handleUpdateClick = () => {
        const load = {
            name: newName,
            todo: newTodo
        };
        TodosService.updateTodos(_id, load)
            .then(response => {
                console.log(response.data);
                setEditing(false);
                // Refresh the todo list
                fetchTodos();
            })
            .catch(error => console.log(error));
    };

    const handleDeleteClick = () => {
        TodosService.deleteTodos(_id)
            .then(response => {
                console.log("Deleted successfully");
                // Refresh the todo list
                fetchTodos();
            })
            .catch(error => console.log(error));
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                {isEditing ? (
                    <>
                        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
                        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                        <button onClick={handleUpdateClick}>Spara ändringar</button>
                    </>
                ) : (
                    <div className={styles.cardInfo}>
                        <div
                            className={`${isTodoDone ? styles.cardCrossOut : ""} ${styles.cardName}`}
                            onClick={handleCheckChange}>
                            {name}
                        </div>
                        <div className={isTodoDone ? styles.cardCrossOut : ""}>{todo}</div>
                        <div className={styles.buttonGroup}>
                            <button className={styles.editButton} onClick={() => setEditing(true)}>
                                <FaEdit className={styles.updateIcon} />
                            </button>
                            <button className={styles.deleteButton} onClick={handleDeleteClick}>
                                <FaTrash className={styles.deleteIcon} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
