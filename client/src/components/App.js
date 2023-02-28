import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';

import BookContainer from "../pages/BookContainer";
import Login from "../pages/Login"
import NewBook from "../pages/NewBook";
import PhotoContainer from "./PhotoContainer";
import NavBar from "./NavBar";
import AddPhoto from "./AddPhoto";


const App = () => {

  const [wizard, setWizard] = useState(null);
  const [bookID, setBookID] = useState(false)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((wizard) => setWizard(wizard));
      }
    });
  }, []);

  if (!wizard) return <Login onLogin={setWizard} />;

  
  const enterBookID = (id) => {
    setBookID(id)
  }

  return (
    <>
      <NavBar wizard={wizard} setWizard={setWizard} />
      <main>
        <Routes>
          <Route path="/new" element={<NewBook/>}/>
          <Route path="/" element={<BookContainer 
          enterBookID={enterBookID}
          />}/>
          <Route path="/photos" element={<PhotoContainer
          bookID={bookID}
          />}/>
          <Route path="/addphoto" element={<AddPhoto
          bookID={bookID}
          />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
