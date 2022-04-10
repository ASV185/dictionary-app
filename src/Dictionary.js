import React,{useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Loader from "react-js-loader";
import Photos from "./Photos";


export default function Dictionary(props){
    // useStates for dictionary
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

    function handleDictionResponse(response){
        setResults(response.data[0]);
    } // Receive data from API for Dictionary information

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    } //Received data from Pexels for photos

    function search(){

     //documentation:https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey="563492ad6f917000010000014927e3766700435cad1a0efc634e479c";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers={Authorization:`Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
    } // When search in input received data using APIs

    function handleSubmit(event){
        event.preventDefault();
        search();
    } //Submit event 
    function handlekeywordChange(event){
        setKeyword(event.target.value);
    } // Event for change in words
    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){
    return(
        <div className="Dictionary">
            <div className="row">
                <div className="col-md-6">
                    <h1>Ling-con</h1>
                    <h2>/Dictionary App/</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handlekeywordChange} defaultValue={props.defaultKeyword}/>
                        <button type="search" className="button">Search</button>
                    </form>
                    <br/>
                    <Photos photos={photos}/>
                </div>
                <div className="col-md-6">
                  <Results results={results}/>  
                </div> 
            <footer>
                This website was created by Amanda Ventura and it is {""} 
                <a href="https://github.com/ASV185/dictionary-app" target="_blank" rel="noreferrer">
                       open-sourced.
                </a>
            </footer> 
            </div>
        </div>
    ); // If results are received from APIs, to return API information.
}else {
    load();
    return(
        <div className={"row"}>
            <div className={"item"}>
                <Loader type="bubble-loop" bgColor={"#FFFFFF"}  color={'#0a2225'} size={100} />
            </div>
        </div>
    );// If results are not received by APIs, to see loader while waiting for information.

 }
}