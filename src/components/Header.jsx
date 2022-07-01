import React from "react";
import Navbar from './Navbar'
function Header(){
    return(
        <div id='main' >
            <Navbar/>
           <div className="name">
            <h1><span>Autmobile</span>Company</h1>
            <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores voluptate quisquam culpa ut architecto voluptatem ad saepe natus, nisi maxime, quasi quam minima atque laboriosam. Enim eius minima blanditiis!
            </p>
            <a href='/' className="cv-btn">Download</a>
            </div> 
        </div>
    )
}
export default Header;