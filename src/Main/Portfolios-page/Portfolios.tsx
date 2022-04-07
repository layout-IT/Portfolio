import React from "react";
import Alpine from '../../assets/images/Alpine.png'
import Freelance from '../../assets/images/Freelance.png'
import Frispes from '../../assets/images/Frispes.png'
import Nasscorp from '../../assets/images/Nasscorp.png'
import SocialNetwork from '../../assets/images/social_network.png'
import Todolist from '../../assets/images/Todolist.png'
import TestTask from '../../assets/images/TesTask.png'
import Calculator from '../../assets/images/Calculator.png'
import GSIron from '../../assets/images/GsIron.png'
import TableOnPureJs from '../../assets/images/TableOnPureJs.png'
import Counter from '../../assets/images/Counter.png'
import style from './Portfolios.module.scss'
import s from '../About-page/About.module.scss'

export function Portfolios() {
    return (
        <div className={style.portfolioWrapper}>
            <div className={style.portfolioWrapper_container}>
                <span className={style.line}></span>
                <span className={style.line}></span>
                <span className={style.line}></span>
                <span className={style.line}></span>

                <div className={style.portfolioWrapper_general}>
                    <div className={s.my_skillsBlock}>
                        <div className={s.title_block}>
                            <div className={s.title_block_heading}>PORTFOLIOS</div>
                            <div className={s.title_block_dash}></div>
                        </div>

                    </div>
                    <div className={style.portfolio_items}>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/TestTask/'}
                                   target={'_blank'}>
                                    <img src={TestTask} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, Redux, TypeScript, MUI, Css-modules, Scss,
                                    React-dom, React-router-dom, React-redux, Thunk, Formik, Moment, Axios</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/TestTask">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/ToDolist/'}
                                   target={'_blank'}>
                                    <img src={Todolist} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, Redux, TypeScript, MUI, Css-modules, Scss, React-dom, React-router-dom, Thunk.</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/ToDolist">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img}
                                   href={'https://layout-it.github.io/social_network/'} target={'_blank'}>
                                    <img src={SocialNetwork} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, Redux, TypeScript, MUI,
                                    React-dom, React-router-dom, React-redux, Css-modules, Scss, Thunk,
                                    Redux-form, Axios.

                                </div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/social_network">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Project/'}
                                   target={'_blank'}>
                                    <img src={Freelance} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, Redux, TypeScript, MUI,
                                    React-dom, React-router-dom, React-redux, Css-modules, Scss, Thunk, Axios.</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Project">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Gs_iron/'}
                                   target={'_blank'}>
                                    <img src={GSIron} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, MobX, TypeScript, MUI,
                                    React-dom, React-router-dom, Css-modules, Scss, Thunk, Axios. ...in progress</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Gs_iron">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Calculator/'}
                                   target={'_blank'}>
                                    <img src={Calculator} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, Redux, TypeScript, Css-modules, Scss, React-dom</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Calculator">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/counter/'}
                                   target={'_blank'}>
                                    <img src={Counter} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>React, Redux, TypeScript, Css-modules, Scss, React-redux, Localstorage</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/counter">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Test_task_on_pure_js/'}
                                   target={'_blank'}>
                                    <img src={TableOnPureJs} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>HTML, Css, Js</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Test_task_on_pure_js">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Alpine/'}
                                   target={'_blank'}>
                                    <img src={Alpine} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>HTML, Scss, JS, Gulp.</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Alpine">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Nasscorp/'}
                                   target={'_blank'}>
                                    <img src={Nasscorp} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>HTML, Scss, JS, Gulp.</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Nasscorp">Code</a>
                                </div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://layout-it.github.io/Frispies/'}
                                   target={'_blank'}>
                                    <img src={Frispes} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>HTML, Scss, JS, Gulp.</div>
                                <div className={style.portfolioItem_subtitle}><a className={style.code}
                                                                                 href="https://github.com/layout-IT/Frispies">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolios;
