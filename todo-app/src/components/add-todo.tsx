import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type AddTodoProps = {
    onAddTodo: (text: string) => void
}

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center gap-5 justify-center"
    >
      <Input
        className="w-xl"
        type="text"
        value={text}
        onChange={changeEventHandler}
        placeholder="Write a new todo..."
      />
      <Button>Add Todo</Button>
    </form>
  );
};

export default AddTodo