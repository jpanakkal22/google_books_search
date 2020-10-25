import React, { useState, useEffect } from "react";
import Results from "../components/Results";
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
        // console.log(res.data.items[0].volumeInfo.title);
        setBooks(res.data.items);
        console.log(res.data.items[0]);
      })
      .catch(err => console.log(err));
  };    
  
  return (
    books.map(book => {
      return (
        <Results 
        key={book.id} 
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        image={book.volumeInfo.imageLinks.smallThumbnail}
        description={book.searchInfo.textSnippet}
        link={book.volumeInfo.infoLink}
        />)
    })
    
  
  )
  
    
}

export default Books;
