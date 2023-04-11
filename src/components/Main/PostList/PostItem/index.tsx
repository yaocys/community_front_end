import React, {useState} from "react";
import moment from 'moment';
import axios from "axios";

function PostItem(props: any) {
    const {post, detailOpen} = props;
    const [likeCount, setLikeCount] = useState(post.likeCount);
    const [collectCount, setCollectCount] = useState(4);
    const [likeStatus, setLikeStatus] = useState(post.likeStatus ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up');
    const [collectStatus, setCollectStatus] = useState('bi-star');

    /**
     * 处理点击”点赞按钮“
     * 立即变换并计数+1，但并不是真实的即时后端数据，而只是向后端发送了一个请求，后端何时处理看消息队列
     */
    const handleLike = () => {
        if (likeStatus === 'bi-hand-thumbs-up') {
            setLikeStatus('bi-hand-thumbs-up-fill');
            setLikeCount(likeCount + 1);
        } else {
            setLikeStatus('bi-hand-thumbs-up');
            setLikeCount(likeCount - 1);
        }
        axios.post('http://localhost:8079/community/like', {
            entityType: 1,
            entityId: post.id,
            entityAuthorId: post.userId,
            postId: post.id
        }, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(
            response => {
                // 检查返回状态码
                const code = response.data.code;
                if (code === 200) {
                    // 不需要任何操作
                }
            },
            error => {
                console.log('请求失败', error);
            }
        )
    }

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
                <div style={{margin: "auto 0"}} className="d-flex justify-content-center align-items-center">
                    <a href="" style={{marginRight: "0.5em"}}>
                        <img src={post.headerUrl}
                             className="mr-4 rounded-circle user-header" alt="用户头像" height="24px"/>
                    </a>
                    <div className="d-inline-block align-items-center">
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
                <div>
                    <small className="" id="icons">
                        <i className={`bi ${likeStatus}`} onClick={handleLike}>
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