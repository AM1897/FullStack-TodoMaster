import { useState } from "react";
import TodosService from "../../utils/api/service/TodosService";
import updateIcon from '../../utils/global/img/update-png.png';
import deleteIcon from '../../utils/global/img/Delete.png';
import styles from './Card.module.css';

const Card = ({ name, todo, todoDone, _id }) => {
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
      })
      .catch(error => console.log(error));
  };

  const handleDeleteClick = () => {
    TodosService.deleteTodos(_id)
      .then(response => {
        console.log("Deleted successfully");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={styles.card}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isTodoDone}
          onChange={handleCheckChange}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className={styles.editInput}
              />
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className={styles.editInput}
              />
            </>
          ) : (
            <>
              <div className={`${isTodoDone ? styles.cardCrossOut : ""} ${styles.cardName}`}>
                {name}
              </div>
              <div className={isTodoDone ? styles.cardCrossOut : ""}>{todo}</div>
            </>
          )}
        </div>
        <div className={styles.buttonGroup}>
          {isEditing ? (
            <button className={styles.updateButton} onClick={handleUpdateClick}>
              <img src={updateIcon} alt="Update" />
            </button>
          ) : (
            <button className={styles.editButton} onClick={() => setEditing(true)}>
              <img src={updateIcon} alt="Update" />
            </button>
          )}
          <button className={styles.deleteButton} onClick={handleDeleteClick}>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
