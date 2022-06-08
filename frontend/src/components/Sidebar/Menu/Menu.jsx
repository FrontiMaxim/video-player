import React from 'react';
import style from './style.module.scss';
import ItemMenu from "./ItemMenu/ItemMenu";

function Menu({name, list}) {
    return (
        <div className={style.menu}>
            <span className={style.name}>{name}</span>
            <ul className={style.list}>
                {
                    list ? list.map((node, idx) => {
                        if (idx !== 4) {
                            return <ItemMenu key={`item${name + idx}`} item={node}/>
                        }
                    }) : <span className={style.noSubscription}>no subscriptions yet</span>
                }
            </ul>
        </div>
    );
}

export default Menu;