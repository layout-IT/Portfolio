import React from "react";

import style from './Portfolios.module.scss'
import photo from '../../assets/images/1.jpg'
import photo2 from '../../assets/images/2.jpg'
import photo3 from '../../assets/images/3.jpg'
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
                                <a className={style.portfolioItem_img} href={'https://yandex.ru/'} target={'_blank'}>
                                    <img src={photo} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>T-shirt Mockup</div>
                                <div className={style.portfolioItem_subtitle}>A beautiful t-shirt mockup.</div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://yandex.ru/'} target={'_blank'}>
                                    <img src={photo2} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>T-shirt Mockup</div>
                                <div className={style.portfolioItem_subtitle}>A beautiful t-shirt mockup.</div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://yandex.ru/'} target={'_blank'}>
                                    <img src={photo3} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>T-shirt Mockup</div>
                                <div className={style.portfolioItem_subtitle}>A beautiful t-shirt mockup.</div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://yandex.ru/'} target={'_blank'}>
                                    <img src={photo2} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>T-shirt Mockup</div>
                                <div className={style.portfolioItem_subtitle}>A beautiful t-shirt mockup.</div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://yandex.ru/'} target={'_blank'}>
                                    <img src={photo3} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>T-shirt Mockup</div>
                                <div className={style.portfolioItem_subtitle}>A beautiful t-shirt mockup.</div>

                            </div>
                        </div>
                        <div className={style.portfolio_colums}>
                            <div className={style.portfolio_item}>
                                <a className={style.portfolioItem_img} href={'https://yandex.ru/'} target={'_blank'}>
                                    <img src={photo} alt="photo"/>
                                </a>
                                <div className={style.portfolioItem_title}>T-shirt Mockup</div>
                                <div className={style.portfolioItem_subtitle}>A beautiful t-shirt mockup.</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolios;
