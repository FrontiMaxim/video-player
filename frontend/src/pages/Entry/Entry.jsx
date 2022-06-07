import React, {useState, useContext} from "react";
import style from "./style.module.scss"
import {ContextAuthorization, ContextUser} from "../../context";

import icon from "../../assets/Sidebar/logo.svg";
import viewer from "../../assets/Sidebar/viewer.svg";

function Entry(props) {

    const [btnText, setBtnText] = useState('Sign Up');
    const [typeForm, setTypeForm] = useState('registration');
    const [isRegistration, setIsRegistration] = useState(true);
    const [isError, setIsError] = useState(false);

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setIsAuth } = useContext(ContextAuthorization);
    const {setUser} = useContext(ContextUser);

    async function request(url, body) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            const status = response.status;
            const user = await response.json();

            if(status === 201) {
                // регистрация
                setIsAuth(true);
                setUser(user);
            } else if (status === 200) {
                // аутентификация
                setIsAuth(true);
                setUser(user);
            } else if (status === 404) {
                setIsError(true);
            } else if (status === 403) {
                alert("Такой пользователь уже существует!");
            }

        } catch (e) {
            console.log(e);
        }
    }

    function clickSubmit(e) {
        e.preventDefault();
        if(email) {
            if(password) {
                if(isRegistration) {
                    if(nickname) {
                        request('/registration', {nickname, email, password});
                    } else {
                        alert("заполнить никнейм!");
                    }
                } else {
                    request('/authentication', {email, password});
                }
            } else {
                alert("заполнить пароль!");
            }

        } else {
            alert("заполнить почут!");
        }
    }

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
                      <a href="frontend/src/pages/Entry/Entry#">Sign Up</a>
                    </span>
                    |
                    <span className={style.authentication} onClick={(e) => {
                        e.preventDefault();
                        setIsRegistration(false);
                        setBtnText('Sign In');
                        setTypeForm('authentication');
                    }}>
                        <a href="frontend/src/pages/Entry/Entry#">Sign In</a>
                    </span>
                </div>
            </div>

            <div className={style.containerForm}>
                <form action="frontend/src/pages/Entry/Entry">
                    <span className={style.headForm }>{typeForm}</span>
                    {
                        isRegistration &&
                        <div className={style.inputGroup}>
                            <input type="text" id="nickname" placeholder="nickname" onChange={(e) => {
                            setNickname(e.target.value)}
                            }/>
                        </div>
                    }

                    <div className={style.inputGroup}>
                        <input type="email" id="email" placeholder="email" onChange={(e) => {
                            setEmail(e.target.value)}
                        }/>
                    </div>
                    <div className={style.inputGroup}>
                        <input type="password" id="password" placeholder="password" onChange={(e) => {
                            setPassword(e.target.value)}
                        }/>
                    </div>
                    <button className={style.btnSubmit} onClick={(e) => clickSubmit(e)}>{btnText}</button>
                    {
                        isError && !isRegistration && <span className={style.error}>this user does not exist...</span>
                    }
                </form>
            </div>
        </div>
    );
}

export default Entry;