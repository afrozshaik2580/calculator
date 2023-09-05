import React from "react";
import Row from "./Row"

function Keypad(props){

    return(
        <div className="keypad container">
            <Row handleClick={(num)=>{props.handleClick(num)}} values={["9","8","7","/"]}></Row>
            <Row handleClick={(num)=>{props.handleClick(num)}} values={["6","5","4","*"]}></Row>
            <Row handleClick={(num)=>{props.handleClick(num)}} values={["3","2","1","-"]}></Row>
            <Row handleClick={(num)=>{props.handleClick(num)}} values={["AC","0","=","+"]}></Row>
        </div>
    );
}

export default Keypad;