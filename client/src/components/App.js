import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BookContainer from "../pages/BookContainer";
import Login from "../pages/Login"
import NewBook from "../pages/NewBook";
//import PhotoContainer from "./PhotoContainer";
import NavBar from "./NavBar";
import AddPhoto from "./AddPhoto";

const App = () => {

  const [wizard, setWizard] = useState(null);
  const [books, setBooks] = useState([])
  const [bookID, setBookID] = useState(1)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((wizard) => setWizard(wizard));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/books')
    .then(res => res.json())
    .then(data => setBooks(data))
}, [])

const enterBook = (id) => {
  setBookID(id)
}
  
if (!wizard) return <Login onLogin={setWizard} />;

  return (
    <>
      <NavBar wizard={wizard} setWizard={setWizard} />
      <main>
        <Routes>
          <Route path="/" element={<BookContainer
          books={books}
          enterBook={enterBook}
          bookID={bookID}
          />}/>
          <Route path="/new" element={<NewBook/>}/>
          <Route path="/addphoto" element={<AddPhoto/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
