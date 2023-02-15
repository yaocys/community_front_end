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
                        <a href=""><i className="bi bi-hand-thumbs-up"> {post.likeCount} </i></a>
                        <a href=""><i className="bi bi-chat-dots"> {post.commentCount} </i></a>
                        <a href=""><i className="bi bi-star"> 4 </i></a>
                        <a href=""><i className="bi bi-share"/></a>
                    </small>
                </div>
            </div>
        </li>
    )
}

export default PostItem;