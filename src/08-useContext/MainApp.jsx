import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "../07-useReducer/context/UserProvider";
import { AboutPage } from "./AboutPage";
import { HomePage } from './HomePage';
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />      

      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />
        {/* <Route path="/*" element={ <LoginPage /> } /> Para rutas que no existen, (NO CAMBIA EL PATH) */}
        <Route path="/*" element={ <Navigate to="/about" /> } /> {/* Para rutas que no existen, te navega a dónde le especifiques */}
      </Routes>

    </UserProvider>
  )
}

