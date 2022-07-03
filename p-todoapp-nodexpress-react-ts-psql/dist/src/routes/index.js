"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todo.controller"
const todo_controller_1 = require("../controllers/todo.controller");
// import getTodoss from "../controllers/todo.controller"
// import addTodoo from "../controllers/todo.controller"
// import updateTodoo from "../controllers/todo.controller"
// import deleteTodoo from "../controllers/todo.controller"
const router = (0, express_1.Router)();
// router.get("/todos", getTodos);
// router.post("/add-todo", addTodo);
// router.put("/edit-todo/:id", updateTodo);
// router.delete("/delete-todo/:id", deleteTodo);
router.get("/todos", todo_controller_1.getTodoss);
router.post("/add-todo", todo_controller_1.addTodoo);
router.put("/edit-todo/:id", todo_controller_1.updateTodoo);
router.delete("/delete-todo/:id", todo_controller_1.deleteTodoo);
exports.default = router;
