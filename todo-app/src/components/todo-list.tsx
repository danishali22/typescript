import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {Pencil, Trash} from "lucide-react";

type TodoListProps = {
  items: {
    id: string;
    text: string;
  }[];
  onRemoveTodo: (todoId: string) => void
};

const TodoList: React.FC<TodoListProps> = (props) => {
  console.log(props.items);
  return (
    <div className="my-5 grid grid-cols-5 gap-5">
      {props.items.map((todo) => (
        <Card key={todo.id}>
          <CardHeader className="flex flex-row items-center justify-center gap-5">
            <CardTitle>{todo.text}</CardTitle>

            <Button
              onClick={() => props.onRemoveTodo(todo.id)}
              variant={"destructive"}
              size="icon"
            >
              <Trash className="w-5 h-5" />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
