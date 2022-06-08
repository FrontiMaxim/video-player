import React, {useContext} from "react";
import style from "./style.module.scss";
import {ContextUser} from "../../context";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";

function Home(props) {

    const {user} = useContext(ContextUser);

    return (
        <div className={style.home}>
            <Sidebar />
            <Header user={user}/>
            <Content />
        </div>
    );
}

export default Home;