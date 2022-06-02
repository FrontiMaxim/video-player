import React, {useEffect, useState} from "react";
import style from "./style.module.scss";
import Player from "./Player/Player";


function Section({typeSection, url, param}) {

    const [content, setContent] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(data => data.json()).then(data => setContent(data), error => setError(error));
    }, []);

    const noEmpty =  <div className={style.container}>
                {
                    content.map((video, idx) => <Player key={idx} typePlayer={typeSection} video={video}/>)
                }
              </div>;

    const empty = <div className={style.empty}>Для данной категории материал не найден...</div>;

    return (
        <div className={style.section}>
            <div className={style.nameSection}>
                {typeSection}
            </div>
            {
                content.length !== 0 ? noEmpty : empty
            }
        </div>
    );
}

export default Section;