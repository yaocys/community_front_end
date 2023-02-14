import React from "react";
import moment from 'moment';

function PostItem(props: any) {
    let {post} = props;
    return (
        <li className="list-group-item list-group-item-action">
            <a href="" className="d-block">
                <div className="d-flex justify-content-between" style={{marginBottom: "0.5em"}}>
                    <div className="d-flex">
                        <h5 className="mb-1" style={{color: "#2d3436"}}>{post.title}</h5>
                    </div>
                    <small className="text-muted"><i
                        className="bi bi-calendar4-event"></i>&nbsp;&nbsp;{moment(post && post.createTime).format("YYYY-MM-DD HH:MM")}
                    </small>
                </div>
                <small className="text-muted" style={{letterSpacing: "1px"}}>
                    {post.content}
                </small>
            </a>

            <div className="d-flex justify-content-between align-items-center text-muted" style={{marginTop: "0.3em"}}>
                <div style={{margin: "auto 0"}} className="d-flex justify-content-center align-items-center">
                    <a href="" style={{marginRight: "0.5em"}}>
                        <img src={post.headerUrl}
                             className="mr-4 rounded-circle user-header" alt="用户头像" height="24px"/>
                    </a>
                    <div className="d-inline-block align-items-center">
                        <div>
                            <a href="">
                                <span id="username" style={{marginRight: "0.5em"}}
                                      className="text-muted">{post.username}</span>
                                <small className="badge rounded-pill bg-success-subtle fw-medium"
                                       style={{fontSize: "x-small"}}>
                                    <i className="bi bi-1-circle"></i> 初出茅庐
                                </small>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <small className="" id="icons">
                        <a href=""><i className="bi bi-hand-thumbs-up"> {post.like} </i></a>
                        <a href=""><i className="bi bi-chat-dots"> {post.commentCount} </i></a>
                        <a href=""><i className="bi bi-star"> 4 </i></a>
                        <a href=""><i className="bi bi-share"/></a>
                    </small>
                </div>
            </div>
        </li>
        /*    <li className="list-group-item list-group-item-action">
                <a href="">
                    <div className="d-flex justify-content-between" style={{marginBottom:"0.5em"}}>
                        <div className="d-flex">
                            <h5 className="mb-1" style={{color:"#2d3436"}}>备战春招！历年 面经/笔试题/薪资 汇总</h5>
                        </div>
                        <small className="text-muted"><i className="bi bi-calendar4-event"></i>&nbsp;&nbsp;2023-2-3 16:19</small>
                    </div>
                    <small className="text-muted" style={{letterSpacing:"1px"}}>春招在即，同学们是否已经摩拳擦掌、跃跃欲试呢？心里是否已经有了理想的企业岗位呢？
                        这里岸途为大家准备了丰富翔实的“战前物资”，希望大家都能得到自己满意的Offer
                    </small>
                </a>

                <div className="d-flex justify-content-between align-items-center text-muted" style={{marginTop: "0.3em"}}>
                    <div style={{margin: "auto 0"}} className="d-flex justify-content-center align-items-center">
                        <a href="" style={{marginRight: "0.5em"}}>
                            <img src="http://images.nowcoder.com/head/1t.png"
                                 className="mr-4 rounded-circle user-header" alt="用户头像" height="24px"/>
                        </a>
                        <div className="d-inline-block align-items-center">
                            <div>
                                <a href="">
                                    <span id="username" style={{marginRight: "0.5em"}} className="text-muted">捞捞张同学吧</span>
                                    <small className="badge rounded-pill bg-success-subtle fw-medium" style={{fontSize:"x-small"}}>
                                        <i className="bi bi-1-circle"></i> 初出茅庐
                                    </small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <small className="" id="icons">
                            <a href=""><i className="bi bi-hand-thumbs-up"> 5 </i></a>
                            <a href=""><i className="bi bi-chat-dots"> 12 </i></a>
                            <a href=""><i className="bi bi-star"> 4 </i></a>
                            <a href=""><i className="bi bi-share"/></a>
                        </small>
                    </div>
                </div>
            </li>*/
    )
}

export default PostItem;