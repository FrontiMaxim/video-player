import React, {useState} from "react";
import style from "./style.module.scss";

import glass from "../../assets/Header/glass.svg";
import additive from "../../assets/Header/additive.svg";
import bell from "../../assets/Header/bell.svg";
import arrow from "../../assets/Header/arrow.svg";

// временно
import img from "../../assets/Header/user.png";
import SelectMenu from "../SelectMenu/SelectMenu.jsx";

const infoUser = {
    img,
};


function Header({user}) {

    const {nickname, alters} = user;
    const [isOpen, setIsOpen] = useState(false);

    const clickSelectMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
      <div className={style.header}>
          <div className={style.search}>
              <input type="search" placeholder="Search"/>
              <img src={glass} alt="glass"/>
          </div>
          <div className={style.userPanel}>
              <button className={style.btnAdd}>
                  <img src={additive} alt="additive"/>
                  <span>add video</span>
              </button>
              <div className={style.alert}>
                  {
                      alters.count ? <span>{alters.count}</span> : ""
                  }
                  <button className={style.btnBell}>
                      <img src={bell} alt="bell"/>
                  </button>
              </div>
              <div className={style.user}>
                  <img src={infoUser.img} alt="user"/>
                  <span>{nickname}</span>
                  <div className={style.select}>
                      <button className={style.btnArrow} onClick={clickSelectMenu}>
                          <img src={arrow} alt="arrow" style={{transform: `${isOpen ? 'rotate(180deg)' : ''}`}} />
                      </button>
                      <SelectMenu isOpen={isOpen}/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Header;