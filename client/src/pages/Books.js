import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formInput, setFormInput] = useState("");

  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.search("Javascript")
  //     .then(res => {
  //       // console.log(res.data.items[0].volumeInfo.title);
  //       setBooks(res.data.items);
  //       console.log(res.data.items[0]);
  //     })
  //     .catch(err => console.log(err));
  // }; 
  
  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setFormInput(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.search(formInput)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  };
  
  return (
    <Container>
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
                  type="success"
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
        <h1 className="text-center">No Books to Display</h1>
      ) : (
      <div>
{books.map(book => {
      return (
        <Results 
        key={book.id} 
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        image={book.volumeInfo.imageLinks.smallThumbnail}
        description={book.searchInfo.textSnippet}
        link={book.volumeInfo.infoLink}
        />)
    })}
      </div>      
    
      )}
    </Col>
  </Row>
    </Container>
    
        



    
    
  
  )
  
    
}

export default Books;
