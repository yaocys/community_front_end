import React, {useEffect, useState} from "react";
import {Button, Card, Badge, Offcanvas} from "react-bootstrap";
import PostItem from "../Main/PostList/PostItem";
import Pagination from "../Main/Pagination";
import {useParams} from "react-router-dom";

import axios from "../../util/axios";
import cookie from "../../util/utils";

import './index.css';

interface UserInfo {
    id: number,
    username: string,
    email: string,
    type: number,
    status: number,
    activationCode: string,
    headerUrl: string,
    createTime: string
}

const initialUserInfo: UserInfo = {
    id: 0,
    username: '',
    email: '',
    type: 0,
    status: 0,
    activationCode: '',
    headerUrl: '',
    createTime: ''
};

/**
 * 这个有点不一样就是查看自己的个人中心和点开别人的个人中心的区别
 * @constructor
 */
function PersonalCenter() {

    const {userId} = useParams();

    const [show, setShow] = useState(false);
    const [followerCount, setFollowerCount] = useState(0);
    const [followeeCount, setFolloweeCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);
    const [followed, setFollowed] = useState(false);
    const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getProfile = (userId: any) => {
        axios.get(`/user/profile/${userId}`).then(
            response => {
                setFollowerCount(response.data.data.followerCount);
                setFolloweeCount(response.data.data.followeeCount);
                setLikeCount(response.data.data.likeCount);
                setFollowed(response.data.data.hasFollowed);
                setUserInfo(response.data.data.userVO);
            }
        )
    }

    useEffect(() => {
        // 判断是当前用户的主页还是其他人的主页
        if (userId === cookie.get('userId')) {
            // 1. 个人签名的编辑不显示
            // 2. 个人资料的标记不显示
            // 3. 显示一个关注按钮
        }
        getProfile(userId);
    }, [userId])

    return (
        <div className="container">
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <ul className="nav nav-pills mb-3 d-flex" id="myTab2" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="follower-tab" data-bs-toggle="tab"
                                    data-bs-target="#follower-tab-pane" type="button" role="tab"
                                    aria-controls="follower-tab-pane" aria-selected="true">
                                关注&nbsp;<span className="badge text-bg-secondary">4</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="followee-tab" data-bs-toggle="tab"
                                    data-bs-target="#followee-tab-pane" type="button" role="tab"
                                    aria-controls="followee-tab-pane" aria-selected="false">
                                粉丝&nbsp;<span className="badge text-bg-secondary">4</span>
                            </button>
                        </li>
                    </ul>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="tab-content" id="myTab2Content">
                        <div className="tab-pane fade" id="follower-tab-pane" role="tabpanel"
                             aria-labelledby="follower-tab" tabIndex={0}>
                            <Card className="mb-3">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="row">
                                            {/*头像*/}
                                            <div className="col-3 d-flex justify-content-center align-items-center"
                                                 style={{alignItems: "center"}}>
                                                <img src="http://images.nowcoder.com/head/1t.png"
                                                     className="rounded-circle user-header" alt="用户头像"
                                                     height="48px"/>
                                            </div>

                                            {/*卡片主体内容*/}
                                            <div className="col-9 d-inline-block">
                                                <div className="d-flex mb-2">
                                                    <span id="username" style={{marginRight: "0.5em"}}>捞捞张同学</span>
                                                    <small className="badge rounded-pill bg-success-subtle fw-medium"
                                                           style={{fontSize: "x-small"}}>
                                                        <i className="bi bi-1-circle"></i> 初出茅庐
                                                    </small>
                                                </div>
                                                <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天
                                                    17:54</Card.Text>
                                            </div>
                                        </div>
                                        <Button className="btn-sm btn-secondary">已关注</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                            <Card className="mb-3">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="row">
                                            {/*头像*/}
                                            <div className="col-3 d-flex justify-content-center align-items-center"
                                                 style={{alignItems: "center"}}>
                                                <img src="http://images.nowcoder.com/head/1t.png"
                                                     className="rounded-circle user-header" alt="用户头像"
                                                     height="48px"/>
                                            </div>

                                            {/*卡片主体内容*/}
                                            <div className="col-9 d-inline-block">
                                                <div className="d-flex mb-2">
                                                    <span id="username" style={{marginRight: "0.5em"}}>捞捞张同学</span>
                                                    <small className="badge rounded-pill bg-success-subtle fw-medium"
                                                           style={{fontSize: "x-small"}}>
                                                        <i className="bi bi-1-circle"></i> 初出茅庐
                                                    </small>
                                                </div>
                                                <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天
                                                    17:54</Card.Text>
                                            </div>
                                        </div>
                                        <Button className="btn-sm btn-secondary">已关注</Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="tab-pane fade show active" id="followee-tab-pane" role="tabpanel"
                             aria-labelledby="followee-tab" tabIndex={0}>
                            <div className="list-group">
                                <Card className="mb-3">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="row">
                                                {/*头像*/}
                                                <div className="col-3 d-flex justify-content-center align-items-center"
                                                     style={{alignItems: "center"}}>
                                                    <img src="http://images.nowcoder.com/head/1t.png"
                                                         className="rounded-circle user-header" alt="用户头像"
                                                         height="48px"/>
                                                </div>

                                                {/*卡片主体内容*/}
                                                <div className="col-9 d-inline-block">
                                                    <div className="d-flex mb-2">
                                                        <span id="username"
                                                              style={{marginRight: "0.5em"}}>捞捞张同学</span>
                                                        <small
                                                            className="badge rounded-pill bg-success-subtle fw-medium"
                                                            style={{fontSize: "x-small"}}>
                                                            <i className="bi bi-1-circle"></i> 初出茅庐
                                                        </small>
                                                    </div>
                                                    <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天
                                                        17:54</Card.Text>
                                                </div>
                                            </div>
                                            <Button className="btn-sm"><i
                                                className="bi bi-plus-lg"></i>&nbsp;关注</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="row">
                                                {/*头像*/}
                                                <div className="col-3 d-flex justify-content-center align-items-center"
                                                     style={{alignItems: "center"}}>
                                                    <img src="http://images.nowcoder.com/head/1t.png"
                                                         className="rounded-circle user-header" alt="用户头像"
                                                         height="48px"/>
                                                </div>

                                                {/*卡片主体内容*/}
                                                <div className="col-9 d-inline-block">
                                                    <div className="d-flex mb-2">
                                                        <span id="username"
                                                              style={{marginRight: "0.5em"}}>捞捞张同学</span>
                                                        <small
                                                            className="badge rounded-pill bg-success-subtle fw-medium"
                                                            style={{fontSize: "x-small"}}>
                                                            <i className="bi bi-1-circle"></i> 初出茅庐
                                                        </small>
                                                    </div>
                                                    <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天
                                                        17:54</Card.Text>
                                                </div>
                                            </div>
                                            <Button className="btn-sm"><i
                                                className="bi bi-plus-lg"></i>&nbsp;关注</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="row">
                                                {/*头像*/}
                                                <div className="col-3 d-flex justify-content-center align-items-center"
                                                     style={{alignItems: "center"}}>
                                                    <img src="http://images.nowcoder.com/head/1t.png"
                                                         className="rounded-circle user-header" alt="用户头像"
                                                         height="48px"/>
                                                </div>

                                                {/*卡片主体内容*/}
                                                <div className="col-9 d-inline-block">
                                                    <div className="d-flex mb-2">
                                                        <span id="username"
                                                              style={{marginRight: "0.5em"}}>捞捞张同学</span>
                                                        <small
                                                            className="badge rounded-pill bg-success-subtle fw-medium"
                                                            style={{fontSize: "x-small"}}>
                                                            <i className="bi bi-1-circle"></i> 初出茅庐
                                                        </small>
                                                    </div>
                                                    <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天
                                                        17:54</Card.Text>
                                                </div>
                                            </div>
                                            <Button className="btn-sm"><i
                                                className="bi bi-plus-lg"></i>&nbsp;关注</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                                {
                                    // postList && postList.map((post: any) => {
                                    //     return (
                                    //         <PostItem key={post.id} post={post} detailOpen={detailOpen}/>
                                    //     )
                                    // })
                                }
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <div className="container d-flex justify-content-between align-items-center">
                <Card className="mb-3 mt-3 w-100">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center" style={{minWidth: "60%"}}>
                            <div>
                                <div className="row">
                                    {/*头像*/}
                                    <div className="col-3 d-flex justify-content-center align-items-center"
                                         style={{alignItems: "center"}}>
                                        <img src={userInfo.headerUrl}
                                             className="rounded-circle user-header" alt="用户头像" height="80px"/>
                                    </div>

                                    {/*卡片主体内容*/}
                                    <div className="col-9 d-inline-block">
                                        <div className="d-flex mb-2">
                                    <span id="username"
                                          style={{marginRight: "0.5em", fontSize: "large"}}>{userInfo.username}</span>
                                            <small className="badge rounded-pill bg-success-subtle fw-medium"
                                                   style={{fontSize: "x-small"}}>
                                                <i className="bi bi-1-circle"></i> 初出茅庐
                                            </small>
                                        </div>
                                        <div>
                                            <Badge bg="primary">
                                                男
                                            </Badge>{' '}
                                            <Badge bg="secondary">
                                                西华大学
                                            </Badge>{' '}
                                            <Badge bg="success">
                                                2023
                                            </Badge>{' '}
                                            <Badge bg="warning" text="dark">
                                                Java
                                            </Badge>{' '}
                                            <Badge bg="info">
                                                IP归属地：四川
                                            </Badge>{' '}
                                            <Badge bg="dark">
                                                码龄：6年
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <Card.Text className="mt-3 text-muted">点击添加简介，让大家认识你&nbsp;
                                    <b className="bi bi-pencil"></b></Card.Text>
                            </div>
                            <div style={{maxWidth: "30%"}}>
                                <div className="row container m-0 pt-3 text-center user-select-none"
                                     style={{paddingLeft: 0, paddingRight: 0}}>
                                    <div className="col-3 p-0" onClick={handleShow} style={{cursor: 'pointer'}}>
                                        <div className="w-100 mb-2 fs-5 text-muted">{followeeCount}</div>
                                        关注
                                    </div>
                                    <div className="col-3 p-0" onClick={handleShow} style={{cursor: 'pointer'}}>
                                        <div className="w-100 mb-2 fs-5 text-muted">{followerCount}</div>
                                        粉丝
                                    </div>
                                    <div className="col-3 p-0">
                                        <div className="w-100 mb-2 fs-5 text-muted">251</div>
                                        访客
                                    </div>
                                    <div className="col-3 p-0">
                                        <div className="w-100 mb-2 fs-5 text-muted">{likeCount}</div>
                                        获赞
                                    </div>
                                </div>
                                <Card.Text className="mt-3 text-muted">个人资料完整度：79%&nbsp;&nbsp;
                                    <a href="#">去编辑{'>>'}</a></Card.Text>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </div>
            <div className="container">
                {/*页签*/}
                <nav className="position-relative container pt-3" id="nav-tag" style={{backgroundColor: "white"}}>
                    <ul className="nav nav-tabs mb-3 d-flex" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="focus-tab" data-bs-toggle="tab"
                                    data-bs-target="#focus-tab-pane"
                                    type="button" role="tab" aria-controls="focus-tab-pane" aria-selected="true">发布（7）
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="recommend-tab" data-bs-toggle="tab"
                                    data-bs-target="#recommend-tab-pane" type="button" role="tab"
                                    aria-controls="recommend-tab-pane" aria-selected="false">评论（79）
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="latest-tab" data-bs-toggle="tab"
                                    data-bs-target="#latest-tab-pane" type="button" role="tab"
                                    aria-controls="latest-tab-pane" aria-selected="false">收藏（26）
                            </button>
                        </li>

                        <li style={{marginLeft: "auto"}}>
                            <button type="button" className="btn btn-success">
                                <i className="bi bi-pencil-square"></i>&nbsp;发布
                            </button>
                        </li>

                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="focus-tab-pane" role="tabpanel"
                             aria-labelledby="focus-tab" tabIndex={0}>
                            这是关注页
                        </div>
                        <div className="tab-pane fade" id="recommend-tab-pane" role="tabpanel"
                             aria-labelledby="recommend-tab" tabIndex={0}>
                            这是推荐页
                        </div>
                        <div className="tab-pane fade active" id="latest-tab-pane" role="tabpanel"
                             aria-labelledby="latest-tab" tabIndex={0}>
                            <div className="list-group">

                                {
                                    // postList && postList.map((post: any) => {
                                    //     return (
                                    //         <PostItem key={post.id} post={post} detailOpen={detailOpen}/>
                                    //     )
                                    // })
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default PersonalCenter;