import React from "react";
import {Button, Form, FormControl, FormGroup, Modal} from "react-bootstrap";
import './index.css';
import moment from "moment/moment";

function Detail(props: any) {

    const {detailShow, detailClose, postDetail} = props;

    return (
        <Modal id="detailModal" show={detailShow} onHide={detailClose} centered={true} scrollable={true}>
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
                <Modal.Title>
                    <h2>
                        {postDetail && postDetail.post.title}
                    </h2>
                </Modal.Title>
                <small className="text-muted">
                    <i className="bi bi-calendar4-event"></i>&nbsp;&nbsp;{moment(postDetail && postDetail.post.createTime).format("YYYY-MM-DD HH:MM")}
                </small>
                <div style={{height: "1000px"}}>
                    {postDetail && postDetail.post.content}
                </div>
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
                        <a href=""><i className="bi bi-chat-dots"> 5 </i></a>
                        <a href=""><i className="bi bi-star"> 4 </i></a>
                        <a href=""><i className="bi bi-share"/></a>
                    </div>
                    <Button type="submit" size="sm">评论</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Detail;