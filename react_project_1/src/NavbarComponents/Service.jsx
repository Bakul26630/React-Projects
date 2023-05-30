import React from "react";
import '../Static/Service.css';
import Card from "../Static/Card";
import Data from '../SData';
const Service = () => {
    return (<>
        <div className="container-fluid text-center">
            <h1 className="heading">Our <strong>Services</strong></h1>
        </div>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Data.map((val,index)=>{
                                return(<Card data={val} key={index}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Service;