import React, {useState} from "react";
import {Button, Form, FormControl, FormGroup, Modal, Card, InputGroup} from "react-bootstrap";
import './index.css';
import moment from "moment/moment";
import Accordion from 'react-bootstrap/Accordion';
import {useAccordionButton} from 'react-bootstrap/AccordionButton';
import Pagination from "../../Pagination";

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


function Detail(props: any) {

    const {
        detailShow, detailClose, postDetail, commentList, sendRequest,
        currentPage, totalLine, hasPreviousPage, hasNextPage, prePage, nextPage, pages, navigatePages
    } = props;

    return (
        <Modal id="detailModal" show={detailShow} onHide={detailClose} centered={true} scrollable={true}>
            {/*顶栏*/}
            <Modal.Header>
                <Modal.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <a href="" style={{marginRight: "0.5em"}}>
                            <img src={postDetail && postDetail.user.headerUrl}
                                 className="mr-4 rounded-circle user-header" alt="用户头像" height="30px"/>
                        </a>
                        <div className="align-items-center">
                            <a href="">
                            <span id="username" style={{marginRight: "0.5em"}}
                                  className="text-muted">{postDetail && postDetail.user.username}</span>
                                <small className="badge rounded-pill bg-success-subtle fw-medium"
                                       style={{fontSize: "x-small"}}>
                                    <i className="bi bi-1-circle"></i> 初出茅庐
                                </small>
                            </a>
                        </div>
                    </div>
                </Modal.Title>
                <Button className="btn-sm"><i className="bi bi-plus-lg"></i>&nbsp;关注</Button>
            </Modal.Header>
            <Modal.Body>
                {/*内容*/}
                <div className="container pb-3 pt-3" style={{backgroundColor: "#f1f2f6"}}>
                    <Modal.Title>
                        <h2>
                            {postDetail && postDetail.post.title}
                        </h2>
                    </Modal.Title>
                    <small className="text-muted">
                        <i className="bi bi-calendar4-event"></i>&nbsp;&nbsp;{moment(postDetail && postDetail.post.createTime).format("YYYY-MM-DD HH:MM")}
                    </small>
                    <div className="mt-3">
                        {postDetail && postDetail.post.content}
                    </div>
                </div>
                <Comment commentList={commentList}/>
                <Pagination sendRequest={sendRequest}
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
                        <FormControl type="text" id="reply" placeholder="评论千万条，友善第一条" className=""/>
                    </FormGroup>
                </Form>
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <div id="icons2">
                        <a href=""><i className="bi bi-hand-thumbs-up"> {postDetail && postDetail.likeCount} </i></a>
                        <a href=""><i className="bi bi-chat-dots"> {postDetail && postDetail.post.commentCount} </i></a>
                        <a href=""><i className="bi bi-star"> 4 </i></a>
                        <a href=""><i className="bi bi-share"/></a>
                    </div>
                    <Button type="submit" size="sm">回帖</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

/**
 * 评论区
 */
function Comment(props: any) {

    const {commentList} = props;

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

    const {user, comment, likeStatus, likeCount, replyCount, replyList} = props;

    return (
        <ul className="list-unstyled mt-4">
            <li className="p-0 mb-3 row container">
                <a href="profile.html" className="col-1">
                    <img src={user.headerUrl}
                         className="align-self-start mr-4 rounded-circle user-header" height="35px"
                         alt="用户头像"/>
                </a>
                <div className="media-body col-11">
                    <Accordion>
                        <div className="mt-0 d-flex justify-content-between">
                            <span className="text-success" style={{fontSize: "small"}}>{user.username}</span>
                            <span className="badge badge-secondary float-right floor">1#</span>
                        </div>
                        <div className="mt-2">
                            {comment.content}
                        </div>
                        <div className="mt-3 text-muted d-flex justify-content-between">
                                <span className="text-muted" style={{fontSize: "small"}}>
                                    发布于 <b>{moment(comment.createTime).format("YYYY-MM-DD HH:MM")}</b>
                                </span>
                            <ul className="d-inline float-right" style={{fontSize: "small"}}>
                                <li className="d-inline ml-2">
                                    <a href="#" className="text-primary">
                                        <i className="bi bi-hand-thumbs-up"> {likeCount} </i>
                                    </a>
                                </li>
                                <li className="d-inline ml-2">
                                    <CustomToggle eventKey="0">
                                        <i className="bi bi-chat-dots"> {replyCount} </i>
                                    </CustomToggle>
                                </li>
                            </ul>
                        </div>
                        <Reply replyList={replyList} replyCount={replyCount}/>
                        {/*回复输入框*/}
                        <Accordion.Collapse eventKey="0">
                            <InputGroup className="mt-1" size="sm">
                                <Form.Control
                                    placeholder={`回复${user.username}`}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-info" id="button-addon2">
                                    回复
                                </Button>
                            </InputGroup>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
            </li>
        </ul>
    )
}

/**
 * 回复区
 */
function Reply(props: any) {

    const {replyList, replyCount} = props;

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

    const {user, target, likeCount, likeStatus, reply} = props;

    const fun = (obj: any) => {
        if (obj !== null) return (
            <>
                回复 <b className="text-info">{target.username}</b>
            </>
        );
    }

    return (
        <li className="pt-3">
            <div>
                <span>
                    <b className="text-info">{user.username}</b>
                    {
                        fun(target)
                    }
                    :&nbsp;&nbsp;
                </span>
                <span>{reply.content}</span>
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <span>{moment(reply.createTime).format("YYYY-MM-DD HH:MM")}</span>
                <ul className="d-inline float-right">
                    <li className="d-inline ml-2">
                        <a href="#" className="text-primary">
                            <i className="bi bi-hand-thumbs-up"> {likeCount} </i>
                        </a>
                    </li>
                    <CustomToggle eventKey="1">
                        <i className="bi bi-chat-dots"></i>
                    </CustomToggle>
                </ul>

            </div>
            <Accordion.Collapse eventKey="1">
                <InputGroup className="mt-3" size="sm">
                    <Form.Control
                        placeholder={`回复${user.username}`}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        回复
                    </Button>
                </InputGroup>
            </Accordion.Collapse>
        </li>
    )
}

export default Detail;