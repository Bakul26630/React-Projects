import React from "react";
import Menu from "./Menu";
import { useNavigate,useParams} from "react-router-dom";
const Contact = ()=>{
    const navigate = useNavigate();
    const{fname,lname}=useParams();
    return(<>
        <Menu/>
        <h1>This is Contact Page</h1>
        <h1>Hello {fname} {lname}</h1>
        <button onClick={()=>{navigate("/")}}>Go to Home page</button>
        <button onClick={()=>{navigate("/about")}}>Go to About page</button>
        <button onClick={()=>{navigate(-1)}}>Back Page</button>
    </>);
}

export default Contact;