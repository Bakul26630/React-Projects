import React from "react";
import "../Static/Template1.css";
import { NavLink } from "react-router-dom";

const Template = (props)=>{
    return (<>
        <section id="header">
            <div className="container-fluid d-flex flex-column justify-content-center">
                <div className=" row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mt-5 order-2 order-lg-1 order-md-1 d-flex flex-column justify-content-center">
                                <h1 className="t-line">{props.heading}
                                <strong className="brand-name mt-0">G-Technical</strong></h1>
                                <h2 className="t-line-2 mt-3">We are the best development team for website</h2>
                                <div className="mt-3">
                                    <NavLink className="btn-get-started" to={props.link}>{props.btn}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2">
                                <img src={props.img} alt="G-Technical" className="img-fluid img-set"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Template;