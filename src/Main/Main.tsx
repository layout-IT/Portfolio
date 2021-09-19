import React from "react";
import {Redirect, Route} from "react-router-dom";
import Home from "./Home-page/Home";
import About from "./About-page/About";
import Portfolios from "./Portfolios-page/Portfolios";
import Contact from "./Contact-page/Contact";
import Resume from "./Resume-page/Resume";
import s from './Main.module.scss'

export function Main() {

    return (

        <div className={s.Main_wrapper}>
            <Redirect to={'/home'}/>
            <Route path='/home' render={() => <Home/>}/>
            <Route path='/about' render={() => <About/>}/>
            <Route path='/resume' render={() => <Resume/>}/>
            <Route path='/portfolios' render={() => <Portfolios/>}/>
            <Route path='/contact' render={() => <Contact/>}/>
        </div>
    );
}

export default Main;
