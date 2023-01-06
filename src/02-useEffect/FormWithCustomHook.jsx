import { useEffect, useState } from "react"
import { useForm } from "../hook/useForm"

export const FormWhitCustomHook = () => {

  const {formState, onInputChange, username,email, password, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const {username, email, password} = formState;




  return (
    <>
        <h1>Formulario custom hook</h1>
        <hr />

        <input 
        className="form-control"
        placeholder="Username"
        name="username"
        type="text"
        value={username}
        onChange={onInputChange}
        />

        <input 
        className="form-control mt-2"
        placeholder="francisco@google.com"
        name="email"
        type="email" 
        value={email}
        onChange={onInputChange}
        />

        <input 
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        type="password" 
        value={password}
        onChange={onInputChange}
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
