/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { format } from "date-fns/esm";
import { motion } from "framer-motion";
import styles from "../styles/modules/todoitem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TodoItem = ({ todo }) => {
  // State to track if the todo item is checked
  const [checked, setChecked] = useState(false);

  // State to control the update modal's visibility
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const dispatch = useDispatch();

  // Effect to update the checked state when todo status changes
  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  // Handler for deleting the todo item
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };

  // Handler for opening the update modal
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  // Handler for toggling the todo item's checked state
  const handleCheck = () => {
    // Toggle the checked state
    setChecked((prevChecked) => !prevChecked);

    // Determine the new status based on the checked state
    const newStatus = checked ? "incomplete" : "complete";

    // Dispatch an update to the todo item's status
    dispatch(updateTodo({ ...todo, status: newStatus }));
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton
            checked={checked}
            setChecked={setChecked}
            handleCheck={handleCheck}
          />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === "complete" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type={"update"}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
};

export default TodoItem;
