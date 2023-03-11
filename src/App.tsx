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
import Detail from "./components/Main/Modal/Detail";

/**
 * 贴子实体类对象
 */
interface DiscussPost {

}

function App(props: any) {

    const [captcha, setCaptcha] = useState<string>("");
    const [ticket, setTicket] = useState(undefined);

    const cookie = new Cookies();

    useEffect(() => {
        setTicket(cookie.get("ticket"));
    }, [cookie]);

    /*
    控制模态框的显示
     */
    const [registerShow, setRegisterShow] = useState<boolean>(false);
    const [loginShow, setLoginShow] = useState<boolean>(false);
    const [detailShow, setDetailShow] = useState<boolean>(false);
    const [postDetail, setPostDetail] = useState<any>(undefined);// 单个帖子详情对象

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
     * 获取帖子详情
     * 难道有参数的调用都需要写成箭头函数？
     * @param discussPostId
     */
    const detailOpen = (discussPostId: string) => {
        setDetailShow(true);
        axios.get(`http://localhost:8079/community/post/detail/${discussPostId}`).then(
            response => {
                // 获取到帖子详情数据
                setPostDetail(response.data.data);
            },
            error => {
                console.log('请求失败', error);
            }
        )
    }

    const detailClose = () => {
        setPostDetail(undefined);
        setDetailShow(false);
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

            <Main ticket={ticket} detailOpen={detailOpen}/>

            <Login captcha={captcha} getCaptcha={getCaptcha}
                   loginShow={loginShow} loginClose={loginClose}
                   switchToRegister={switchToRegister}/>

            <Register registerShow={registerShow} registerClose={registerClose}
                      switchToLogin={switchToLogin}/>

            <Publish/>

            <Detail detailShow={detailShow} detailClose={detailClose} postDetail={postDetail}/>

            <Footer/>
        </>
    );
}

export default App;
