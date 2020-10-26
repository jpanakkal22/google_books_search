import React from "react";
import "./style.css";

function Results(props){
    return (          
        <div className="card m-4">
            <div className="row">
                <div className="col-md-2">
                    <img alt="..." className="img-fluid" src={props.image} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{props.title} by {props.author}</h5>
                        <p className="card-text">{props.description}</p>
                        <div>
                            <a href={props.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                            {/* <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
              
    )
}

export default Results;