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
                <div className={style.my_skills}>
                    <ul className={style.my_skillsItem_containers}>
                        <li className={style.my_skillsItem_circle}>
                             <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                     data-prefix="far"
                                     data-icon="check-circle" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    className=""></path></svg>
                            </span>
                            REACT <span className={style.slash}>/</span> REDUX
                        </li>
                        <li className={style.my_skillsItem_circle}>
                            <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                                                                 data-prefix="far"
                                                                                 data-icon="check-circle" role="img"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 512 512"
                                                                                 className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                fill="currentColor"
                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                className=""></path></svg>
                            </span>
                            HTML5 <span className={style.slash}>/</span> CSS3
                        </li>
                        <li className={style.my_skillsItem_circle}>
                             <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                     data-prefix="far"
                                     data-icon="check-circle" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    className=""></path></svg>
                            </span>
                            JavaScript <span className={style.slash}>/</span> TypeScript</li>
                        <li className={style.my_skillsItem_circle}>
                             <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                     data-prefix="far"
                                     data-icon="check-circle" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    className=""></path></svg>
                            </span>
                            AXIOS <span className={style.slash}>/</span> REST</li>
                        <li className={style.my_skillsItem_circle}>
                             <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                     data-prefix="far"
                                     data-icon="check-circle" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    className=""></path></svg>
                            </span>
                            Unit Tests <span className={style.slash}>/</span> StoryBook</li>
                        <li className={style.my_skillsItem_circle}>
                             <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                     data-prefix="far"
                                     data-icon="check-circle" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    className=""></path></svg>
                            </span>
                            Material UI <span className={style.slash}>/</span> Ant Design</li>
                        <li className={style.my_skillsItem_circle}>
                             <span className={style.my_skillsItem_circleImg}>
                                <svg aria-hidden="true" focusable="false"
                                     data-prefix="far"
                                     data-icon="check-circle" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512"
                                     className="svg-inline--fa fa-check-circle fa-w-16 fa-5x"><path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    className=""></path></svg>
                            </span>
                            Git <span className={style.slash}>/</span> GitHub</li>
                    </ul>
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
                        <div className={style.listItemLeft}>2018 - Present</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Frontend Web Developer</div>
                            <div className={style.listItemRight_text}>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere
                                exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum
                                quasi. Molestiae, vel porro.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2016-2018</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Frontend Web Developer</div>
                            <div className={style.listItemRight_text}>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere
                                exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum
                                quasi. Molestiae, vel porro.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2014-2016</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>UI/UX Designer</div>
                            <div className={style.listItemRight_text}>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere
                                exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum
                                quasi. Molestiae, vel porro.
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
                        <div className={style.listItemLeft}>2018 - Present</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Master of Science</div>
                            <div className={style.listItemRight_text}>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere
                                exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum
                                quasi. Molestiae, vel porro.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2016-2018</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Bachelor of Science</div>
                            <div className={style.listItemRight_text}>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere
                                exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum
                                quasi. Molestiae, vel porro.
                            </div>
                        </div>
                    </div>
                    <div className={style.listItem}>
                        <div className={style.listItemLeft}>2014-2016</div>
                        <div className={style.listItemRight}>
                            <div className={style.listItemRight_title}>Higher Schoold Graduation
                            </div>
                            <div className={style.listItemRight_text}>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere
                                exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum
                                quasi. Molestiae, vel porro.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Resume;
