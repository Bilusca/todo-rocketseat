import { Task } from "../App";
import { BlankState } from "./BlankState";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.scss";

interface TodoListProps {
  tasks: Task[];
  onChangeCompleted: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TodoList({
  tasks,
  onChangeCompleted,
  onDeleteTask,
}: TodoListProps) {
  const completedTasks = tasks.filter((tasks) => tasks.completed === true);

  return (
    <div className={styles.TodoList}>
      <div className={styles.TodoListJobs}>
        <div>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
        </div>
        <div>
          <p>
            Concluídas{" "}
            <span>{`${completedTasks.length} de ${tasks.length}`}</span>
          </p>
        </div>
      </div>
      {tasks.length ? (
        tasks.map((task) => (
          <TodoItem
            task={task}
            key={task.id}
            onChangeCompleted={onChangeCompleted}
            onDeleteTask={onDeleteTask}
          />
        ))
      ) : (
        <BlankState />
      )}
    </div>
  );
}
