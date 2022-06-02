import React, {useState} from "react";
import style from "./style.module.scss"

import icon from "../../assets/Sidebar/logo.svg";
import viewer from "../../assets/Sidebar/viewer.svg";

function Entry(props) {

    const [btnText, setBtnText] = useState('Sign Up');
    const [typeForm, setTypeForm] = useState('registration');
    const [isRegistration, setIsRegistration] = useState(true);
    
    console.log("render");

    return (
        <div className={style.entry}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={icon} alt="logo"/>
                    <img src={viewer} alt="viewer"/>
                </div>
                <div className={style.selection}>
                    <span className={style.registration} onClick={(e) => {
                        e.preventDefault();
                        setIsRegistration(true);
                        setBtnText('Sign Up');
                        setTypeForm('registration');
                    }}>
                      <a href="#">Sign Up</a>
                    </span>
                    |
                    <span className={style.authentication} onClick={(e) => {
                        e.preventDefault();
                        setIsRegistration(false);
                        setBtnText('Sign In');
                        setTypeForm('authentication');
                    }}>
                        <a href="#">Sign In</a>
                    </span>
                </div>
            </div>

            <div className={style.containerForm}>
                <form action="">
                    <span className={style.headForm }>{typeForm}</span>
                    {
                        isRegistration &&
                        <div className={style.inputGroup}>
                            <input type="text" id="nickname" placeholder="nickname"/>
                        </div>
                    }

                    <div className={style.inputGroup}>
                        <input type="email" id="email" placeholder="email"/>
                    </div>
                    <div className={style.inputGroup}>
                        <input type="password" id="password" placeholder="password"/>
                    </div>
                    <button className={style.btnSubmit}>{btnText}</button>
                </form>
            </div>

        </div>
    );
}

export default Entry;