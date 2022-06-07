import React, {useContext} from "react";
import style from "./style.module.scss";
import {ContextUser} from "../../context";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";

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

    const {user} = useContext(ContextUser);

    return (
        <div className={style.home}>
            <Sidebar listFoLlowing={listFollowing}/>
            <Header user={user}/>
            <Content />
        </div>
    );
}

export default Home;