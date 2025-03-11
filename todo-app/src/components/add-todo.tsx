import { Button } from "./ui/button"
import { Input } from "./ui/input"

const AddTodo = () => {
  return (
    <form className="flex items-center gap-5 justify-center">
        <Input className="w-xl" type="text" placeholder="Write a new todo..." />
        <Button>Add Todo</Button>
    </form>
  )
}

export default AddTodo