
import { useTodo } from "../hook/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
// import { todoReducer } from "./todoReducer"



export const TodoApp = () => {
    
    const { todos, todosCount, pendingTodosCount,  handleNewTodo, handleDeletTodo, handeToggleTodo } = useTodo()

    return (

        <>
            <h1>TodoApp: { todosCount() }, <small>pendientes:{pendingTodosCount()}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* Todo List */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo={ handleDeletTodo }
                        onToggleTodo={ handeToggleTodo}
                        />
                    {/* Todo List fin */}
                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />

                </div>
            </div>
        </>


    )
}
