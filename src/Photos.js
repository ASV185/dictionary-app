import React from "react";
import "./Photo.css";

export default function Photos(props){
   if(props.photos){
   return(
       <section className="Photos">
           <div className="row">
               {props.photos.map(function(photo,index){
                   console.log(props.photos);
                   return(
                       <div className="col-4" key={index}>
                           <a href={photo.src.original} target="_blank" rel="noreferrer">
                           <img src={photo.src.landscape} className="img-fluid" alt="dictionary"/>
                           </a>
                        </div>
                   );
               })}
           </div>
       </section>
   );
}else{
    return null;
 }//Used another map function to receive photos from API
}