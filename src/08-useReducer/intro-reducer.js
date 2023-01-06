
//Arreglo de objetos ESTADO INICIAL
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,

}];
//SE LO MANDAMOS AL 
//REDUCER 
const todoReducer = (state = initialState,  action = {} ) => {

    if( action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: true,
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction )

//NO SE HACE ESTO, LO QUE SE LLAMA UNA MUTACIÓN 
// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del Alma',
//     done: true,

// })

console.log({state: todos});
