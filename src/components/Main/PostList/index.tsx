import React from "react";

function Post() {
    return (
        <li className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <a href=""><h5 className="mb-1">备战春招！历年 面经/笔试题/薪资 汇总</h5></a>
                <small className="text-muted">2023-2-3 16:19</small>
            </div>
            <small className="text-muted">春招在即，同学们是否已经摩拳擦掌、跃跃欲试呢？心里是否已经有了理想的企业岗位呢？
                这里岸途为大家准备了丰富翔实的“战前物资”，希望大家都能得到自己满意的Offer
            </small>
            <div className="d-flex w-100 justify-content-between">
                <div style={{display: "inline-block"}}>
                    <a href="">
                        <img src="http://images.nowcoder.com/head/1t.png"
                             className="mr-4 rounded-circle user-header" alt="用户头像" height="30px"/>
                    </a>
                    <span>  捞捞张同学吧</span>
                </div>
                <small className="text-muted">点赞（5）| 评论（12）| 分享</small>
            </div>
        </li>
    )
}

function Item() {
    return (
        <li className="media pb-3 pt-3 mb-3 border-bottom" style={{border: "solid red 1px"}}>
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
    )
}

function PostList() {
    return (
        <div className="container col-9" id="post-list">
            {/*页签*/}
            <nav className="position-relative" id="nav-tag">
                <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="focus-tab" data-bs-toggle="tab"
                                data-bs-target="#focus-tab-pane"
                                type="button" role="tab" aria-controls="focus-tab-pane" aria-selected="true">关注
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="recommend-tab" data-bs-toggle="tab"
                                data-bs-target="#recommend-tab-pane" type="button" role="tab"
                                aria-controls="recommend-tab-pane" aria-selected="false">推荐
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="latest-tab" data-bs-toggle="tab"
                                data-bs-target="#latest-tab-pane" type="button" role="tab"
                                aria-controls="latest-tab-pane" aria-selected="false">最新
                        </button>
                    </li>
                </ul>
                {/*                <button type="button" className="btn btn-primary btn-sm position-absolute rt-0" data-toggle="modal"
                        data-target="#publishModal">我要发布
                </button>*/}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="focus-tab-pane" role="tabpanel"
                         aria-labelledby="focus-tab" tabIndex={0}>

                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>

                    </div>
                    <div className="tab-pane fade show active" id="recommend-tab-pane" role="tabpanel"
                         aria-labelledby="recommend-tab" tabIndex={0}>
                        <div className="list-group">

                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="latest-tab-pane" role="tabpanel"
                         aria-labelledby="latest-tab" tabIndex={0}>...
                    </div>
                </div>
            </nav>

            {/*发帖模态框*/}
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

            {/*页面提示 模态框*/}
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

            {/*            <ul className="list-unstyled">

                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </ul>*/}

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
    )
}

export default PostList;