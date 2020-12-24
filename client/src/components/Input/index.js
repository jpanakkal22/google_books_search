import React from "react";
import { Row, Col } from 'react-bootstrap/';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";

function Input(props) {
  return (    
    <Form>       
      <Row>
        <Col sm={10}>
        <Form.Group controlId="formBasicSearch">                
        <Form.Control
          id="formInput"
          size="lg" 
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />  
        </Form.Group>
        </Col>
        <Col sm={2}>
        <Button variant="primary" onClick={props.onClick} id="formButton">
          Submit
        </Button>
        </Col>
      </Row>
      
    </Form>
  );
}

export default Input;
