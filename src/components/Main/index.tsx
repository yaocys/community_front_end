import React from "react";
import './index.css';

import PostList from "./PostList";
import SideBar from "./SideBar";

function Main(props: any) {
    const {ticket} = props;
    return (
        <div className="container row" id="main" style={{background: "white"}}>
            <PostList ticket={ticket}/>
            <SideBar/>
        </div>
    )
}

export default Main;

