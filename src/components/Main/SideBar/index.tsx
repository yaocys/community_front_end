import React from "react";
import Carousel from "../Carousel";
import {Button, Card, ListGroup} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import cookie, {handleSubmit} from "../../../util/utils";

const SideBar = (props: any) => {
    const {ticket, registerOpen, loginOpen, handleProfile} = props;

    const ifLoginShow = () => {
        if (ticket === undefined) {
            // 没登陆的页面
            return (
                <Card className="mt-2">
                    <Card.Header>
                        <Card.Title>
                            岸途——你我的上岸之路
                        </Card.Title>
                        <Card.Text>
                            考研资讯交流
                        </Card.Text>
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-around align-items-center">
                        <Button variant="outline-primary" onClick={loginOpen}>现在登录</Button>
                        <Button variant="outline-success" onClick={registerOpen}>马上注册</Button>
                    </Card.Body>
                </Card>
            )
        } else return (
            <Card className="mt-2">
                <Card.Body>
                    <div style={{marginBottom: "0.5em"}} className="d-flex align-items-center card-title">
                        <img src={cookie.get("headerUrl")} className="mr-4 rounded-circle user-header" alt="用户头像"
                             height="40px" style={{marginRight: "0.5em", cursor: 'pointer'}}
                             onClick={() => handleProfile(cookie.get('userId'))}/>
                        <div className="d-inline-block align-items-center">
                            <div>
                                <Link id="username" style={{marginRight: "0.5em", cursor: 'pointer'}}
                                      className="text-muted d-block"
                                      to={`/user/${cookie.get('userId')}`}>{cookie.get("username")}</Link>
                                <small className="badge rounded-pill bg-success-subtle fw-medium"
                                       style={{fontSize: "x-small", cursor: 'pointer'}}>
                                    <i className="bi bi-1-circle"></i> 初出茅庐
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="row container m-0 pt-3 text-center user-select-none"
                         style={{paddingLeft: 0, paddingRight: 0}}>
                        <div className="col-3 p-0">
                            <div className="w-100 mb-2 fs-5 text-muted">7</div>
                            关注
                        </div>
                        <div className="col-3 p-0">
                            <div className="w-100 mb-2 fs-5 text-muted">4</div>
                            粉丝
                        </div>
                        <div className="col-3 p-0">
                            <div className="w-100 mb-2 fs-5 text-muted">251</div>
                            访客
                        </div>
                        <div className="col-3 p-0">
                            <div className="w-100 mb-2 fs-5 text-muted">14</div>
                            获赞
                        </div>
                    </div>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex d-flex justify-content-between align-items-center">
                        <Card.Link href="#"><i className="bi bi-calendar-check"></i>&nbsp;签到</Card.Link>
                        <Link to={`/user/${cookie.get('userId')}`}>
                            <i className="bi bi-person-lines-fill"></i>&nbsp;个人主页
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
    return (
        <div className="col-3" id="side-bar" style={{minWidth: "260px"}}>

            {
                ifLoginShow()
            }

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