import React from "react";
import s from "../About-page/About.module.scss";
import style from './Resume.module.scss'

export function Resume () {
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
            <ul className={style.mySkills_Block}>
                <li className={style.mySkills_item}>
                    REACT / REDUX
                </li>
                <li className={style.mySkills_item}>
                    JavaScript / TypeScript
                </li>
                <li className={style.mySkills_item}>
                    HTML5 / CSS3 / Scss / Sass
                </li>
                <li className={style.mySkills_item}>
                    AXIOS / REST API
                </li>
                <li className={style.mySkills_item}>
                    Tests / StoryBook
                </li>

                <li className={style.mySkills_item}>
                    Material UI
                </li>
                <li className={style.mySkills_item}>
                    Git / GitHub / Gitlab
                </li>
                <li className={style.mySkills_item}>
                    JavaScript
                </li>
                <li className={style.mySkills_item}>
                    WebSocket
                </li>
                <li className={style.mySkills_item}>
                    npm / yarn
                </li>
                <li className={style.mySkills_item}>
                    БЭМ
                </li>
                <li className={style.mySkills_item}>
                    Docker
                </li>
                <li className={style.mySkills_item}>
                    Scrum
                </li>
            </ul>

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
                    <div className={style.workingExperience_title}>Work experience 3 years 9 months</div>
                </div>
                <div className={style.list}>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>March 2022 — August 2024</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>
                                PizzaSoft Vologda LLC <br/>
                                Front-end developer <br/>
                                2 years 6 months <br/>
                            </div>
                            <ul className={style.listItemRight_text}>
                            <li>-Teamwork</li>
                            <li>-Participated in projects using Scrum methodologies as a management approach</li>
                            <li>-Analytics</li>
                            <li>-Development of new functionality</li>
                            <li>-Timely detection and elimination of errors</li>
                            <li>-The review code</li>
                            </ul>
                            <span className={style.listItemRight_title}>Technology stack:</span> 
                            <div className={style.listItemRight_text}> React 15-18, Redux, axios, Thunk, React-Router-Dom, hooks, TypeScript, Scss, CSS Modules Gitlab,
                                Docker. Jest, Jest-cli, Lodash, Webpack, Bwip-js, Moment-timezone, Prop-types, Eslint, CoffeeScript , Backbone, Reselect</div>

                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>January 2023 — August 2023</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>
                                IT-INCUBATOR <br/>
                                it-incubator.io <br/> 
                                Mentor (React, html/css) <br/>
                                8 months
                            </div>
                            <div className={style.listItemRight_text}>Support of students at all levels of study related to the code in the front-end direction (bug fixes, refactoring, gh, etc.)
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>December 2020 — March 2022
                        </div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>
                                TechVision LLC <br/>
                                Front-end developer <br/>
                                1 year 4 months <br/>
                            </div>
                            <div className={style.listItemRight_text}>
                                Development of SPA applications
                                using
                                user interface libraries: redux,
                                react-redux, react-router-dom, redux thunk,
                                axios, Material UI.
                                Creating login and registration forms;
                                Working with Hooks, TypeScript.
                                Layout according to the layout.
                                Pixel Perfect layout.
                                Adaptive layout with Scss
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
                                Learning React, Redux, TypeScript, Promise, Axios,
                                REST API, Heroku, Material UI, StoryBook, TD, teamwork.
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
                                - JS Basics.
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
