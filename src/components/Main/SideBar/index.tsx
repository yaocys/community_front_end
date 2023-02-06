import React from "react";
import Carousel from "../Carousel";

function SideBar() {
    return (
        <div className="col-3" id="side-bar">

            <div className="card" style={{marginTop: "1em"}}>
                <div className="card-body">
                    <img src="http://images.nowcoder.com/head/1t.png"
                         className="mr-4 rounded-circle user-header" alt="用户头像" height="40rem" width="40rem"/>
                    <span className="card-title">   捞捞张同学吧</span>
                    <p className="card-text">这里展示一些用户信息，比如用户的等级和经验，用户的帖子数量、粉丝数量等</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">签到</a>
                    <a href="#" className="card-link">个人主页</a>
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
            <div className="card-body">
                <h5 className="card-title">站内热帖</h5>
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