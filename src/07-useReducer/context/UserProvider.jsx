import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//     id:1,
//     name:"Luis Mondragón",
//     email:"luis_mh@outlook.es"
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user:user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}