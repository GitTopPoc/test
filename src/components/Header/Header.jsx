import React, {useState} from "react";
import ms from '../../mainStyles/ms.module.scss'
import headerLogo from '../../assets/image/logo.png'
import style from "./header.module.css";


export const Navigation = () => {
    const [showAboutUs, setShowAboutUs] = useState(false)
    return(
       <div className={style.kek}>
           <ul>
               <li>Our Works</li>
               <li>Technologies</li>
               <li onClick={()=> {setShowAboutUs(!showAboutUs); alert(showAboutUs)}}>About Us</li>
               <li>Blog</li>
           </ul>
       </div>
    )
}

const Header = () => {
    return <div className={ms.block_container}>
        <img width='185px'



             className={style.header_logo} src={headerLogo} alt="logo img"/>
        <div>
           <Navigation/>
        </div>
    </div>
}
export default Header;