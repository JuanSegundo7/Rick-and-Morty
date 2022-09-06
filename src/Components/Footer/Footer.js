import React from 'react';
import "./Footer.css"
import {Link} from "react-router-dom"

import R_M2 from "./img/rick&morty.png"


const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <figure>
                    <img src={R_M2}/>
                </figure>
            </Link>
            <h4>Project by Juan Segundo Martinez - 2022</h4>
        </footer>
    );
}

export default Footer;
