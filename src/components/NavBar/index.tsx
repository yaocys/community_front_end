import React, {useState} from "react";
import './index.css';
import axios from "../../util/axios";
import {Cookies} from "react-cookie";
import {Button, Dropdown, Nav, NavDropdown, Form, InputGroup, Image} from "react-bootstrap";
import {Link, NavLink, useNavigate} from "react-router-dom";

/**
 * 顶部导航栏组件
 */
function NavBar(props: any) {

    const {registerOpen, loginOpen, ticket, setTicket} = props;
    const cookie = new Cookies();

    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();

    const logout = () => {
        axios.get('/logout').then(
            response => {
                /*
                因为是异步请求，所以这里的清除cookie要放在里面，不然发请求的时候cookie就已经被清除了
                 */
                setTicket(undefined);
                cookie.remove('ticket');
                cookie.remove('userId');
                cookie.remove('username');
                cookie.remove('headerUrl');
                alert("注销成功");
                window.location.reload();
            }
        )
    }

    const saveSearchInput = (e: any) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        if (search !== '') navigate(`/search?keyword=${search}`);
    }

    /**
     * 用户登录状态不同的不同的状态栏显示
     */
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
                        <NavLink to="/message" className="nav-link">消息</NavLink>
                    </li>

                    <Nav>
                        <NavDropdown id="personal-center" title={
                            <Image src={cookie.get("headerUrl")} roundedCircle={true}
                                   style={{
                                       height: "30px", position: "absolute", top: "50%", left: "50%",
                                       transform: "translate(-50%,-50%)", marginLeft: "2rem"
                                   }}/>

                        }>
                            <Dropdown.Header className="user-select-none">
                                {cookie.get("username")}
                            </Dropdown.Header>
                            <NavDropdown.Item href="#action/3.1">
                                账号设置
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/user">
                                    个人中心
                                </Link>
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

                <NavLink to="/index" className="navbar-brand">
                    <img src="/icon/nav.png" alt="Band" width={88} height={30}
                         className="d-inline-block align-top"/>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/index" className="nav-link">首页</NavLink>
                        </li>

                        {
                            ifLoginShow()
                        }

                        {/*                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1}
                               aria-disabled="true">管理员后台</a>
                        </li>*/}
                    </ul>
                    <Form className="d-flex">
                        <InputGroup>
                            <Form.Control placeholder="Search for … ?" aria-label="Search Input"
                                          aria-describedby="basic-addon2" onChange={saveSearchInput}/>
                            <Button variant="outline-secondary" onClick={handleSearch}>搜索</Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;