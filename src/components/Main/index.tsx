import React from "react";
import './index.css';

import Carousel from "./Carousel";

function Main(){
    return (
        <div className="container row" id="main">
            <div className="container col-8" id="post-list">

                <Carousel/>

                <div className="position-relative">
                    <ul className="nav nav-tabs mb-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">最新</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">最热</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-sm position-absolute rt-0" data-toggle="modal"
                            data-target="#publishModal">我要发布
                    </button>
                </div>

                <div className="modal fade" id="publishModal" tabIndex={-1} role="dialog"
                     aria-labelledby="publishModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="publishModalLabel">新帖发布</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">标题：</label>
                                        <input type="text" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">正文：</label>
                                        <textarea className="form-control" id="message-text" rows={15}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                                <button type="button" className="btn btn-primary" id="publishBtn">发布</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="hintModal" tabIndex={-1} role="dialog" aria-labelledby="hintModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="hintModalLabel">提示</h5>
                            </div>
                            <div className="modal-body" id="hintBody">
                                发布完毕!
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="list-unstyled">
                    <li className="media pb-3 pt-3 mb-3 border-bottom">
                        <a href="">
                            <img src="http://images.nowcoder.com/head/1t.png" className="mr-4 rounded-circle"
                                 alt="用户头像" style={{width:"50px",height:"50px"}}/>
                        </a>
                        <div className="media-body">
                            <h6 className="mt-0 mb-3">
                                <a href="site/discuss-detail.html">备战春招，面试刷题跟他复习，一个月全搞定！</a>
                                <span className="badge badge-secondary bg-primary">置顶</span>
                                <span className="badge badge-secondary bg-danger">精华</span>
                            </h6>
                            <div className="text-muted font-size-12">
                                <u className="mr-3">寒江雪</u> 发布于 <b>2019-04-15 15:32:18</b>
                                <ul className="d-inline float-right">
                                    <li className="d-inline ml-2">赞 11</li>
                                    <li className="d-inline ml-2">|</li>
                                    <li className="d-inline ml-2">回帖 7</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="media pb-3 pt-3 mb-3 border-bottom">
                        <a href="">
                            <img src="http://images.nowcoder.com/head/1t.png"
                                 className="mr-4 rounded-circle user-header" alt="用户头像"/>
                        </a>
                        <div className="media-body">
                            <h6 className="mt-0 mb-3">
                                <a href="site/discuss-detail.html">备战春招，面试刷题跟他复习，一个月全搞定！</a>
                                <span className="badge badge-secondary bg-primary">置顶</span>
                                <span className="badge badge-secondary bg-danger">精华</span>
                            </h6>
                            <div className="text-muted font-size-12">
                                <u className="mr-3">寒江雪</u> 发布于 <b>2019-04-15 15:32:18</b>
                                <ul className="d-inline float-right">
                                    <li className="d-inline ml-2">赞 11</li>
                                    <li className="d-inline ml-2">|</li>
                                    <li className="d-inline ml-2">回帖 7</li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="media pb-3 pt-3 mb-3 border-bottom">
                        <a href="site/profile.html">
                            <img src="http://images.nowcoder.com/head/1t.png"
                                 className="mr-4 rounded-circle user-header" alt="用户头像"/>
                        </a>
                        <div className="media-body">
                            <h6 className="mt-0 mb-3">
                                <a href="site/discuss-detail.html">备战春招，面试刷题跟他复习，一个月全搞定！</a>
                                <span className="badge badge-secondary bg-primary">置顶</span>
                                <span className="badge badge-secondary bg-danger">精华</span>
                            </h6>
                            <div className="text-muted font-size-12">
                                <u className="mr-3">寒江雪</u> 发布于 <b>2019-04-15 15:32:18</b>
                                <ul className="d-inline float-right">
                                    <li className="d-inline ml-2">赞 11</li>
                                    <li className="d-inline ml-2">|</li>
                                    <li className="d-inline ml-2">回帖 7</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>

                <nav className="mt-5">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a className="page-link" href="#">首页</a></li>
                        <li className="page-item disabled"><a className="page-link" href="#">上一页</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">下一页</a></li>
                        <li className="page-item"><a className="page-link" href="#">末页</a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-4" id="side-bar"></div>
        </div>
    )
}

export default Main;

