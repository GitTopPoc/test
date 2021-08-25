import React from "react";
import style from "./footer.module.css"
import ms from "../../mainStyles/ms.module.css"
import footerLogo from "../../assets/image/footer-logo.png"


const Footer = () => {
    return (
        <div className={style.footer_wrapper}>
            <div className={`${ms.block_container} ${style.footer_wrapper}`}>
                <div>
                    <img className={style.footer_logo} src={footerLogo} alt="logo"/>
                    <p className={style.rights_reserved_text}>OXIOS © 2020 All Rights Reserved</p>
                </div>
                <div>
                    <p className={style.footer_heading}>Links</p>
                    <div className={style.footer_links}>
                        <div>
                            <p><a href="/">Our Works</a></p>
                            <p><a href="/">Technologies</a></p>
                            <p><a href="/">About Us</a></p>
                        </div>
                        <div>
                            <p><a href="/">Blog</a></p>
                            <p><a href="/">Contact Us</a></p>
                            <p><a href="/">Get A Checklist</a></p>
                        </div>
                    </div>
                </div>
                <div className={style.footer_social_links}>
                    <p className={style.footer_heading}>Follow Us</p>
                    <p className={style.footer_social}><a href="/"><i className={"fa fa-twitter"}> </i>Twitter</a></p>
                    <p className={style.footer_social}><a href="/"><i className={"fa fa-instagram"}> </i>Instagram</a></p>
                    <p className={style.footer_social}><a href="/"><i className={"fa fa-facebook"}> </i>Facebook</a></p>
                    <p className={style.footer_social}><a href="/"><i className={"fa fa-linkedin"}> </i>Linkedin</a></p>
                </div>
            </div>
        </div>
    )

}

export default Footer