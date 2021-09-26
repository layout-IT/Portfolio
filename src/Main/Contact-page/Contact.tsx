import React from "react";
import {NavLink} from "react-router-dom";
import style from "../Contact-page/Contact.module.scss"
import s from '../About-page/About.module.scss'


export function Contact() {
    return (

        <div className={style.portfolioWrapper}>
            <div className={style.portfolioWrapper_container}>
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>

                <div className={style.portfolioWrapper_general}>
                    <div className={style.my_skillsBlock}>
                        <div className={s.title_block}>
                            <div className={s.title_block_heading}>CONTACT ME</div>
                            <div className={s.title_block_dash}></div>
                        </div>

                    </div>
                </div>

                <div className={style.contactMe_items}>
                    <div className={style.contactMe_column}>
                        <div className={style.contactMe_item}>
                            <div className={style.contactMe_icon}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-alt"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-phone-alt fa-w-16 fa-5x">
                                    <path fill="currentColor"
                                          d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"
                                          className=""></path>
                                </svg>
                            </div>
                            <div className={style.contactMe_Block}>
                                <div className={style.contactMe_Title}>Phone</div>
                                <div className={style.contactMe_subtitle1}>+012-3456-7892</div>
                                <div className={style.contactMe_subtitle1}>+012-3456-7892</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.contactMe_column}>
                        <div className={style.contactMe_item}>
                            <div className={style.contactMe_icon}>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-envelope fa-w-16 fa-5x">
                                    <path fill="currentColor"
                                          d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                                          className=""></path>
                                </svg>
                            </div>
                            <div className={style.contactMe_Block}>
                                <div className={style.contactMe_Title}>Email</div>
                                <div className={style.contactMe_subtitle1}>admin@example.com</div>
                                <div className={style.contactMe_subtitle1}>info@example.com</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.contactMe_column}>
                        <div className={style.contactMe_item}>
                            <div className={style.contactMe_icon}>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="map-marker-alt"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                     className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-5x">
                                    <path fill="currentColor"
                                          d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
                                          className=""></path>
                                </svg>
                            </div>
                            <div className={style.contactMe_Block}>
                                <div className={style.contactMe_Title}>Address</div>
                                <div className={style.contactMe_subtitle1}>121 King Street, Melbourne, Victoria 3000, Australia</div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Contact;
