"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "marked todo",
            description: "hello",
            done: false
        };
    }
    create(todoCreationParams) {
        return {
            id: "1",
            title: "marked todo",
            description: "hello",
            done: false
        };
    }
}
exports.TodoService = TodoService;
