import React,{useState} from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
function Card(){

    const [number,setNumber]=useState("");
    const [store,setStore]=useState("");

    function handleClick(num){
        try{
            setNumber(pervValue=>{
                if(isNaN(Number(num))){
                    if(num==="="){
                    setStore(pervValue=>{
                            // eslint-disable-next-line no-eval
                            setNumber(eval(pervValue+number));
                            return "";
                    })
                    return "";
                    }
                    else if(num==="AC"){
                        setNumber("");
                        setStore("");
                        return;
                    }
                    setStore(pervValue=>{
                        // eslint-disable-next-line no-eval
                        return eval(pervValue+number.substring(0,number.length))+num;
                    })
                    return "";
                }
                return (pervValue+num)
                })
            }
        catch{
            console.log("koggg");
        }
    }
    return (
        <div className="card text-center p-0 col-lg-4 col-md-6 col-8">
            <div className="card-body p-0">
                <Screen number={number} store={store}></Screen>
                <Keypad handleClick={handleClick}></Keypad>
            </div>
        </div>
    );
}

export default Card;