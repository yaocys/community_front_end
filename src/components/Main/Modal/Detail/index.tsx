import React from "react";
import {Button, Form, FormControl, FormGroup, Modal, Card, InputGroup} from "react-bootstrap";
import './index.css';
import moment from "moment/moment";
import Accordion from 'react-bootstrap/Accordion';
import {useAccordionButton} from 'react-bootstrap/AccordionButton';

function CustomToggle({children, eventKey}: { children: any, eventKey: any }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <Button variant="link" style={{textDecoration: "none"}} onClick={decoratedOnClick} size="sm">
            {children}
        </Button>
    );
}


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
                <div className="container">
                    <Modal.Title>
                        <h2>
                            {postDetail && postDetail.post.title}
                        </h2>
                    </Modal.Title>
                    <small className="text-muted">
                        <i className="bi bi-calendar4-event"></i>&nbsp;&nbsp;{moment(postDetail && postDetail.post.createTime).format("YYYY-MM-DD HH:MM")}
                    </small>
                    <div className="mt-3" style={{backgroundColor: "#f1f2f6"}}>
                        {postDetail && postDetail.post.content}
                    </div>
                </div>
                <Comment/>
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

/**
 * 评论区
 */
function Comment(props: any) {
    return (
        <div className="container mt-3">
            {/*回复模板*/}
            <ul className="list-unstyled mt-4">
                <li className="p-0 mb-3 row container">
                    <a href="profile.html" className="col-1">
                        <img src="http://images.nowcoder.com/head/2t.png"
                             className="align-self-start mr-4 rounded-circle user-header" height="30px"
                             alt="用户头像"/>
                    </a>
                    <div className="media-body col-11">
                        <Accordion>
                            <div className="mt-0 d-flex justify-content-between">
                                <span className="text-success" style={{fontSize: "small"}}>掉脑袋切切</span>
                                <span className="badge badge-secondary float-right floor">1#</span>
                            </div>
                            <div className="mt-2">
                                这开课时间是不是有点晚啊。。。
                            </div>
                            <div className="mt-3 text-muted d-flex justify-content-between">
                                <span className="text-muted"
                                      style={{fontSize: "small"}}>发布于 <b>2019-04-15 15:32:18</b></span>
                                <ul className="d-inline float-right" style={{fontSize: "small"}}>
                                    <li className="d-inline ml-2">
                                        <a href="#" className="text-primary">
                                            <i className="bi bi-hand-thumbs-up"> 1 </i>
                                        </a>
                                    </li>
                                    <li className="d-inline ml-2">
                                        <CustomToggle eventKey="0">
                                            <i className="bi bi-chat-dots"> 5 </i>
                                        </CustomToggle>
                                    </li>
                                </ul>
                            </div>
                            {/*回复列表*/}
                            <ul className="list-unstyled p-3 font-size-12 text-muted mb-3"
                                style={{backgroundColor: "#f1f2f6", fontSize: "small"}}>
                                {/*第1条回复*/}

                                <li className="pt-3">
                                    <div>
                                        <span><b className="text-info">寒江雪</b>:&nbsp;&nbsp;</span>
                                        <span>这个是直播时间哈，觉得晚的话可以直接看之前的完整录播的~</span>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <span>2019-04-15 15:32:18</span>
                                        <ul className="d-inline float-right">
                                            <li className="d-inline ml-2">
                                                <a href="#" className="text-primary">
                                                    <i className="bi bi-hand-thumbs-up"> 1 </i>
                                                </a>
                                            </li>
                                            <CustomToggle eventKey="1">
                                                <i className="bi bi-chat-dots"> 5 </i>
                                            </CustomToggle>
                                        </ul>

                                    </div>
                                    <Accordion.Collapse eventKey="1">
                                        <InputGroup className="mt-3" size="sm">
                                            <Form.Control
                                                placeholder="回复寒江雪"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <Button variant="outline-secondary" id="button-addon2">
                                                回复
                                            </Button>
                                        </InputGroup>
                                    </Accordion.Collapse>
                                </li>
                                {/*第2条回复*/}
                                <li className="pt-3">
                                    <div>
                                            <span><i className="text-info">Sissi</i> 回复 <b
                                                className="text-info">寒江雪</b>:&nbsp;&nbsp;</span>
                                        <span>怎么买录播课程呢</span>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <span>2019-04-15 15:32:18</span>
                                        <ul className="d-inline float-right">
                                            <li className="d-inline ml-2">
                                                <a href="#" className="text-primary">
                                                    <i className="bi bi-hand-thumbs-up"> 1 </i>
                                                </a>
                                            </li>
                                            <li className="d-inline ml-2">|</li>
                                            <CustomToggle eventKey="2">
                                                <i className="bi bi-chat-dots"> 5 </i>
                                            </CustomToggle>
                                        </ul>
                                    </div>
                                    <Accordion.Collapse eventKey="2">
                                        <InputGroup className="mt-3" size="sm">
                                            <Form.Control
                                                placeholder="回复Sissi"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <Button variant="outline-secondary" id="button-addon2">
                                                回复
                                            </Button>
                                        </InputGroup>
                                    </Accordion.Collapse>
                                </li>

                                {/*回复输入框*/}
                                <Accordion.Collapse eventKey="0">
                                    <InputGroup className="pt-3">
                                        <Form.Control
                                            placeholder="回复寒江雪"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="outline-info" id="button-addon2">
                                            回复
                                        </Button>
                                    </InputGroup>
                                </Accordion.Collapse>
                            </ul>
                        </Accordion>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Detail;