import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import {useCookies} from "react-cookie/cjs";
import Login from "./components/Main/Modal/Login";
import React, {useState} from "react";
import axios from "axios";
import Register from "./components/Main/Modal/Register";

function App() {
    const [ticket, setTicket, removeTicket] = useCookies(['ticket']);
    const [captcha, setCaptcha] = useState<string>("");

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
            <NavBar registerOpen={registerOpen} loginOpen={loginOpen}/>
            <Main/>
            <Login captcha={captcha} getCaptcha={getCaptcha} ticket={ticket}
                   loginShow={loginShow} loginClose={loginClose}
                   switchToRegister={switchToRegister}/>

            <Register registerShow={registerShow} registerClose={registerClose}
                      switchToLogin={switchToLogin}/>
            <Footer/>
        </>
    );
}

export default App;
