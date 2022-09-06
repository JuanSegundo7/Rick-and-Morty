import React from 'react';
import "./ArticleC.css"
import Span from './span'
import {Link} from "react-router-dom"


const ArticleCharacters = (props) => {
    return (
        <Link to={`/character/${props.id}`}>
            <article id="characters">
                <figure>
                    <img src={props.image}></img>
                </figure>
                <h2>{props.name}</h2>
                <article id="flex-status">
                    <Span status={props.status} />
                    <p>{props.status}</p>
                </article>
                <p>{props.specie}</p>
            </article>
        </Link>
    );
}

export default ArticleCharacters;
