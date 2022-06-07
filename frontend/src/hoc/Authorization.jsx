import React, {useState, useContext} from 'react';
import {Navigate} from "react-router-dom";
import Home from "../pages/Home/Home";
import {ContextAuthorization} from "../context";
import Entry from "../pages/Entry/Entry";

function Authorization(props) {

    const {isAuth} = useContext(ContextAuthorization);

    if(isAuth) {
        return (<Home />);
    } else {
        return (<Entry />);
    }
}

export default Authorization;