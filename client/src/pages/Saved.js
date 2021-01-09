import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import API from "../utils/API";
import Results from "../components/Results";
import "./style.css";

const Saved = () => {
    const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    const loadBooks = () => {
        API.getBooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err));
    };

    return (
        <Container id="saved">  
            <h1 className="text-center" id="savedH1">MY LIBRARY</h1>           
            <Row className="d-flex justify-content-center">                        
                {books.map(book => {
                    return (                    
                        <Results 
                        id={book._id}
                        key={book._id} 
                        title={book.title}
                        authors={book.author}
                        image={book.image}    
                        link={book.link}
                        buttonName="Remove" 
                        load={loadBooks}               
                        />                       
                    )
                })}                
            </Row>    
        </Container>
    )
}

export default Saved