import React from "react";
import style from "./style.module.scss";
import Player from "./Player/Player";


function Section({typeSection, arrVideo}) {

    return (
        <div className={style.section}>
            <div className={style.nameSection}>
                {typeSection}
            </div>
            <div className={style.container}>
                {
                    arrVideo.map((video, idx) => <Player key={idx} typePlayer={typeSection} video={video}/>)
                }
            </div>
        </div>
    );
}

export default Section;