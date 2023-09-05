import React from "react";

function Row(props){

    const [a,b,c,d]=props.values;
    
    function handleClick(event){
        props.handleClick(event.target.innerHTML);
    }
    
    return (
        <div className="row">
            <button onClick={handleClick} className="btn col-3">{a}</button>
            <button onClick={handleClick} className="btn col-3">{b}</button>
            <button onClick={handleClick} className="btn col-3">{c}</button>
            <button onClick={handleClick} className="btn col-3">{d}</button>
        </div>
    );
}

export default Row;