import React from "react";
//SE momorizo la funcion con memo / memorizamos para funciones grandes 
export const ShowIncrement =  React.memo(({increment}) => {

    console.log('Me volvi a generar :(')

  return (
    <button 
        className="btn btn-primary"
        onClick={ () => {
            //Argumentos en funcion memorizadas
            increment( 5 );
        }}
        >
            ShowIncrement
        </button>
  )
})
