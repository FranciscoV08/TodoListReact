import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo}) => {

    // console.log(onDeleteTodo)

    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                                                            //PADRE PASA PROP AL HIJO Y AL NIETO
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onDeleteTodo={ onDeleteTodo}
                            onToggleTodo={onToggleTodo}
                            />
                    ))
                }
            </ul>

        </>
    )
}
