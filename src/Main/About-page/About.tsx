import React from "react";
import s from './About.module.scss';

export function About() {
    return (
        <div>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <div className={s.about_me}>

                <div className={s.about_meContainer}>
                    <div className={s.title_block}>
                        <div className={s.title_block_heading}>ABOUT ME</div>
                        <div className={s.title_block_dash}></div>
                    </div>
                </div>

                <div className={s.about_meBottom}>

                    <div className={s.about_mePhoto}>
                        <img className={s.about_mePhotoImg}
                             src="https://tf-react-chester.vercel.app/images/about-image.jpg"
                             alt="photo2"/>
                    </div>

                    <div className={s.about_meBlockText}>

                        <div className={s.about_meTitle}>I am <span className={s.servise_titleSpan}>Devid Chester</span>
                        </div>
                        <div className={s.about_meText}>I am a frontend web developer. I can provide clean code and
                            pixel
                            perfect design. I also make website more & more interactive with web animations.
                        </div>
                        <div className={s.about_meList}>
                            <ul className={s.about_meListLeft}>
                                <li className={s.about_meListTextLeft}>Full Name</li>
                                <li className={s.about_meListTextLeft}>Age</li>
                                <li className={s.about_meListTextLeft}>Nationality</li>
                                <li className={s.about_meListTextLeft}>Languages</li>
                                <li className={s.about_meListTextLeft}>Address</li>
                                <li className={s.about_meListTextLeft}>Freelance</li>
                            </ul>

                            <ul className={s.about_meListRight}>
                                <li className={s.about_meListTexRight}>: Devid Chester</li>
                                <li className={s.about_meListTexRight}>: 24 Years</li>
                                <li className={s.about_meListTexRight}>: American</li>
                                <li className={s.about_meListTexRight}>: English, French</li>
                                <li className={s.about_meListTexRight}>: 121 King Street, Melbourne, Australia</li>
                                <li className={s.about_meListTexRight}>: Available</li>
                            </ul>

                        </div>


                        <button className={s.about_meButton}>
                            <a className={s.about_meUttonLink}
                               href="https://preview.themeforest.net/item/chester-react-personal-portfolio-template/full_screen_preview/24952954?_ga=2.242342214.519113079.1631801047-1179985801.1631801047">DOWNLOAD
                                CV</a>
                        </button>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default About;
