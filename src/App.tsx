import React, {useState} from 'react';
import './App.module.scss';
import Navbar from "./Navbar/Navbar";
import s from './App.module.scss'
import Main from "./Main/Main";
import {Router} from "react-router-dom";

function App() {
    let [active, setActive] = useState(false)
    return (
        <div className={s.App}>
            <div className={!active ? s.NavbarFalse : s.Navbar}>
                <Navbar active={active} setActive={setActive}/>
            </div>
            <div className={!active ? s.MainFalse : s.Main}><Main/></div>

        </div>
    );
}

export default App;
