import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";
import R_M from './imgs/Rick-and-Morty.png'


const Header = (props) => {
    return (
        <header>
            <nav>
            <article id="flex-botones">
                <button className="desktop-visible" onClick={() => props.setPage(props.page-1)}>Page {props.page-1}</button>
                <article id="nombre">
                    <Link to="/">
                    <figure>
                        <img src={R_M} />
                    </figure>
                    </Link>
                </article>
                <button className="desktop-visible" onClick={() => props.setPage(props.page+1)}>Page {props.page}</button>
            </article>
            </nav>
        </header>
    );
}

export default Header;
