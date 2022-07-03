import { Router } from "express"
// import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todo.controller"
import { getTodoss, addTodoo, updateTodoo, deleteTodoo } from "../controllers/todo.controller"

// import getTodoss from "../controllers/todo.controller"
// import addTodoo from "../controllers/todo.controller"
// import updateTodoo from "../controllers/todo.controller"
// import deleteTodoo from "../controllers/todo.controller"

const router: Router = Router()

// router.get("/todos", getTodos);

// router.post("/add-todo", addTodo);

// router.put("/edit-todo/:id", updateTodo);

// router.delete("/delete-todo/:id", deleteTodo);


router.get("/todos", getTodoss);

router.post("/add-todo", addTodoo);

router.put("/edit-todo/:id", updateTodoo);

router.delete("/delete-todo/:id", deleteTodoo);

export default router;