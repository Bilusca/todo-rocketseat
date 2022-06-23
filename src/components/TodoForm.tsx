import { ChangeEvent, useState, FormEvent, InvalidEvent } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./TodoForm.module.scss";

interface TodoFormProps {
  onCreateTask: (description: string) => void;
}

export function TodoForm({ onCreateTask }: TodoFormProps) {
  const [description, setDescription] = useState<string>("");

  function handleSetTodo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setDescription(event.target.value);
  }

  function handleSubmitTodo(event: FormEvent) {
    event.preventDefault();

    onCreateTask(description);
    setDescription("");
  }

  function handelNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  return (
    <form className={styles.TodoForm} onSubmit={handleSubmitTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="description"
        value={description}
        onChange={handleSetTodo}
        onInvalid={handelNewTodoInvalid}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
