import React from "react";
import style from "./style.module.scss";
import Section from "./Sections/Section";


function Content(props) {
    return (
        <div className={style.content}>
            <Section typeSection={'for you'} url={'/content'} param={{}} />
            {/*<Section typeSection={'for you'} arrVideo={} />*/}
        </div>
    );
}

export default Content;