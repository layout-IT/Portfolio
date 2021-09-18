import React from 'react';
import './App.module.scss';
import { Main } from './Main/Main';
import Navbar from "./Navbar/Navbar";
import s from './App.module.scss'
import {useSelector} from "react-redux";

function App() {
    return (
        <div className={s.App}>
            <div className={s.Navbar}><Navbar/></div>
            <div className={s.Main}> <Main/></div>

        </div>
    );
}

export default App;
