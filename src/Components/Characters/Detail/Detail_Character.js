import React from 'react';
import "./Detail_Character.css"
import Span from '../Article/span'

const DetailCharacter = (props) => {
    window.scrollTo(0,0)

    console.log(props, "detail_character")
    return (
        <section id="detail">
            <article id="flex-detail">
                <figure>
                    <img src={props.image}></img>
                </figure>
                <article id="detail_rigth">
                    <h2>{props.name}</h2>
                    <h3>Status:</h3>
                    <article id="flex-status">
                        <Span status={props.status} />
                        <h4>{props.status}</h4>
                    </article>
                    <article className="flex-info">
                        <h3 className="h3">Race:</h3>
                        <h4>{props.specie}</h4>
                    </article>
                    <h3>Origin</h3>
                    <h4>{props.origin.name}</h4>
                    <h3>Actual location</h3>
                    <h4>{props.location.name}</h4>
                </article>
            </article>
        </section>
    );
}

export default DetailCharacter;
