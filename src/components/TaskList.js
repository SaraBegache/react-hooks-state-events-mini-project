import React from "react";
import Task from "./Task";

function TaskList() {
function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map(({ text, category }, i) => (
        <Task
          key={i + text}
          text={text}
          category={category}
          handleDelete={() => handleDelete(text)}
        />
      ))}
    </div>
  );
}
export default TaskList;