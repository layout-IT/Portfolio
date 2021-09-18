import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss'


export function Navbar() {

    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.photo}>
                    <img src='https://tf-react-chester.vercel.app/images/brand-image.jpg' alt="photo"/>
                </div>
            </div>

            <div className={s.items}>
                <NavLink to={'/home'} activeClassName={s.ChangeColorOnBlue} className={s.item}>
                    <span className={s.item_link}>HOME</span>
                </NavLink>
                <NavLink to={'/about'} activeClassName={s.ChangeColorOnBlue } className={s.item}><span className={s.item_link}>ABOUT</span></NavLink>
                <NavLink to={'/resume'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span className={s.item_link}>RESUME</span></NavLink>
                <NavLink to={'/portfolios'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span className={s.item_link}>PORTFOLIOS</span></NavLink>
                <NavLink to={'/contact'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span className={s.item_link}>CONTACT</span></NavLink>
            </div>

            <div className={s.Footer}>© 2021 NuclearThemes</div>

        </div>
    );
}

export default Navbar;
