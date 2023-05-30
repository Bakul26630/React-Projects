import React from "react";
const MovieCard = (props) => {
    return (

            <div className="card">
                <h1>{props.Title}</h1>
                <div className="image-container">
                    <img src={props.poster} alt={props.Title} className="img-fluid" />
                </div>
            </div>
    );
}

export default MovieCard