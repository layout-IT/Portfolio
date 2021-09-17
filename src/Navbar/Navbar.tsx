import React from "react";
import {Route} from "react-router-dom";
import Home from "./Component/Home";


export function Navbar() {
    return (
        <div>
           <Route render = {() => <Home/>}/>
        </div>
    );
}

export default Navbar;
