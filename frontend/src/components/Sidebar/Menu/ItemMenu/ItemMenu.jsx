import React from 'react';
import style from './style.module.scss';

function ItemMenu({item}) {
    return (
        <li className={style.itemMenu}>
            <a href={item.link}>
                {item.img}
                <span>{item.text}</span>
            </a>
        </li>
    );
}

export default ItemMenu;