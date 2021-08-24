import React from "react";
import ms from "../../mainStyles/ms.module.css";
import style from "./landingPresentation.module.css"
import presentation_image from "../../assets/image/first_section_photo.png"
import node_image from "../../assets/image/node.png"
import mongo_image from "../../assets/image/mongo.png"
import react_image from "../../assets/image/react.png"
import app_store from "../../assets/image/app_store.png"
import google_play from "../../assets/image/google_play.png"

const LandingPresentation = () => {
    return (
        <div className={`${ms.block_container} ${style.presentation_wrapper}`}>
            <p className={style.presentation_heading}><span>DOGPS.ME</span> - Безопасность <br/> ребенка в ваших руках
            </p>

            <div className={style.presentation_blocks}>
                <div className={style.presentation_image}>
                    <img src={presentation_image} alt="maket"/>
                </div>

                <div className={style.presentation_info}>
                    <p className={style.presentation_info_heading}>Технологии реализации:</p>

                    <p className={ms.regular_text}><span><hr/> </span>Backend</p>
                    <div className={style.technology_block}>
                        <img src={node_image} alt="node"/>
                        <img src={mongo_image} alt="mongoDB"/>
                    </div>

                    <p className={ms.regular_text}><span><hr/> </span>Frontend</p>
                    <div className={style.technology_block}>
                        <img src={react_image} alt="react"/>
                    </div>
                   <div className={style.presentation_links}>
                       <div className={style.info_link_wrapper}><a href="/" className={style.presentation_info_link}><nobr>Перейти на сайт</nobr></a></div>

                       <div className={style.download_links_wrapper}>
                           <a href="/"><img src={app_store} alt="app store"/><p><nobr> App Store</nobr></p></a>
                           <a href="/"><img src={google_play} alt="google play"/><p><nobr>Google Play</nobr></p></a>
                       </div>
                   </div>
                </div>
                

            </div>
        </div>
    )
}

export default LandingPresentation;