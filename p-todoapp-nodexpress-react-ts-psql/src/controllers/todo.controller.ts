import { Response, Request } from "express" //Hello There!

//CONNECTION POOL CONFIG import
import db, {sql, todotype} from '../db/index';

//TYPES import
import { InterTodo } from '../types/todoTypes' 

//SCHEME Import


// GET
const getTodoss = async (req: Request, res: Response)=> {
  try {
    const todos = await todotype(db).find().all();
    res.status(200).json({todos});
  } catch (error) {
    throw error
  };
};

// INSERT/ADD
const addTodoo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {name, description, status} = req.body as Pick<InterTodo, "name" | "description" | "status">;

    const newTodo = await todotype(db).insertOrUpdate(['name'], {name, description: description, status: status });

    const allTodos = await todotype(db).find().all();

    res
      .status(201)
      .json({ message: "Todo added", newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  };
};

//UPDATE
const updateTodoo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id:number = Number(req.params.id)
    const updateTodo = await todotype(db).update({id:id}, req.body)

    const allTodos = await todotype(db).find().all();
    res.status(200).json({
      message: "Todo updated",
      updateTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error;
  };
};

//DELETE
const deleteTodoo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id:number = Number(req.params.id);
    const deletedTodo = await todotype(db).delete({id:id})

    const allTodos = await todotype(db).find().all();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error;
  };
};

export { getTodoss, addTodoo, updateTodoo, deleteTodoo }

// async function getTodos(name: string) {
//   return await todotype(db).find({name});
// }

// async function addTodo(name: string, description: string, status: number) {
//   await todotype(db).insert({name, description: description, status: status});
// }

// async function updateTodo(name: string, description: string) {
//   await todotype(db).update({name}, {description: description});
// }

// async function deleteTodo(name: string){
//   await todotype(db).delete({name});
// }

// export { getTodos, addTodo, updateTodo, deleteTodo }