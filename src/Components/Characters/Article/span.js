import React from 'react';
import "./ArticleC.css"

const Span = (props) => {
    if(props.status === 'Alive'){
        return <span id="green"></span>
    }else if(props.status === 'unknown'){
        return <span id="unknown">?</span>
    }   
    else{
        return <span id="red"></span>
    }
}

export default Span;
