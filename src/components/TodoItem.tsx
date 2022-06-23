import { Trash } from "phosphor-react";

import { Task } from "../App";

import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  task: Task;
  onChangeCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoItem({
  task,
  onChangeCompleted,
  onDeleteTask,
}: TodoItemProps) {
  return (
    <div className={styles.TodoItem}>
      <div>
        <input
          onChange={() => onChangeCompleted(task.id)}
          checked={task.completed}
          type="checkbox"
        />
      </div>
      <p className={task.completed ? styles.Completed : ""}>
        {task.description}
      </p>
      <button onClick={() => onDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
