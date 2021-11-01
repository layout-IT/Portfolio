import React from "react";
import s from './About.module.scss';
import photo from '../../assets/images/WeAre.jpg'

export function About() {
    return (
        <div className={s.mainWrapper}>

            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>


            <div className={s.about_me}>

                <div className={s.about_meContainer}>
                    <div className={s.title_block}>
                        <div className={s.title_block_heading}>About me</div>
                        <div className={s.title_block_dash}></div>
                    </div>
                </div>

                <div className={s.about_meBottom}>

                    <div className={s.about_mePhoto}>
                        <img className={s.about_mePhotoImg} src={photo} alt={'photo'}/>
                    </div>

                    <div className={s.about_meBlockText}>

                        <div className={s.about_meTitle}>My name is <span className={s.servise_titleSpan}>Makshakov Sergei</span>
                        </div>
                        <div className={s.about_meText}>Hello, I am a person who has a
                            strong passion for programming.
                            I have experience in creating SPA
                            with React/Redux/TypeScript.
                            Now I am improving my skills in this
                            direction and expanding them with
                            new technologies.
                            I'm planing to study Node.js,
                            because my next focus is to become
                            a Full-Stack Developer. And also I have an interest in web development.
                            I spend my leisure time on Codewars
                            or with educational books.
                            Open for your suggestions.
                        </div>
                        <div className={s.about_meList}>

                            <ul className={s.about_meListLists}>
                                <li className={s.about_meListText}><span className={s.about_meListTextSpan}>First / last name</span>
                                    <span className={s.about_meListTextSpan}>: Makshakov Sergei</span></li>
                                <li className={s.about_meListText}><span className={s.about_meListTextSpan}>Country / city</span><span
                                    className={s.about_meListTextSpan}>: Russia, Cheboksary</span></li>
                                <li className={s.about_meListText}><span
                                    className={s.about_meListTextSpan}>Language</span><span
                                    className={s.about_meListTextSpan}>: English: Pre-intermediate / in progress</span>
                                </li>
                                <li className={s.about_meListText}><span
                                    className={s.about_meListTextSpan}>Telephone</span><span
                                    className={s.about_meListTextSpan}>: +7 900 332 89 37</span>
                                </li>
                            </ul>
                        </div>
                        <a className={s.about_meUttonLink} target={'_blank'} href="https://disk.yandex.ru/d/HoSkFRoukOdNAQ" >
                            <button className={s.about_meButton}>
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>


            </div>
            <div className={s.Services}>
                <div className={s.title_block}>
                    <div className={s.title_block_heading}>Services</div>
                    <div className={s.title_block_dash}></div>
                </div>
                <div className={s.Services_items}>
                    <div className={s.Services_column}>
                        <div className={s.Services_item}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="code" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 className="svg-inline--fa fa-code fa-w-18 fa-5x">
                                <path fill="currentColor"
                                      d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"
                                      className=""></path>
                            </svg>
                            <div className={s.Services_itemTitle}>Front-end development</div>
                            <div className={s.Services_itemStripe}></div>
                            <p className={s.Services_itemText}>Application development using new technologies.</p>
                        </div>
                    </div>
                    <div className={s.Services_column}>
                        <div className={s.Services_item}>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="palette" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="svg-inline--fa fa-palette fa-w-16 fa-5x">
                                <path fill="currentColor"
                                      d="M128 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM418.6 58.1C359.2 9.3 281.3-10 204.6 5 104.9 24.4 24.7 104.2 5.1 203.7c-16.7 84.2 8.1 168.3 67.8 230.6 47.3 49.4 109.7 77.8 167.9 77.8 8.8 0 17.5-.6 26.1-2 24.2-3.7 44.6-18.7 56.1-41.1 12.3-24 12.3-52.7.2-76.6-6.1-12-5.5-26.2 1.8-38 7-11.8 18.7-18.4 32-18.4h72.2c46.4 0 82.8-35.7 82.8-81.3-.2-76.4-34.3-148.1-93.4-196.6zM429.2 288H357c-29.9 0-57.2 15.4-73 41.3-16 26.1-17.3 57.8-3.6 84.9 5.1 10.1 5.1 22.7-.2 32.9-2.6 5-8.7 13.7-20.6 15.6-49.3 7.7-108.9-16.6-152-61.6-48.8-50.9-69-119.4-55.4-188 15.9-80.6 80.8-145.3 161.6-161 62.6-12.3 126.1 3.5 174.3 43.1 48.1 39.5 75.7 97.6 75.9 159.6 0 18.6-15.3 33.2-34.8 33.2zM160 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zm96-32.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32c0-17.6-14.3-32-32-32zm96 32.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
                                      className=""></path>
                            </svg>
                            <div className={s.Services_itemTitle}>Web development</div>
                            <div className={s.Services_itemStripe}></div>
                            <p className={s.Services_itemText}>The layout of websites and landing pages is almost any
                                with the use of java script code. </p>
                        </div>
                    </div>

                    <div className={s.Services_column}>
                        <div className={s.Services_item}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="mobile-android-alt"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                 className="svg-inline--fa fa-mobile-android-alt fa-w-10 fa-5x">
                                <path fill="currentColor"
                                      d="M224 96v240H96V96h128m48-96H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM48 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v416c0 8.8-7.2 16-16 16H48zM244 64H76c-6.6 0-12 5.4-12 12v280c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zm-48 352h-72c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h72c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12z"
                                      className=""></path>
                            </svg>
                            <div className={s.Services_itemTitle}>Adaptability</div>
                            <div className={s.Services_itemStripe}></div>
                            <p className={s.Services_itemText}>Cross-browser compatibility, adaptability for mobile
                                devices</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default About;
