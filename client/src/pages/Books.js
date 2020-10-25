import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.search("Javascript")
      .then(res => {
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch(err => console.log(err));
  };
    
  return <h1>Hello Google!</h1>
    
}

export default Books;
