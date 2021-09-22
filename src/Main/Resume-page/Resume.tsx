import React from "react";
import {NavLink} from "react-router-dom";
import s from "../About-page/About.module.scss";
import style from './Resume.module.scss'

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
                    <div className={style.my_skillsItems}>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        REACT
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        REDUX
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        JavaScript
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        TypeScript
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        HTML5
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        CSS3
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        AXIOS
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        REST
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        Unit Tests
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        StoryBook

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        Material UI
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        Ant Design
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        Git
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.my_skillsColimn}>
                            <div className={style.my_skillsItem}>
                                <div className={style.my_skillsItem_conteiner}>
                                    <div className={style.my_skillsItem_text}>
                                        GitHub
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="briefcase" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className="svg-inline--fa fa-briefcase fa-w-16 fa-5x">
                        <path fill="currentColor"
                              d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM176 80h160v48H176V80zM54 176h404c3.31 0 6 2.69 6 6v74H48v-74c0-3.31 2.69-6 6-6zm404 256H54c-3.31 0-6-2.69-6-6V304h144v24c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-24h144v122c0 3.31-2.69 6-6 6z"
                              className=""></path>
                    </svg>
                    <div className={style.workingExperience_title}>
                        Educational Qualifications</div>
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
