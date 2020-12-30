import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";
import "./style.css";

function Results(props){
    
    const handleFormSubmit = event => {
        event.preventDefault();
    
        if(props.buttonName === "Save"){
        // Save selected book to database
        API.saveBook({
            title: props.title,
            author: props.author[0],
            description: props.description,
            image: props.image,
            link: props.link
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
        // Removed selected book from database and reload state
        else if (props.buttonName === "Remove") {
            console.log(event.target)
            API.deleteBook(props.id)
            .then(res => {
            props.load();
         })
        }
    }     

    return (       
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} alt={props.title}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>This is placeholder text. This is placeholder text. This is placeholder text.</Card.Text>
                <Card.Link href={props.link} target="_blank" rel="noopener noreferrer">View</Card.Link>
                <Button variant="primary" onClick={handleFormSubmit}>{props.buttonName}</Button>
            </Card.Body>
        </Card>             
    )
}

export default Results;