import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { AppContext } from "./context/context";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  },[])

  return (
    <AppContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      openModal,
      setOpenModal
    }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
