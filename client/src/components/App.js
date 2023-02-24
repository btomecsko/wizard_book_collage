import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';

import BookContainer from "../pages/BookContainer";
import Login from "../pages/Login"
import NewBook from "../pages/NewBook";
import PhotoCarousel from "./PhotoCarousel";
import NavBar from "./NavBar";
import AddPhoto from "./AddPhoto";


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
          <Route path="/photos" element={<PhotoCarousel
          wizard={wizard}
          />}/>
          <Route path="/addphoto" element={<AddPhoto
          wizard={wizard}
          />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
