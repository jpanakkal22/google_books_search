import React from "react";


function Wrapper(props) {
    return (
        <div className="container" id="wrapper">{props.children}</div>
    )
}

export default Wrapper;