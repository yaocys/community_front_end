import React, {useEffect, useRef, useState} from "react";
import {Button, Form, FormControl, FormGroup, Modal, InputGroup} from "react-bootstrap";
import moment from "moment/moment";
import Accordion from 'react-bootstrap/Accordion';
import {useAccordionButton} from 'react-bootstrap/AccordionButton';

import Pagination from "../../Pagination";
import {handleLike} from "../../../../util/utils";

import axios from "../../../../util/axios";
import cookie from "../../../../util/utils";

import './index.css';

/**
 * 回复框的触发器
 */
function CustomToggle({children, eventKey}: { children: any, eventKey: any }) {
    const decoratedOnClick = useAccordionButton(eventKey);
    return (
        <Button variant="link" style={{textDecoration: "none"}} onClick={decoratedOnClick} size="sm">
            {children}
        </Button>
    );
}

/**
 * 父组件传递过来的postDetail因为异步请求的关系，所以可能为空
 */
function Detail(props: any) {

    const {
        detailShow, detailClose, postDetail, commentList, sendRequest, handleProfile,
        currentPage, totalLine, hasPreviousPage, hasNextPage, prePage, nextPage, pages, navigatePages
    } = props;

    const [comment, setComment] = useState<string>("");// 回复楼主的内容

    const [likeCount, setLikeCount] = useState(0);
    const [collectCount, setCollectCount] = useState(4);
    const [likeStatus, setLikeStatus] = useState('bi-hand-thumbs-up');
    const [collectStatus, setCollectStatus] = useState('bi-star');

    /**
     * 监听父组件给的值的状态，并在更新后同步更新子组件获得的数据
     */
    useEffect(() => {
        if (postDetail) {
            setLikeCount(postDetail.likeCount);
            setLikeStatus(postDetail.likeStatus ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up');
        }
    }, [postDetail])

    let commentRef = useRef<HTMLInputElement>(null);

    // 柯里化，对函数再封一层
    const sendRequestCurring = (offset: number) => {
        return sendRequest(offset, postDetail.post.id);
    }

    const refresh = () => {
        return sendRequestCurring(currentPage);
    }

    const saveComment = (e: any) => {
        setComment(e.target.value);
    }

    const handleSubmit = (discussPostId: string) => {
        axios.post(`/comment/add/${discussPostId}`, {
            userId: cookie.get('userId'),
            entityType: 1,
            entityId: discussPostId,
            content: comment
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            () => {
                if (commentRef.current) {
                    commentRef.current.value = '';
                    setComment('');
                    alert('回帖成功');
                    refresh();
                }
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
        <Modal id="detailModal" show={detailShow} onHide={detailClose} centered={true} scrollable={true}>
            {/*顶栏*/}
            <Modal.Header>
                <Modal.Title>
                    <div className="d-flex justify-content-between align-items-center user-select-none">
                        <img src={postDetail && postDetail.user.headerUrl}
                             className="mr-4 rounded-circle user-header" alt="用户头像" height="30px"
                             onClick={() => handleProfile(postDetail.user.id)}
                             style={{marginRight: "0.5em", cursor: 'pointer'}}/>
                        <div className="align-items-center">
                           <span id="username" style={{marginRight: "0.5em", cursor: 'pointer'}}
                                 onClick={() => handleProfile(postDetail.user.id)}
                                 className="text-muted">{postDetail && postDetail.user.username}</span>
                            <small className="badge rounded-pill bg-success-subtle fw-medium"
                                   style={{fontSize: "x-small", cursor: 'pointer'}}>
                                <i className="bi bi-1-circle"></i> 初出茅庐
                            </small>
                        </div>
                    </div>
                </Modal.Title>
                <Button className="btn-sm"><i className="bi bi-plus-lg"></i>&nbsp;关注</Button>
            </Modal.Header>
            <Modal.Body style={{minHeight: "500px"}}>
                {/*内容*/}
                <div className="container pb-3 pt-3" style={{backgroundColor: "#f1f2f6"}}>
                    <Modal.Title>
                        <h2>
                            {postDetail && postDetail.post.title}
                        </h2>
                    </Modal.Title>
                    <small className="text-muted">
                        <i className="bi bi-calendar4-event"></i>&nbsp;&nbsp;{moment(postDetail && postDetail.post.createTime).format("YYYY-MM-DD HH:mm")}
                    </small>
                    <div className="mt-3">
                        {postDetail && postDetail.post.content}
                    </div>
                </div>

                <Accordion>
                    <Comment commentList={commentList} currentPage={currentPage}
                             refresh={refresh} discussPostId={postDetail && postDetail.post.id}
                             handleProfile={handleProfile}
                    />
                </Accordion>

                <Pagination sendRequest={sendRequestCurring}
                            currentPage={currentPage}
                            totalLine={totalLine}
                            navigatePages={navigatePages}
                            hasPreviousPage={hasPreviousPage}
                            hasNextPage={hasNextPage}
                            prePage={prePage}
                            nextPage={nextPage}
                            pages={pages}
                />
            </Modal.Body>
            <Modal.Footer>
                <Form className="w-100">
                    <FormGroup>
                        <FormControl type="text" id="comment" placeholder="评论千万条，友善第一条"
                                     onChange={saveComment} autoComplete="off" ref={commentRef}/>
                    </FormGroup>
                </Form>
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <div id="icons2">
                        <i className={`bi ${likeStatus}`}
                           onClick={() => handleLike(likeStatus, setLikeStatus, likeCount, setLikeCount, 1, postDetail.id, postDetail.userId, postDetail.id)}>
                            &nbsp;{likeCount}
                        </i>
                        <i className="bi bi-chat-dots"> {postDetail && postDetail.post.commentCount} </i>
                        <i className="bi bi-star"> 4 </i>
                        <i className={`bi ${collectStatus}`} onClick={handleCollect}>
                            &nbsp;{collectCount}
                        </i>
                        <i className="bi bi-share"/>
                    </div>
                    <Button type="submit" size="sm"
                            onClick={() => handleSubmit(postDetail.post.id,)}>
                        回帖
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

/**
 * 评论区
 */
function Comment(props: any) {

    const {commentList, currentPage, refresh, discussPostId, handleProfile} = props;
    let floor = 1;

    return (
        <div className="container mt-5">
            {
                commentList && commentList.map((comment: any) => {
                    return (
                        <CommentItem key={comment.comment.id} user={comment.user}
                                     comment={comment.comment}
                                     likeStatus={comment.likeStatus}
                                     likeCount={comment.likeCount}
                                     replyCount={comment.replyCount}
                                     replyList={comment.replies}
                                     floor={(currentPage - 1) * 5 + floor++}
                                     refresh={refresh}
                                     discussPostId={discussPostId}
                                     handleProfile={handleProfile}
                        />
                    )
                })
            }
        </div>
    )
}

/**
 * 单个回复项
 * @constructor
 */
function CommentItem(props: any) {

    const {
        user,
        comment,
        likeStatus,
        likeCount,
        replyCount,
        replyList,
        floor,
        refresh,
        discussPostId,
        handleProfile
    } = props;

    /*

    这个数据来自父组件，比如点赞，图标的变化和+1-1不需要对应后台真实数据，都只是前端效果罢了
    * */

    const [likeStatus2, setLikeStatus] = useState(likeStatus ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up');
    const [likeCount2, setLikeCount] = useState(likeCount);

    const [reply, setReply] = useState<string>('');// 回复评论
    let replyRef = useRef<HTMLInputElement>(null);

    const saveReply = (e: any) => {
        setReply(e.target.value);
    }

    const handleSubmit = () => {
        axios.post(`/comment/add/${discussPostId}`, {
            userId: cookie.get('userId'),
            entityType: 2,
            entityId: comment.id,
            content: reply
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            () => {
                if (replyRef.current) {
                    replyRef.current.value = '';
                    setReply('');
                    alert('回复成功');
                    refresh();
                }
            }
        )
    }

    return (
        <ul className="list-unstyled mt-4">
            <li className="p-0 mb-3 row container">
                <div className="col-1">
                    <img src={user.headerUrl}
                         className="align-self-start mr-4 rounded-circle user-header" height="35px"
                         onClick={() => handleProfile(user.id)} style={{cursor: 'pointer'}}
                         alt="用户头像"/>
                </div>
                <div className="media-body col-11">
                    <div className="mt-0 d-flex justify-content-between">
                        <span className="text-success"
                              style={{fontSize: "small", userSelect: 'none', cursor: 'pointer'}}
                              onClick={() => handleProfile(user.id)}>{user.username}</span>
                        <span className="badge badge-secondary float-right floor">{floor} #</span>
                    </div>
                    <div className="mt-2">
                        {comment.content}
                    </div>
                    <div className="mt-3 text-muted d-flex justify-content-between">
                                <span className="text-muted" style={{fontSize: "small"}}>
                                    发布于 <b>{moment(comment.createTime).format("YYYY-MM-DD HH:mm")}</b>
                                </span>
                        <ul className="d-inline float-right" style={{fontSize: "small"}}>
                            <li className="d-inline ml-2">
                                <i className={`text-primary ${likeStatus2}`}
                                   onClick={() => handleLike(likeStatus2, setLikeStatus, likeCount, setLikeCount, 2, comment.id, comment.userId, discussPostId)}>
                                    &nbsp;{likeCount2}
                                </i>
                            </li>
                            <li className="d-inline ml-2">
                                <CustomToggle eventKey={floor}>
                                    <i className="bi bi-chat-dots"> {replyCount} </i>
                                </CustomToggle>
                            </li>
                        </ul>
                    </div>
                    <Reply replyList={replyList} replyCount={replyCount} floor={floor} refresh={refresh}
                           discussPostId={discussPostId} commentId={comment && comment.id} handleProfile={handleProfile}
                    />
                    {/*回复输入框*/}
                    <Accordion.Collapse eventKey={floor}>
                        <InputGroup className="mt-1" size="sm">
                            <Form.Control
                                placeholder={`回复${user.username}`}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={saveReply}
                                ref={replyRef}
                            />
                            <Button variant="outline-info" id="button-addon2" onClick={handleSubmit}>
                                回复
                            </Button>
                        </InputGroup>
                    </Accordion.Collapse>
                </div>
            </li>
        </ul>
    )
}

/**
 * 回复区
 */
function Reply(props: any) {

    const {replyList, replyCount, floor, refresh, discussPostId, commentId, handleProfile} = props;
    let replyFloor = 1;

    /**
     * 有回复才显示回复区域
     */
    if (replyCount === 0) return (
        <></>
    );

    return (
        <ul className="list-unstyled p-3 font-size-12 text-muted mb-3"
            style={{backgroundColor: "#f1f2f6", fontSize: "small"}}>
            {
                replyList.map((item: any) => {
                    return (
                        <ReplyItem key={item.reply.id}
                                   user={item.user}
                                   target={item.target}
                                   likeCount={item.likeCount}
                                   likeStatus={item.likeStatus}
                                   reply={item.reply}
                                   floorId={floor + '' + replyFloor++}
                                   refresh={refresh}
                                   discussPostId={discussPostId}
                                   commentId={commentId}
                                   handleProfile={handleProfile}
                        />
                    )
                })
            }
        </ul>
    )
}

/**
 * 单条回复
 */
function ReplyItem(props: any) {

    const {
        user,
        target,
        likeCount,
        likeStatus,
        reply,
        floorId,
        refresh,
        discussPostId,
        commentId,
        handleProfile
    } = props;

    const [likeStatus2, setLikeStatus] = useState(likeStatus ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up');
    const [likeCount2, setLikeCount] = useState(likeCount);

    const [replyInput, setReplyInput] = useState<string>('');// 回复具体的人对评论的回复
    let replyRef = useRef<HTMLInputElement>(null);

    const saveReply = (e: any) => {
        setReplyInput(e.target.value);
    }

    const handleSubmit = () => {
        axios.post(`comment/add/${discussPostId}`, {
            userId: cookie.get('userId'),
            entityType: 2,
            entityId: commentId,
            content: replyInput,
            targetId: user?.id
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            () => {
                if (replyRef.current) {
                    replyRef.current.value = '';
                    setReplyInput('');
                    alert('回复某人的回复成功');
                    refresh();
                }
            }
        )
    }

    const fun = (obj: any) => {
        if (obj !== null) return (
            <>
                &nbsp;回复&nbsp;<b className="text-info" style={{userSelect: 'none', cursor: 'pointer'}}
                                   onClick={() => handleProfile(user.id)}>{target.username}</b>
            </>
        );
    }

    return (
        <li className="pt-3">
            <div>
                <span>
                    <b className="text-info" style={{userSelect: 'none', cursor: 'pointer'}}
                       onClick={() => handleProfile(user.id)}>{user.username}</b>
                    {
                        fun(target)
                    }
                    :&nbsp;&nbsp;
                </span>
                <span>{reply.content}</span>
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <span>{moment(reply.createTime).format("YYYY-MM-DD HH:mm")}</span>
                <ul className="d-inline float-right">
                    <li className="d-inline ml-2">
                        <i className={`text-primary ${likeStatus2}`}
                           onClick={() => handleLike(likeStatus2, setLikeStatus, likeCount, setLikeCount, 2, reply.id, reply.userId, discussPostId)}>
                            &nbsp;{likeCount2}
                        </i>
                    </li>
                    <CustomToggle eventKey={floorId}>
                        <i className="bi bi-chat-dots"></i>
                    </CustomToggle>
                </ul>

            </div>
            <Accordion.Collapse eventKey={floorId}>
                <InputGroup className="mt-3" size="sm">
                    <Form.Control
                        placeholder={`回复${user.username}`}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={saveReply}
                        ref={replyRef}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
                        回复
                    </Button>
                </InputGroup>
            </Accordion.Collapse>
        </li>
    )
}

export default Detail;