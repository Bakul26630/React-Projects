import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (<>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card h-100">
                <img src={props.data.imgsrc} className="card-img-top img-fluid h-75" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.Title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    </>);
}

export default Card;