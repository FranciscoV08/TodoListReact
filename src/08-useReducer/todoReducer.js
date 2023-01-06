


export const todoReducer = (initialState = [], action) => {

    //Una accion llamada ABC
    switch (action.type) {
        case 'Add Todo':
            //Si no la tenemos marca un error
            return [...initialState, action.payload]

        case 'Remove Todo':
            //NO HAY QUE MUTAR EL ARREGLO
            return initialState.filter(todo => todo.id !== action.payload)
        case 'Toggle Todo':
            //NO HAY QUE MUTAR EL ARREGLO
            return initialState.map( todo => {

                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })
        default:
            return initialState;
    }

}