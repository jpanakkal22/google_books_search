import React from "react";
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
        <div className="card m-4">
            <div className="row">
                <div className="col-md-2">
                    <img alt="..." className="img-fluid" src={props.image} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{props.title} by {props.author}</h5>
                        <p className="card-text" id="pCard">{props.description}</p>
                        <div>
                            <a href={props.link} className="btn badge-pill mt-3" target="_blank" rel="noopener noreferrer">View</a>
                            <button onClick={handleFormSubmit} className="btn badge-pill mt-3 ml-3">{props.buttonName}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              
    )
}

export default Results;