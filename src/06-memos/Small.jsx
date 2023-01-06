import { memo } from 'react'

//Memoriza para no realizar render innecesario | es recomendable en archivos grande
export const Small = memo( ({value}) => {

    console.log('Me volví a dibujar :(')
    



  return (

    <small>{ value }</small>
  )
})
