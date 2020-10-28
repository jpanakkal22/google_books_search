import React, { useState } from "react";
import Results from "../components/Results";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";


function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formInput, setFormInput] = useState("");

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
    <Row>
      <Col size="md-12">
        <form>
          <Container>
            <Row>
              <Col size="xs-9 sm-10">
                <Input
                name="bookSearch"
                value={formInput}
                onChange={handleInputChange}
                placeholder="Search For a Book"
                />
              </Col>
              <Col size="xs-3 sm-2">
                <Button
                onClick={handleFormSubmit}
                className="input-lg"
                >
                Search
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
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
