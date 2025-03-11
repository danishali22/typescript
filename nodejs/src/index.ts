import express, { NextFunction, Request, Response } from "express";
import todoRoutes from "./routes/todo"
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/todos", todoRoutes);

// middleware to handle error for any other request
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(PORT => {
    console.log(`Server listening on port ${PORT}`)
});