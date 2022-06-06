import React from "react";
import style from "./style.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Content from "../Content/Content";

const img = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#C4C4C4"/>
</svg>;

const listFollowing = [
    {
        img,
        link: '#',
        text: 'Eleanor Pena'
    },
    {
        img,
        link: '#',
        text: 'DIY with Albert'
    },
    {
        img,
        link: '#',
        text: 'Everything tech'
    },
    {
        img,
        link: '#',
        text: 'Eleanor Pena'
    }
];

function Home(props) {
    return (
        <div className={style.home}>
            <Sidebar listFoLlowing={listFollowing}/>
            <Header />
            <Content />
        </div>
    );
}

export default Home;