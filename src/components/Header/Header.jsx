import React from "react";
import ms from '../../mainStyles/ms.module.scss'
import headerLogo from '../../assets/image/logo.png'
import style from "./header.module.css";


export const Navigation = () => {
    return (
        <div className={style.header_links}>
            <ul>
                <li><span className={style.link_text}>Our Works</span></li>
                <li><span className={style.link_text}>Technologies</span></li>
                <li className={`${style.link_text} ${style.dropdown}`}>About Us <i className="fa fa-angle-down" aria-hidden="true"> </i>
                    <div className={style.dropdown_content}>
                        <a href="/">Item 1</a>
                        <a href="/">Item 2</a>
                        <a href="/">Item 3</a>
                    </div>
                </li>
                <li><span className={style.link_text}>Blog</span></li>
            </ul>
        </div>
    )
}

const Header = () => {
    return <div className={`${ms.block_container}`}>
        <div className={style.header_wrapper}>
            <img className={style.header_logo} src={headerLogo} alt="logo img"/>
            <Navigation/>
            <a href="/" className={style.hire_button}>
                <p>
                    <nobr>Hire Us</nobr>
                </p>
            </a>
        </div>

    </div>
}
export default Header;