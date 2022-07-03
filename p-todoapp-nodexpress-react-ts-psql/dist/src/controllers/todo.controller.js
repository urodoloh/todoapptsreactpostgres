"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoo = exports.updateTodoo = exports.addTodoo = exports.getTodoss = void 0;
//CONNECTION POOL CONFIG import
const index_1 = __importStar(require("../db/index"));
//SCHEME Import
// GET
const getTodoss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield (0, index_1.todotype)(index_1.default).find().all();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
    ;
});
exports.getTodoss = getTodoss;
// INSERT/ADD
const addTodoo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, status } = req.body;
        const newTodo = yield (0, index_1.todotype)(index_1.default).insert({ name, description: description, status: status });
        const allTodos = yield (0, index_1.todotype)(index_1.default).find().all();
        res
            .status(201)
            .json({ message: "Todo added", newTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
    ;
});
exports.addTodoo = addTodoo;
//UPDATE
const updateTodoo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const updateTodo = yield (0, index_1.todotype)(index_1.default).update({ id: id }, req.body);
        const allTodos = yield (0, index_1.todotype)(index_1.default).find().all();
        res.status(200).json({
            message: "Todo updated",
            updateTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
    ;
});
exports.updateTodoo = updateTodoo;
//DELETE
const deleteTodoo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const deletedTodo = yield (0, index_1.todotype)(index_1.default).delete({ id: id });
        const allTodos = yield (0, index_1.todotype)(index_1.default).find().all();
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
    ;
});
exports.deleteTodoo = deleteTodoo;
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
