import { Todo } from "./todo";

export type TodoCreationParams=Pick<Todo,"title" | "description">

export class TodoService{
    public get(todoId:string):Todo{
        return {
            id:todoId,
            title:"marked todo",
            description:"hello",
            done:false
        }
    }
    public create(todoCreationParams:TodoCreationParams):Todo{
        return {
            id:"1",
            title:"marked todo",
            description:"hello",
            done:false
        }
    }
    
}