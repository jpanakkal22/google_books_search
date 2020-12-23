import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./style.css";

function JmboTron() {
    return (
        <Jumbotron fluid>
            <Container className="d-flex flex-column justify-content-center text-center pt-5">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead" id="lead">Search the world's most comprehensive index of full-text books.</p>
            </Container>
        </Jumbotron>           
    )     
}

export default JmboTron;