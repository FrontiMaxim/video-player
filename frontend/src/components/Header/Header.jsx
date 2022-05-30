import React from "react";
import style from "./style.module.scss";

import glass from "../../assets/Header/glass.svg";
import additive from "../../assets/Header/additive.svg";
import bell from "../../assets/Header/bell.svg";
import arrow from "../../assets/Header/arrow.svg";

// временно
import img from "../../assets/Header/user.png";

const infoUser = {
    img,
    name: "Tobi",
    lastName: "Mojeed"
};

const countAlerts = 10;

function Header(props) {
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
                      countAlerts ? <span>{countAlerts}</span> : ""
                  }
                  <button className={style.btnBell}>
                      <img src={bell} alt="bell"/>
                  </button>
              </div>
              <div className={style.user}>
                  <img src={infoUser.img} alt="user"/>
                  <span>{`${infoUser.name} ${infoUser.lastName}`}</span>
                  <button className={style.btnArrow}>
                      <img src={arrow} alt="arrow" />
                  </button>
              </div>
          </div>
      </div>
    );
}

export default Header;