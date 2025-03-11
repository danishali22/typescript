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

  return (
    <main className='max-w-6xl my-10 mx-auto flex flex-col items-center gap-10'>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />
    </main>
  )
}

export default App
