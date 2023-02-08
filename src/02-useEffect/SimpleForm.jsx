import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState ] = useState({
        username:'LuisMh18',
        email:"luis_mh@outlook.es"
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log({ name, value });
        setFormState({
            ...formState,
            [name]:value
        });
    }

    useEffect(()=>{
        //console.log("Se llamo el useEffect por primera vez");
    }, []); //si se pone un [] vacio significa que queremos que el useEffect se dispare solo una vez, cuando el componente es llamado por primera vez


    useEffect(()=>{
        //console.log("Se llamo el useEffect porque cambio el estado del formulario");
    }, [formState]);

    useEffect(()=>{
        //console.log("Cambio el valor del email");
    }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr/>
      <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={ onInputChange } />
      <input type="text" className="form-control mt-2 mb-2" placeholder="Email" name="email" value={email} onChange={ onInputChange } />

        {
            (username === 'LuisMh18') && <Message />
        }


    </>
  )
}
