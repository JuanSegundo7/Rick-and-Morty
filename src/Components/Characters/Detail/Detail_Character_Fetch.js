import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import Detail_Character from './Detail_Character';
 

const CharacterDetail = (props) => {
    const id = useParams()
    const [character, setCharacter] = useState()
    
    console.log(character)

    useEffect( () => {
        try{
            fetch(`https://rickandmortyapi.com/api/character/${id.id}`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setCharacter(data))
        }catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
        }
    },[])


    if(character === undefined) {
        return <h1>Cargando...</h1>
    }else{
        return (
            <Detail_Character 
            episode={character.episode} 
            gender={character.gender}
            image={character.image} 
            location={character.location}
            name={character.name} 
            origin={character.origin}
            specie={character.species} 
            status={character.status}
            type={character.type} 
            />
            );
        }
    }
        
        export default CharacterDetail;
