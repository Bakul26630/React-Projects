import React, { createContext, useState } from "react";
import Menu from "./Menu";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const image = createContext();
const Search = () => {
    const [img, setImg] = useState(' ');
    const inputEvent = (e) => {
        setImg(e.target.value);
    }
    return (<>
        <Menu />
        <div className="mt-5 d-flex justify-content-center">
            <SearchField onSelect={inputEvent} content={img} />
        </div>
        <image.Provider value={img}>
            <SearchResult/>
        </image.Provider>
    </>)
}

export default Search;
export {image}