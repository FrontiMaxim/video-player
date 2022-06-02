import React from "react";
import style from "./style.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Content from "../Content/Content";

function Home(props) {
    return (
        <div className={style.home}>
            <Sidebar />
            <Header />
            <Content />
        </div>
    );
}

export default Home;