import React from "react";
import './index.css';
import axios from "axios";
import {Cookies} from "react-cookie";
import {Button, Dropdown, Nav, NavDropdown} from "react-bootstrap";

/**
 * 顶部导航栏组件
 */
function NavBar(props: any) {

    const {registerOpen, loginOpen, ticket, setTicket} = props;
    const cookie = new Cookies;
    const logout = () => {
        setTicket(undefined);
        cookie.remove('ticket');
        // 向后端发送请求
    }

    const ifLoginShow = () => {
        if (ticket === undefined) {
            // 用户未登录
            return (
                <>
                    <Button onClick={loginOpen} variant="link"
                            className="text-decoration-none">
                        登录
                    </Button>
                    <Button onClick={registerOpen} variant="link"
                            className="text-decoration-none">
                        注册
                    </Button>
                </>
            )
        } else {
            // 登录了
            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="#">消息</a>
                    </li>

                    <Nav>
                        <NavDropdown id="personal-center" title="个人中心">
                            <Dropdown.Header className="user-select-none">
                                用户名
                            </Dropdown.Header>
                            <NavDropdown.Item href="#action/3.1">
                                账号设置
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                个人中心
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item onClick={logout}>
                                退出登录
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </>
            )
        }
    }

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

                        {
                            ifLoginShow()
                        }

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