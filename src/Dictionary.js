import React,{useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import "./App";

export default function Dictionary(props){

    let [keyword, setKeyword]=useState(props.defaultkeyword);
    let [results, setResults]=useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }
       //documentation:https://dictionaryapi.dev/
    function handlekeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <h1>Ling-con</h1>
            <h2>/Dictionary App/</h2>
            <form onSubmit={search}>
                <input type="search" onChange={handlekeywordChange} defaultValue={props.defaultkeyword}/>
                <button type="button" className="button">Search</button>
            </form>
        
            <Results results={results}/>
        </div>
    );
}