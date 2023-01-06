import { useEffect } from "react"



export const Message = () => {

    useEffect(() => {

      const onMouseMove = ({x, y}) => {
        const coords = { x, y };

        console.log( coords )
      }

      window.addEventListener('mousemove', onMouseMove);
      console.log('Inicio el evento ');
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        console.log('removio el evento');
      }
    }, [])
     


  return (
    <>  
        <h3>Usuario Ya existe </h3>

    </>    

  )
}
