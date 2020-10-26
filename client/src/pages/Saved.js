import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Results from "../components/Results";
import { Container } from "../components/Grid";


function Saved() {
    const [books, setBooks] = useState([]);

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
        .then(res => {
            setBooks(res.data)
            console.log(res.data)
        }
           
        )
        .catch(err => console.log(err));
    };

    return (
        <Container>
            <Nav />
            <Wrapper>
                {books.map(book => {
                    return <Results 
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    image={book.image}    
                    link={book.link}                
                    />
                })}                
            </Wrapper>
            
        </Container>
    )
}

export default Saved