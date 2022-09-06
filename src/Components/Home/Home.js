import React from 'react';
import "./Home.css"
import Characters from "../Characters/Characters"

const Home = (props) => {


    return (
            <section>
                <button className="mobile-visible" id="left" onClick={() => props.setPage(props.page-1)}>Page {props.page-1}</button>
                <Characters page={props.page} />
                <button className="mobile-visible" id="rigth" onClick={() => props.setPage(props.page+1)}>Page {props.page}</button>
            </section>
    );
}

export default Home;
