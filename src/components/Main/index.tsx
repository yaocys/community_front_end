import React from "react";
import './index.css';

import PostList from "./PostList";
import SideBar from "./SideBar";

function Main() {
    return (
        <div className="container row" id="main" style={{background: "white"}}>
            <PostList/>
            <SideBar/>
        </div>
    )
}

export default Main;

