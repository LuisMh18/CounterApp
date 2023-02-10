import { useContext } from "react";
import { UserContext } from "../07-useReducer/context/UserContext";

export const LoginPage = () => {

   const { user, setUser } = useContext( UserContext );

    return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

        <button className="btn btn-primary" onClick={ () => setUser({id:1, name:"Luis Mondragón", email:"luis_mh@outlook.es"}) }>
          Establecer usuario
        </button>

      </>
    )
  }
  