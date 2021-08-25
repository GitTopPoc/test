import React from "react";
import style from "./landingDiscuss.module.css"

const LandingDiscuss = () => {
    return (
        <div className={style.discuss_wrapper}>
            <p className={style.discuss_text}>Do you wnat to discuss your project?</p>
            <div className={style.contact_button}><a href="/" className={style.contact_button}>Contact Us</a></div>
        </div>
    )
}

export default LandingDiscuss;