import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    console.log (props.phonetic);
    return(
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
            </a>
            <br/>
            <span className="text">/{props.phonetic.text}/</span>
        </div>
    ); //Received audio phonetic information from API
}