import React from "react";
import { NavLink,Outlet,useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (<>
        <ul>
                    <li><NavLink to="/downloadcv" className='menu-item'>Download CV</NavLink></li>
                    <li><NavLink to="/mygallery" className='menu-item'>My Gallery</NavLink></li>
        </ul>
        <h1>This is Home Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ut blanditiis eum mollitia sint, expedita saepe veritatis ex dicta, accusamus commodi possimus cupiditate doloremque! Sequi eligendi accusamus quam aliquam sapiente officia neque consequuntur. Mollitia minus obcaecati nesciunt rem asperiores, fugiat, sed, culpa necessitatibus ullam laborum expedita ab voluptatem eligendi dolorum illo amet laudantium corporis? Accusantium odit perspiciatis accusamus minima consectetur, assumenda porro cumque ex natus esse fuga alias nulla quisquam sed molestiae laboriosam ipsa ratione earum voluptatem? Commodi possimus ipsa repellendus nemo architecto, facilis dolores aliquid nam debitis distinctio id perspiciatis qui praesentium odit rerum quasi quidem iusto ipsam fugit.</p>
        <button onClick={()=>{
            navigate(-1)
        }}>Back Page</button>
        <button onClick={()=>{
            navigate('/contact')
        }}>Go To Contact Page</button>
        <button onClick={()=>{
            navigate('/about')
        }}>Go To About Page</button>
       
        <Outlet />
    </>);
}

export default Home;