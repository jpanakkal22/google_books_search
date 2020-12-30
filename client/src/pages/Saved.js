import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import API from "../utils/API";
import Results from "../components/Results";
import "./style.css";

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
        })
        .catch(err => console.log(err));
    };

    return (
        <div id="saved">           
            <Row className="d-flex justify-content-center">
                <Col sm={12}>
                    <h1 className="text-center" id="savedH1">MY LIBRARY</h1>       
                </Col>
            
                {books.map(book => {
                    return (
                        <Col sm={4} className="d-flex justify-content-center">
                            <Results 
                            id={book._id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            image={book.image}    
                            link={book.link}
                            buttonName="Remove" 
                            load={loadBooks}               
                            />
                        </Col>
                    )
                })}                
            </Row>    
        </div>
    )
}

export default Saved