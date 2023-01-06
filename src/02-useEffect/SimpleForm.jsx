import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormStat] = useState({
        username: 'francisco',
        email: 'francisco@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {

      const {name, value} = target;
      setFormStat({
        ...formState,
        [name]: value        

      })

    }

    // useEffect( () => { 
    //   console.log('useEffect called.!')
    // }, []);
    
    // useEffect( () => { 
    //   console.log('useEffect formState change.!')
    // }, [formState]);

    // useEffect( () => { 
    //   console.log(' email change.!')
    // }, [email]);





  return (
    <>
        <h1>Formulario Simple</h1>
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

        {
          (username === 'francisco2') && <Message/> 
        }
    </>
  )
}
