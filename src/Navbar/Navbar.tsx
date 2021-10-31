import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss'
import {useSelector} from "react-redux";

type NavbarType = {
    active: boolean
    setActive: (active: boolean) => void
}

export function Navbar(props: NavbarType) {



    let isactive = () => {

        props.setActive(!props.active)

    }

    const closeMenu =() => {
        if(window.innerWidth <= 1330){
            isactive()
        }
    }


  return  <div className={!props.active ? s.WrapperFAlse : s.Wrapper}>
        <div onClick={() => isactive() } className={s.icon_menuContainer}>
            <div className={!props.active ? s.icon_menu : s.icon_menuFalse}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={s.Container}>
            <div className={s.photo}>
                <img src='https://tf-react-chester.vercel.app/images/brand-image.jpg' alt="photo"/>
            </div>
        </div>

        <div className={s.items}>
            <NavLink onClick={() => {
                closeMenu()
            }} to={'/home'} aria-current={true}
                     activeClassName={s.ChangeColorOnBlue} className={s.item}>
                <span className={s.item_link}>HOME</span>
            </NavLink>
            <NavLink onClick={() => closeMenu()} to={'/about'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span
                className={s.item_link}>ABOUT</span></NavLink>
            <NavLink onClick={() =>  closeMenu()} to={'/resume'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span
                className={s.item_link}>RESUME</span></NavLink>
            <NavLink onClick={() =>  closeMenu()} to={'/portfolios'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span
                className={s.item_link}>PORTFOLIOS</span></NavLink>
            <NavLink onClick={() =>  closeMenu()} to={'/contact'} activeClassName={s.ChangeColorOnBlue} className={s.item}><span
                className={s.item_link}>CONTACT</span></NavLink>
        </div>

        <div className={s.Footer}>© 2021 NuclearThemes</div>

    </div>


}

export default Navbar;
