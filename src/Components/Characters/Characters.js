import React, {useEffect, useState} from 'react';
import CharactersArticle from "./Article/Article-characters"
import "./Characters.css"


const Characters = (props) => {

    const [marvel, setMarvel] = useState()

    console.log(props.page)

    useEffect( () => {
        try{
            fetch(`https://rickandmortyapi.com/api/character?page=${props.page}`)
            .then(response => response.json())
            .then(data => setMarvel(data))
        }catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        }
    },[props.page])

    console.log(marvel)

    if(marvel === undefined){
        return <h1>Cargando..</h1>
    }

    return (
        <section id="flex-characters">
                {marvel.results.map((info, i) => {
                return <CharactersArticle
                key={info + i}
                id={info.id}
                name={info.name}
                image={info.image}
                status={info.status}
                specie={info.species}
                />
            })}
        </section>
    );
}

export default Characters;
