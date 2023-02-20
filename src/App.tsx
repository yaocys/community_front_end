import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import Login from "./components/Main/Modal/Login";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Register from "./components/Main/Modal/Register";
import {Cookies} from "react-cookie";
import Publish from "./components/Main/Modal/Publish";

function App(props: any) {

    const [captcha, setCaptcha] = useState<string>("");
    const [ticket, setTicket] = useState(undefined);

    const cookie = new Cookies();

    useEffect(() => {
        setTicket(cookie.get("ticket"));
        console.log(ticket);
    }, [cookie]);

    /*
    控制模态框的显示
     */
    const [registerShow, setRegisterShow] = useState<boolean>(false);
    const [loginShow, setLoginShow] = useState<boolean>(false);

    const registerClose = () => {
        setRegisterShow(false);
    }

    const registerOpen = () => {
        setRegisterShow(true);
    }

    const loginOpen = () => {
        setLoginShow(true);
        getCaptcha();
    }

    const loginClose = () => {
        setLoginShow(false);
    }

    const switchToRegister = () => {
        setLoginShow(false);
        setRegisterShow(true);
    }

    const switchToLogin = () => {
        setRegisterShow(false);
        getCaptcha();
        setLoginShow(true);
    }

    /**
     * 获取验证码图片
     */
    const getCaptcha = () => {
        axios.get('http://localhost:8079/community/captcha', {
            responseType: "blob",
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            response => {
                let blob = new Blob([response.data], {type: response.data.type});
                setCaptcha(URL.createObjectURL(blob));
            },
            error => {
                console.log('请求失败', error);
            }
        )
    }

    return (
        <>
            <NavBar registerOpen={registerOpen} loginOpen={loginOpen} ticket={ticket} setTicket={setTicket}/>
            <Main ticket={ticket}/>
            <Login captcha={captcha} getCaptcha={getCaptcha}
                   loginShow={loginShow} loginClose={loginClose}
                   switchToRegister={switchToRegister}/>

            <Register registerShow={registerShow} registerClose={registerClose}
                      switchToLogin={switchToLogin}/>

            <Publish/>

            <Footer/>
        </>
    );
}

export default App;
