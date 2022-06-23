import { useState } from "react";
import { nanoid } from "nanoid";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";

import styles from "./App.module.scss";
import { TodoList } from "./components/TodoList";

export interface Task {
  completed: boolean;
  description: string;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  function handleCreateTask(description: string) {
    const id = nanoid();

    const createdTask: Task = {
      description,
      completed: false,
      id,
    };

    setTasks([...tasks, createdTask]);
  }

  function handleChangeCompleted(id: string) {
    const completedTasks: Task[] = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(completedTasks);
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutRemovedTask = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutRemovedTask);
  }

  return (
    <main className={styles.App}>
      <Header />
      <section>
        <TodoForm onCreateTask={handleCreateTask} />
        <TodoList
          tasks={tasks}
          onChangeCompleted={handleChangeCompleted}
          onDeleteTask={handleDeleteTask}
        />
      </section>
    </main>
  );
}

export default App;
