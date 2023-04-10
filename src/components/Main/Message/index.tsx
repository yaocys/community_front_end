import React from "react";
import './index.css';
import {ListGroup, Button, Card} from "react-bootstrap";
import {NavLink, Route, Routes, useNavigate, Outlet} from "react-router-dom";
import Like from "./Like";
import Follower from "./Follower";

function Message() {

    const navigate = useNavigate();

    function handleRoute(path: string) {
        navigate(path);
    }


    return (
        <div className="container row m-auto" style={{backgroundColor: "white"}}>
            <div className="col-2 container" style={{backgroundColor: "#c7ecee", position: "sticky", top: "56px"}}
                 id="message-main">
                <nav className="nav flex-column mt-5">
                    <span className="mb-3 fs-5 text-center">
                        消息中心&nbsp;<i className="bi bi-trash"></i>
                    </span>
                    <Button variant="outline-dark" className="mb-3 border-0" onClick={() => handleRoute('notice')}>
                        <i className="bi bi-bell"></i>&nbsp;系统通知
                    </Button>
                    <Button variant="outline-dark" className="mb-3 border-0" onClick={() => handleRoute('like')}>
                        <i className="bi bi-hand-thumbs-up"></i>&nbsp;赞和收藏
                    </Button>
                    <Button variant="outline-dark" className="mb-3 border-0" onClick={() => handleRoute('comment')}>
                        <i className="bi bi-chat-dots"></i>&nbsp;评论和@
                    </Button>
                    <Button variant="outline-dark" className="mb-3 border-0" onClick={() => handleRoute('follower')}>
                        <i className="bi bi-plus-lg"></i>&nbsp;新增关注
                    </Button>
                    <Button variant="outline-dark" className="mb-3 border-0" onClick={() => handleRoute('letter')}>
                        <i className="bi bi-envelope"></i>&nbsp;我的私信
                    </Button>
                </nav>
            </div>
            <div className="col-10 container" style={{height: "calc(100vh - 56px)", overflow: "auto"}}>

                {/*二级路由*/}
                <Outlet/>
            </div>
        </div>
    )
}

export default Message;