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
    const [registerShow, setRegisterShow] = useState<boolean>(false);

    const registerClose = () => {
        setRegisterShow(false);
    }

    const registerOpen = () => {
        setRegisterShow(true);
    }

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
            <NavBar ticket={ticket} setCaptcha={setCaptcha}
                    getCaptcha={getCaptcha} removeTicket={removeTicket}
                    setTicket={setTicket} registerOpen={registerOpen}/>
            <Main/>
            <Login captcha={captcha} getCaptcha={getCaptcha} ticket={ticket}/>
            <Register registerShow={registerShow} registerClose={registerClose}/>
            <Footer/>
        </>
    );
}

export default App;
