import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './08-useReducer/TodoApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Leyout } from './05-useLayout/Leyout'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { FormWhitCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
import './index.css'
// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)

