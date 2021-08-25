import React from "react";
import ms from "../../mainStyles/ms.module.css"
import style from "./landingOwnerInfo.module.css"
import kidsBackground from "../../assets/image/kids_background.png"

const LandingOwnerInfo = () => {
    return (
        <div>

            <p className={`${ms.block_heading_text} ${style.block_heading}`}>Для владельцев сайта</p>
            <div className={style.owner_info_wrapper}>
                <div className={`${style.owner_info_block}`}>
                    <p className={`${ms.block_heading_text}`}>Удобная админ панель</p>
                    <p className={style.owner_info_text}>Реализована возможность менять текста и картинки на сайта, а
                        также отслеживать статистику</p>
                </div>
                <img className={style.kids_image} src={kidsBackground} alt="kids"/>
            </div>

        </div>
    )
}

export default LandingOwnerInfo;