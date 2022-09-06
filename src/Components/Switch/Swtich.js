import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Home/Home'
import CharacterDetail from "../Characters/Detail/Detail_Character_Fetch"

const Swtich = (props) => {
    return (
        <Routes>
            <Route exact path="/" element={<Home page={props.page} setPage={props.setPage} />} />
            <Route path="/character/:id" element={<CharacterDetail/> } />
        </Routes>
    );
}

export default Swtich;
