import React from "react";

function Screen(props){

    return(
        <div className="screen">
            <div className="store"><h3 className="store-value m-0">{props.store}</h3></div>
            <div className="number"><h1 className="number-value m-0">{props.number}</h1></div>
        </div>
    );
}

export default Screen;