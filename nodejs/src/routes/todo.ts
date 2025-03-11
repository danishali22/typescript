import express from "express";
import { createTodo } from "../controllers/todo";

const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get();
router.route("/:todoId").patch();
router.route("/:todoId").delete();

export default router;