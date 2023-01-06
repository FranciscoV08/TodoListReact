import { useRef } from "react"

export const FocusScreen = () => {

    //REnderisa 1 sola vez | cuando la referencia cambia no renderizara  
    const inputRef = useRef()


    const onClick = () => {
        //  document.querySelector('input').select()
        inputRef.current.select()
    } 

  return (
    <>

        <h1>FocusScreen</h1>
        <hr />


        <input 
        ref={ inputRef }
        type="text"
        placeholder="ingrese su nombre"
        className="form-control"
         />

         <button 
             className="btn btn-primary my-2"
             onClick={onClick}>  
            set Focus
         </button>
    
    </>
  )
}
