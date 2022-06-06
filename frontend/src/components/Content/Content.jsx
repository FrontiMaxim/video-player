import React from "react";
import style from "./style.module.scss";
import Section from "./Sections/Section";


function Content(props) {
    return (
        <div className={style.content}>
            <Section typeSection={'for you'} url={'/content'} param={{}} />
            <Section typeSection={'trending'} />
        </div>
    );
}

export default Content;