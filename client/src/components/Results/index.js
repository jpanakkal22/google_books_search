import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";
import "./style.css";

const Results = (props) => {
    
    const handleFormSubmit = event => {
        event.preventDefault();
    
        if(props.buttonName === "Save"){                   
        // Save selected book to database
        API.saveBook({
            title: props.title,
            author: props.authors,           
            image: props.image,
            link: props.link
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
        // Removed selected book from database and reload state
        else if (props.buttonName === "Remove") {
            API.deleteBook(props.id)
            .then(() => {
            props.load();
         })
        }
    }     

    return (       
        <Card style={{ width: '14rem', border: 'none' }}>
            <Card.Img variant="top" src={props.image} alt={props.title}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.authors}</Card.Text>                          
            </Card.Body>
            <Card.Footer>
                <Card.Link href={props.link} target="_blank" rel="noopener noreferrer"><Button variant="link">View</Button></Card.Link>                
                <Button variant="link" onClick={handleFormSubmit}>{props.buttonName}</Button>   
            </Card.Footer>
        </Card>             
    )
}

export default Results;