import { RequestHandler } from "express"
import { Todo } from "../models/todo"

const TODO : Todo[] = []
export const createTodo : RequestHandler = (req, res) => {
    // const text = (req.body as {text: string}).text
    const text = (<{text: string}>req.body).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({message: "Todo created successfully"});
}

export const getTodo : RequestHandler = (req, res) => {
    res.status(200).json(TODO);
}

export const updateTodo : RequestHandler<{todoId : string}> = (req, res) => {
    const todoId = req.params.todoId;
    const text = (req.body as { text: string }).text

    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

    if(todoIndex === -1) {
        throw new Error("Todo not found");
    }

    TODO[todoIndex] = new Todo(TODO[todoIndex].id, text);
    res.status(201).json({ message: "Todo updated successfully" });
}

export const deleteTodo : RequestHandler<{todoId: string}> = (req, res) => {
    const todoId = req.params.todoId;
    const text = (req.body as {text: string}).text;
    
    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

    if(todoIndex === -1){
        throw new Error("Todo not found");
    }

    TODO.splice(todoIndex, 1);   //splice(which element to remove, how much elements want to remove)
    res.status(200).json({message: "Todo deleted successfully"});
}