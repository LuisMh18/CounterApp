
import { useContext } from "react";
import { UserContext } from "../07-useReducer/context/UserContext";

export const AboutPage = () => {

  const { user } = useContext( UserContext );

    return (
      <>
        <h1>AboutPage <small>{ user?.name }</small> </h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

      </>
    )
  }
  