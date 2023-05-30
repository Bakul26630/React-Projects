import React from "react";
import Template1 from "../Static/Template1";
import home from "../Images/home.jpg";
const Home = () => {
    return (<>
       <Template1 heading="Grow Your Business with " btn="Get Started" img={home} link="/service"/>
    </>);
}

export default Home;