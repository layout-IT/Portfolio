import React from "react";
import s from './Home.module.scss'


export function Home() {

    return (
        <div className={s.wrapper}>


            <div className={s.wrapperContainer}>
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>
                <div className={s.wrapperContainer_items}>
                    <h1 className={s.title}>Hi, I am <span className={s.name}>Makshakov Sergei</span></h1>
                    <p className={s.text}>I am a front-end  developer.I have experience in creating SPA
                        with React/Redux/TypeScript. Also i front-end web developer. I can provide clean code and pixel perfect
                        design.I make website more & more interactive with web animations.</p>
                    <div className={s.container_span}>
                        <a href="https://t.me/MakshakovS" target={'_blank'} className={s.container_span_svg}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane"
                                 role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                 className={s.name_telegram}>
                                <path fill="currentColor"
                                      d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                                      className={s.name_telegram}></path>
                            </svg>
                        </a>
                        <a href="https://github.com/layout-IT" target={'blank'} className={s.container_span_svg}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"
                                 className="svg-inline--fa fa-github-alt fa-w-15 fa-5x">
                                <path fill="currentColor"
                                      d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                                      className=""></path>
                            </svg>
                        </a>
                        <a href="https://vk.com/cepewka_odun_takou_na_cvete" target={'_blank'} className={s.container_span_svg}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="vk" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 className="vk_svg">
                                <path fill="currentColor"
                                      d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"
                                      className=""></path>
                            </svg>
                        </a>
                        <a href="https://github.com/layout-IT" target={'_blank'} className={s.container_span_svg}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-branch"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                 className="svg-inline--fa fa-code-branch fa-w-12 fa-3x">
                                <path fill="currentColor"
                                      d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
                                      className=""></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;



