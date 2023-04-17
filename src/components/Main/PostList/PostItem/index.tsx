import React, {useState} from "react";
import moment from 'moment';
import {Link} from "react-router-dom";

import {handleLike} from "../../../../util/utils";

function PostItem(props: any) {

    const {post, detailOpen, handleProfile} = props;

    const [likeCount, setLikeCount] = useState(post.likeCount);
    const [collectCount, setCollectCount] = useState(4);
    const [likeStatus, setLikeStatus] = useState(post.likeStatus ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up');
    const [collectStatus, setCollectStatus] = useState('bi-star');

    const handleCollect = () => {
        if (collectStatus === 'bi-star') {
            setCollectStatus('bi-star-fill');
            setCollectCount(collectCount + 1);
        } else {
            setCollectStatus('bi-star');
            setCollectCount(collectCount - 1);
        }
    }

    return (
        <li className="list-group-item list-group-item-action">
            <div onClick={() => detailOpen(post.id)} className="user-select-none" style={{cursor: "pointer"}}>
                <div className="d-flex justify-content-between" style={{marginBottom: "0.5em"}}>
                    <div className="d-flex">
                        <h5 className="mb-1" style={{color: "#2d3436"}}>{post.title}</h5>
                    </div>
                    <small className="text-muted">
                        <i className="bi bi-calendar4-event"></i>&nbsp;&nbsp;{moment(post && post.createTime).format("YYYY-MM-DD HH:mm")}
                    </small>
                </div>
                <small className="text-muted text-truncate d-block">
                    {post.content}
                </small>
            </div>

            <div className="d-flex justify-content-between align-items-center text-muted" style={{marginTop: "0.5em"}}>
                <div style={{margin: "auto 0"}}
                     className="d-flex justify-content-center align-items-center user-select-none">
                    <img src={post.headerUrl} className="mr-4 rounded-circle user-header" alt="用户头像" height="24px"
                         style={{cursor: 'pointer'}} onClick={() => handleProfile(post.userId)}/>
                    <div className="d-inline-block align-items-center">
                        <Link id="username" style={{marginRight: "0.5em"}} className="text-muted"
                              to={`/user/${post.userId}`}
                        >&nbsp;&nbsp;{post.username}</Link>
                        <small className="badge rounded-pill bg-success-subtle fw-medium"
                               style={{fontSize: "x-small", cursor: 'pointer'}}>
                            <i className="bi bi-1-circle"></i> 初出茅庐
                        </small>
                    </div>
                </div>
                <div>
                    <small className="" id="icons">
                        <i className={`bi ${likeStatus}`}
                           onClick={() => handleLike(likeStatus, setLikeStatus, likeCount, setLikeCount, 1, post.id, post.userId, post.id)}>
                            &nbsp;{likeCount}
                        </i>
                        <i className="bi bi-chat-dots"> {post.commentCount} </i>
                        <i className={`bi ${collectStatus}`} onClick={handleCollect}>
                            &nbsp;{collectCount}
                        </i>
                        <i className="bi bi-share"/>
                    </small>
                </div>
            </div>
        </li>
    )
}

export default PostItem;