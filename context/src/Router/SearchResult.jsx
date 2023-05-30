import React,{useContext} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {image} from './Search'
const SearchResult = ()=>{
    const imgLink = useContext(image);
    return(<>
        <div className="mt-5 d-flex justify-content-center">
        {
            imgLink!==""?
            <img src={`https://source.unsplash.com/900x500/?${imgLink}`} alt={imgLink}/>
            :null
        }
        </div>
    </>);
};

export default SearchResult;