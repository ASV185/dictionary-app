import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props){
    if (props.results){
    return (
        <div className="Results">
            <section>
            <h3>{props.results.word}</h3>
            {props.results.phonetics.map(function(phonetic,index){
                return(
                    <div key={index}>
                     <Phonetic phonetic={phonetic}/>
                    </div>
                );
                })}
            </section>
            {props.results.meanings.map(function(meaning,index){
                return (
                    <section key={index}>
                        <Meaning meaning={meaning}/>
                    </section>
                );
            })}
        </div>
    );
    }else{
        return null;
    }// Receive word searched, added two map functions to receive data for phonetics and meaning of word searched
}