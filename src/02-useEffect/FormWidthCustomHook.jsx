import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";


export const FormWidthCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username:'',
        email:"",
        password:""
    });

    // const { username, email, password } = formState;

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
      <h1>Formulario con custom Hook</h1>
      <hr/>
      <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={ onInputChange } />
      <input type="text" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={ onInputChange } />
      <input type="text" className="form-control mt-2 mb-2" placeholder="Contraseña" name="password" value={password} onChange={ onInputChange } />

      <button className="btn btn-danger" onClick={ onResetForm }>Limpiar</button>


    </>
  )
}
