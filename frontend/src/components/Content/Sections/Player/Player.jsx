import React from "react";
import style from "./style.module.scss";


function Player({typePlayer, video}) {

    function setTypePlayer(typePlayer) {

        if (typePlayer === 'for you') {
            return style.for_you;
        } else  if (typePlayer === 'related') {
            return style.related;
        } else {
            return style.trending;
        }
    }


    return (
        <div className={`${style.player} ${setTypePlayer(typePlayer)}`}>
            <video poster={video.poster}>
                <source src="#"/>
            </video>
            <div className={style.nameVideo}>
                {video.nameVideo}
            </div>
            <div className={style.views_date}>
                <span className={style.views}>{video.views} views</span>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#88878A"/>
                </svg>
                <span className={style.date}>{video.date}</span>
            </div>
            <div className={style.author}>
                <img src={video.avatar} alt="avatar"/>
                <span>{video.author}</span>
            </div>
        </div>
    );
}

export default Player;