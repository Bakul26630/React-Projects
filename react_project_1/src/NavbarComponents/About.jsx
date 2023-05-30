import React from "react";
import Template1 from "../Static/Template1";
import about from "../Images/about.jpg";
const About = () => {
    return (<>
       <Template1 heading="Welcome to About Page " btn="Contact Us" img={about} link='/contact'/>
    </>);
}

export default About;