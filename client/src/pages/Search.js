import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap/';
import Jmbotron from "../components/Jmbotron";
import Input from "../components/Input";
import Results from "../components/Results";
import API from "../utils/API";
import "./style.css";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formInput, setFormInput] = useState("");

  // Use form input to set state
  const handleInputChange = event => {    
    const { value } = event.target;
    setFormInput(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.search(formInput)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }; 
  
  return (
    <div>
      <Jmbotron />
      <Container>    
        <Row className="d-flex justify-content-center">
          <Col sm={8}>        
            <Input 
            name="bookSearch" 
            value={formInput}
            onChange={handleInputChange}
            placeholder="Search by author, title or keyword"
            onClick={handleFormSubmit}
            />
          </Col>
        </Row>      
        {!books.length ? (
          <Row className="d-flex justify-content-center">
            <Col sm={12} className="d-flex justify-content-center">
            <h2 className="text-center mt-3">No Books to Display</h2>
            </Col>
          </Row>
        ) : (
          <Row>            
            {books.map(book => {
              return (
                <Col sm={4} className="d-flex justify-content-center">
                  <Results 
                    key={book.id} 
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    buttonName="Save"
                  />
                </Col>
              )
            })}            
          </Row>          
        )}        
      </Container>
    </div>    
  )   
}

export default Search;
