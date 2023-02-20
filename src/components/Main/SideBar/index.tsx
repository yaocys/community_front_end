import React from "react";
import Carousel from "../Carousel";

function SideBar() {
    return (
        <div className="col-3" id="side-bar">

            <div className="card" style={{marginTop: "1em"}}>
                <div className="card-body">
                    <div style={{marginBottom: "0.5em"}} className="d-flex align-items-center card-title">
                        <a href="" style={{marginRight: "0.5em"}}>
                            <img src="http://images.nowcoder.com/head/1t.png"
                                 className="mr-4 rounded-circle user-header" alt="用户头像" height="40px"/>
                        </a>
                        <div className="d-inline-block align-items-center">
                            <div>
                                <a href="">
                                    <span id="username" style={{marginRight: "0.5em"}}
                                          className="text-muted d-block">捞捞张同学吧</span>
                                    <small className="badge rounded-pill bg-success-subtle fw-medium"
                                           style={{fontSize: "x-small"}}>
                                        <i className="bi bi-1-circle"></i> 初出茅庐
                                    </small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="card-text">这里展示一些用户信息，比如用户的等级和经验，用户的帖子数量、粉丝数量等</p>
                    <a href="#" className="card-link">签到</a>
                    <a href="#" className="card-link">个人主页</a>
                    <a href="#" className="card-link">我的收藏</a>
                </div>
            </div>

            <Carousel/>
            <HotList/>

        </div>
    )
}

function HotList() {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">
                    <i className="bi bi-fire" style={{color: "#ff7675"}}></i>
                    站内热帖
                </h5>
            </div>
            <ul className="list-group list-group-flush">
                <a className="list-group-item link-danger" href="">1. 23届求职互助阵地</a>
                <a className="list-group-item link-warning" href="">2. 我的实习求职记录</a>
                <a className="list-group-item link-info" href="">3. 0 Offer 孩子太菜</a>
                <a className="list-group-item" href="">4. 你的秋招进展如何</a>
                <a className="list-group-item" href="">5. 考研复试即将开始</a>
            </ul>
        </div>
    )
}

export default SideBar;