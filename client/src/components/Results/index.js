import React from "react";
import "./style.css";

function Results(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="row no-gutters">
            <div className="col-md-3">
                <img src={props.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-9">
                <div className="card-body">
                    <h5 className="card-title">Title: {props.title} <br/> Author: {props.author}</h5>
                    <p className="card-text">{props.description}</p>
                    <a
                target="_blank"
                href={props.link}
                rel="noopener noreferrer"
              >
                Go to book!
              </a>

                    
                </div>
            </div>
        </div>
    </div>
                </div>
            <div className="card mb-3">
        
            </div>
        </div>
    
    
        
    )
}

export default Results;