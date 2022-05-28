import React from 'react';
import style from './style.module.scss';

import icon from '../../assets/Sidebar/logo.svg';
import viewer from '../../assets/Sidebar/viewer.svg';
import Menu from "./Menu/Menu";

import {listMenu} from "./listMenu";
import {listLibrary} from "./listLibrary";

function Sidebar({listFoLlowing}) {
    return (
        <div className={style.sidebar}>
            <div className={style.head}>
                <img src={icon} alt="logo"/>
                <img src={viewer} alt="viewer"/>
            </div>

            <Menu name={'Menu'} list={listMenu}/>
            <Menu name={'Library'} list={listLibrary} />
            <Menu name={'Following'} list={listFoLlowing} />

            <div className={style.subscription}>
                <div className={style.call}>
                    Get 3 months of premium
                    service for free.
                </div>
                <div className={style.description}>
                    Take advantage of free and premium content and more.
                </div>
                <input className={style.btnCall} type="button" value='Get Premium' />
            </div>
        </div>
    );
}

export default Sidebar;