import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap/';
import Input from "../components/Input";
import Results from "../components/Results";
import API from "../utils/API";

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
      <Row>
        <Col size="xs-12">
          {!books.length ? (
          <h1>No Books to Display</h1>
          ) : (
          <div>
          {books.map(book => {
          return (
          <Results 
            key={book.id} 
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            buttonName="Save"
          >
          </Results>)
          })}
          </div>      
          )}
        </Col>
      </Row>
    </div>
       

  )   
}

export default Search;
