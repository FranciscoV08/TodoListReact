import { useState } from "react"
import { useCounter } from "../hook"
import { Small } from "./Small"

export const Memorize = () => {

    const { counter, incremet } = useCounter(10)
    const [show, setShow] = useState(true)




  return (
    <>

        <h1>Counter: <Small value={ counter }/> </h1>
        <hr />

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
