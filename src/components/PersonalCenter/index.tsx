import React from "react";
import './index.css';
import {Button, Card, Badge} from "react-bootstrap";
import PostItem from "../Main/PostList/PostItem";
import Pagination from "../Main/Pagination";

function PersonalCenter() {
    return (
        <div className="container">
            <div className="container d-flex justify-content-between align-items-center">
                <Card className="mb-3 mt-3 w-100">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center" style={{minWidth: "60%"}}>
                            <div>
                                <div className="row">
                                    {/*头像*/}
                                    <div className="col-3 d-flex justify-content-center align-items-center"
                                         style={{alignItems: "center"}}>
                                        <img src="http://images.nowcoder.com/head/1t.png"
                                             className="rounded-circle user-header" alt="用户头像" height="80px"/>
                                    </div>

                                    {/*卡片主体内容*/}
                                    <div className="col-9 d-inline-block">
                                        <div className="d-flex mb-2">
                                    <span id="username"
                                          style={{marginRight: "0.5em", fontSize: "large"}}>捞捞张同学</span>
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
                                <div className="row container m-0 pt-3 text-center"
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
                                        收藏
                                    </div>
                                    <div className="col-3 p-0">
                                        <div className="w-100 mb-2 fs-5 text-muted">14</div>
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
                        <div className="tab-pane fade show active" id="latest-tab-pane" role="tabpanel"
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