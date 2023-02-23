import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BookContainer from "../pages/BookContainer";
import Login from "../pages/Login"
import NewBook from "../pages/NewBook";
import NavBar from "./NavBar";


const App = () => {

  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((wizard) => setWizard(wizard));
      }
    });
  }, []);

  if (!wizard) return <Login onLogin={setWizard} />;

  return (
    <>
      <NavBar wizard={wizard} setWizard={setWizard} />
      <main>
        <Routes>
          <Route path="/new" element={<NewBook/>}/>
          <Route path="/" element={<BookContainer/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
