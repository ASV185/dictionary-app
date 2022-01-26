import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms){
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function(synonyms,index){
                    return <button type="button" className="btn btn-light" key={index}>{synonyms}</button>
                })}
            </ul>
        );
    }else{
        return null;
    }// Using map function to receive synonyms data information 
}