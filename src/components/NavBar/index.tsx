import React from "react";
import './index.css';
import axios from "axios";
import {Button} from "react-bootstrap";

/**
 * 顶部导航栏组件
 */
function NavBar(props: any) {

    const {registerOpen, loginOpen} = props;

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top bg-body-tertiary" id="navbar">
            <div className="container-md">

                <a className="navbar-brand" href="#">
                    <img src="/icon/nav.png" alt="Band" width={88} height={30}
                         className="d-inline-block align-top"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">首页</a>
                        </li>

                        <Button onClick={loginOpen} className="text-decoration-none" variant="link">
                            登录
                        </Button>
                        <Button onClick={registerOpen} className="text-decoration-none" variant="link">
                            注册
                        </Button>

                        <li className="nav-item">
                            <a className="nav-link" href="#">消息</a>
                        </li>

                        {/*FIXME 为什么下拉框失效了*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false" data-bs-auto-close="true">
                                个人中心
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">个人主页</a></li>
                                <li><a className="dropdown-item" href="#">个人信息</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">注销</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1}
                               aria-disabled="true">管理员后台</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="查找讨论贴/文章"
                               aria-label="Search"/>
                        <button className="btn btn-sm btn-outline-dark" type="submit" style={{width: '4em'}}>搜索
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;