import { useState } from 'react'
import AddTodo from './components/add-todo'
import TodoList from './components/todo-list'
import { Todo } from './types/type';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, {id, text}]);
  }

   const removeTodoHandler = (todoId: string) => {
     const newTodo = todos.filter((todo: Todo) => {
       return todo.id !== todoId;
     });
     setTodos(newTodo);
   };

  return (
    <main className="max-w-6xl my-10 mx-auto px-5 md:px-0 flex flex-col items-center gap-10">
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </main>
  );
}

export default App
