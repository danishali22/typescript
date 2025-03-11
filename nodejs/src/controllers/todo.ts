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

