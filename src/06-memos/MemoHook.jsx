import { useMemo, useState } from "react"
import { Small } from "./Small"
import { useCounter } from "../hook"




const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++ ){
        console.log('Ahi vamos...')

    }
    return `${ iterationNumber } iteraciones realizadas `;
}



export const MemoHook = () => {

    const { counter, incremet } = useCounter(500)
    const [show, setShow] = useState(true)

    //USE MEMO memoriza el valor para que no renderize lo que no queremos 
    //Memoriza heavystuff mientras counter cambie 
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>

        <h1>Counter: <Small/> { counter } </h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button 
            className="btn btn-primary"
            onClick={ () => incremet() }
            >
            +1
        </button>

        <button 
            className="btn btn-outline-primary"
            onClick={ () => setShow(!show)}
        >
            show/Hide {JSON.stringify(show)}
        </button>

    </>
  )
}
