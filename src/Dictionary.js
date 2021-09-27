import React,{useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import "./App";
import Loader from "react-js-loader";

export default function Dictionary(props){

    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(){
     //documentation:https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handlekeywordChange(event){
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){
    return(
        <div className="Dictionary">
            <h1>Ling-con</h1>
            <h2>/Dictionary App/</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handlekeywordChange} defaultValue={props.defaultKeyword}/>
                <button type="search" className="button">Search</button>
            </form>
        
            <Results results={results}/>
        </div>
    );
}else {
    load();
    return(
        <div className={"row"}>
            <div className={"item"}>
                <Loader type="bubble-loop" bgColor={"#FFFFFF"}  color={'#0a2225'} size={100} />
            </div>
        </div>
    );

}
}