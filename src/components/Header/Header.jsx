import React, {useState} from "react";
import ms from '../../mainStyles/ms.module.scss'
import headerLogo from '../../assets/image/logo.png'
import style from "./header.module.css";


export const Navigation = () => {
    const [showAboutUs, setShowAboutUs] = useState(false)
    return(
       <div className={style.header_links}>
           <ul>
               <li><span className={style.link_text}>Our Works</span></li>
               <li><span className={style.link_text}>Technologies</span></li>
               <li onClick={()=> {setShowAboutUs(!showAboutUs); alert(showAboutUs)}}><span className={style.link_text}>About Us</span></li>
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
           <a href="/" className={style.hire_button}><p><nobr>Hire Us</nobr></p></a>
       </div>
        
    </div>
}
export default Header;