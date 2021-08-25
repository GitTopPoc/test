import React from "react";
import ms from "../../mainStyles/ms.module.css"
import style from "./landingUserInfo.module.css"
import firstPhone from "../../assets/image/phone-1.png"
import secondPhone from "../../assets/image/phone-2.png"
import thirdPhone from "../../assets/image/phone-3.png"
import fourthPhone from "../../assets/image/phone-4.png"

const LandingUserInfo = () => {
    return (
       <div className={`${style.user_info_background}`}>
           <p className={`${ms.block_heading_text} ${style.block_heading}`}>Для пользователей приложения</p>
               <div className={` ${style.user_info_wrapper}`}>

                   <div className={style.user_info_block}>
                       <div className={style.user_info_description}>
                           <p className={style.user_info_heading}>Геолокація</p>
                           <p className={style.user_info_text}>Відслідковуйте місцезнаходження своєї дитини з використанням
                               технології GPS.</p>
                       </div>
                       <img src={firstPhone} alt="user interface"/>
                   </div>

                   <div className={style.user_info_block}>
                       <div className={style.user_info_description}>
                           <p className={style.user_info_heading}>Гео зона</p>
                           <p className={style.user_info_text}>Отримувати сповіщення, коли дитина залишає задане місце. В
                               безкоштовній версії додатку встановлення гео-зони йде в подарунок.</p>
                       </div>
                       <img src={secondPhone} alt="user interface"/>
                   </div>


                   <div className={style.user_info_block}>
                       <div className={style.user_info_description}>
                           <p className={style.user_info_heading}>Голосовий чат</p>
                           <p className={style.user_info_text}>Обмінюйтесь між додатком і годинником голосовими
                               повідомленнями.
                               Дитина може не дзвонити вам, а просто відправити голосове sms.</p>
                       </div>
                       <img src={thirdPhone} alt="user interface"/>
                   </div>

                   <div className={style.user_info_block}>
                       <div className={style.user_info_description}>
                           <p className={style.user_info_heading}>Треки</p>
                           <p className={style.user_info_text}>Ви даєте дитині завдання пересуватись по чітко встановленому
                               маршруту. За допомогою цієї функції ви можете переглядати історію пересування дитини за
                               певний
                               період часу.</p>
                       </div>
                       <img src={fourthPhone} alt="user interface"/>
                   </div>
               </div>

       </div>)
}

export default LandingUserInfo;