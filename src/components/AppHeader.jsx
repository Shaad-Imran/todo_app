import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { updateFilterStatus } from "../slices/todoSlice";
import { Button, SelectButton } from "./Button";

const AppHeader = () => {
  // Retrieve the filter status from the Redux store
  const filterStatus = useSelector((store) => store.todo.filterStatus);

  // State for controlling the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  // Handler to update the filter status
  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      {/* Button to open the TodoModal */}
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      {/* Select dropdown for filtering tasks by status */}
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>

      {/* Modal for adding tasks */}
      <TodoModal
        type={"add"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};

export default AppHeader;
