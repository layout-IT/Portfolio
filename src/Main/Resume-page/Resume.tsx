import React from "react";
import {NavLink} from "react-router-dom";
import s from "../About-page/About.module.scss";
import style from './Resume.module.scss'
import circl from '../../assets/images/circle.png'

export function Resume() {
    return (
        <div className={style.wrapperResume}>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>

            <div className={style.my_skillsBlock}>
                <div className={s.title_block}>
                    <div className={s.title_block_heading}>MY SKILLS</div>
                    <div className={s.title_block_dash}></div>
                </div>
            </div>

            <div className={style.mySkills_Block}>
                <div className={style.mySkills_item}>
                    REACT / REDUX
                </div>
                <div className={style.mySkills_item}>
                    JavaScript / TypeScript
                </div>
                <div className={style.mySkills_item}>
                    HTML5 / CSS3
                </div>
                <div className={style.mySkills_item}>
                    AXIOS / REST API
                </div>
                <div className={style.mySkills_item}>
                    Unit Tests / StoryBook
                </div>

                <div className={style.mySkills_item}>
                    Material UI / Ant Design
                </div>
                <div className={style.mySkills_item}>
                    Git / GitHub
                </div>
            </div>

            <div className={style.resume_block}>
                <div className={s.title_block}>
                    <div className={s.title_block_heading}>RESUME</div>
                    <div className={s.title_block_dash}></div>
                </div>
                <div className={style.workingExperience}>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="briefcase" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className="svg-inline--fa fa-briefcase fa-w-16 fa-5x">
                        <path fill="currentColor"
                              d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM176 80h160v48H176V80zM54 176h404c3.31 0 6 2.69 6 6v74H48v-74c0-3.31 2.69-6 6-6zm404 256H54c-3.31 0-6-2.69-6-6V304h144v24c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-24h144v122c0 3.31-2.69 6-6 6z"
                              className=""></path>
                    </svg>
                    <div className={style.workingExperience_title}>Working Experience</div>
                </div>
                <div className={style.list}>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2021 - Present</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Frontend Web Developer / Freelance</div>
                            <div className={style.listItemRight_text}>
                                - React development using the. <br/>
                                - user interface libraries redux, react-redux, react-router-dom, redux thunk, axios,
                                formik,Material UI. <br/>
                                - Creating login and registration forms. <br/>
                                - Working with Hook, TypeScript. <br/>
                                - Cross-browser, adaptive development by CSS preprocessors.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2021</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Frontend Web Developer / Freelance</div>
                            <div className={style.listItemRight_text}>- Layout according to the layout. <br/>
                                - Pixel Perfect layout. <br/>
                                - Support for site pages. <br/>
                                - Layout of landing pages. <br/>
                                - Adaptive cross-browser optimized layout compatible with modern browsers. <br/>
                                - Working with GitHub.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2016 - 2021</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>IP Kuchkaskova</div>
                            <div className={style.listItemRight_text}>- Logistics. <br/>
                                - Personnel management. <br/>
                                - Sending / receiving cargo from T.С. <br/>
                                - Cash collection. <br/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.workingExperience}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clipboard-list" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                         className="svg-inline--fa fa-clipboard-list fa-w-12 fa-5x">
                        <path fill="currentColor"
                              d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352z"
                              className=""></path>
                    </svg>
                    <div className={style.workingExperience_title}>
                        Educational Qualifications
                    </div>
                </div>
                <div className={style.list}>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2021</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>IT-INCUBATOR</div>
                            <div className={style.listItemRight_text}>Front-end developer (React, Redux, JS, TS) . <br/>
                                Learning React, Redux, TypeScript, Promise, Axios.,
                                REST API, GET, immutable.js, Heroku, Material UI,And Design, StoryBook, TD, teamwork.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2021</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Course on layout from "Фрилансер по жизни"</div>
                            <div className={style.listItemRight_text}>
                                <a className={style.Sertificate}
                                   href="https://fls.guru/certificate.html?Sergei_Makshakov_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9%20%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87#9223">Certificate</a><br/>
                                - HTML. <br/>
                                - CSS (SCSS). <br/>
                                - Gulp. <br/>
                                - основы JS.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2009-2014</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Moscow Automobile and Road Institute (State
                                Technical University) (MADI)
                            </div>
                            <div className={style.listItemRight_text}>- Economist - Manager
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Resume;
