import React from "react";
import { useNavigate,useLocation} from "react-router-dom";

import Menu from "./Menu";
const About = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (<>
        <Menu />
        <h1>This is {props.title}</h1>
        <p>Current path is: {location.pathname}</p>
        <button onClick={()=>{navigate("/")}}>Go to Home page</button>
        <button onClick={()=>{navigate("/contact")}}>Go to Contact page</button>
        <button onClick={()=>{navigate(-1)}}>Back Page</button>
        {
            location.pathname==='/about' ? <button onClick={()=>{
                alert("You Got Me!!");
            }}>Got Me</button>:null
        }
    </>);
}

export default About;