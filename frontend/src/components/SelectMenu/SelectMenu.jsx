import React from 'react';
import style from './style.module.scss';

import {listSelect} from "./select";

function SelectMenu({isOpen}) {

    const toExit = (e) => {
        if(e.target.textContent.toLowerCase() === 'exit') {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    return (
        <div className={style.selectMenu} style={{display: `${isOpen ? 'block' : 'none'}`}}>
            <ul className={style.listSelectMenu} onClick={(e) => {toExit(e)}}>
                {
                    listSelect.map(item => <li className={style.item}>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default SelectMenu;