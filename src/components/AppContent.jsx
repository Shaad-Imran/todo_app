import { useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

// Animation variants for the container
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for individual children
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AppContent = () => {
  // Retrieve the todo list from the Redux store
  const todoList = useSelector((store) => store.todo.todoList);

  // Retrieve the filter status from the Redux store
  const filterStatus = useSelector((store) => store.todo.filterStatus);

  // Sort the todo list by time (newest first)
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  // Filter the todo list based on the selected filter status
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    // Apply motion animation to the content wrapper
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {/* Render todo items or display a message if no todos are available */}
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppContent;
