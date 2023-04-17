import React from "react";
import {Card} from "react-bootstrap";

/**
 * 评论和 @ 组件
 */
const Comment: React.FC = () => {

    const divs = [];

    for (let i = 0; i < 10; i++) {
        divs.push(
            <Card className="mb-3">
                <Card.Body>
                    <div className="row mb-2">
                        {/*头像*/}
                        <div className="col-1 d-flex justify-content-center" style={{alignItems: "center"}}>
                            <img src="http://images.nowcoder.com/head/1t.png"
                                 className="rounded-circle user-header" alt="用户头像" height="48px"/>
                        </div>

                        {/*卡片主体内容*/}
                        <div className="col-11">
                            <div className="d-flex mb-2">
                                <span id="username" style={{marginRight: "0.5em"}}>捞捞张同学吧</span>
                                <small className="badge rounded-pill bg-success-subtle fw-medium"
                                       style={{fontSize: "x-small"}}>
                                    <i className="bi bi-1-circle"></i> 初出茅庐
                                </small>
                            </div>
                            <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天 17:54
                                评论了我的动态</Card.Text>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1"/>
                        <div className="col-11">
                            <Card.Text>
                                所以楼主的面试结果如何？
                            </Card.Text>
                            <div style={{}}>
                                <i className="bi bi-chat-dots" style={{marginRight: '3rem'}}>&nbsp;回复</i>
                                <i className="bi bi-hand-thumbs-up">&nbsp;点赞</i>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <span style={{marginLeft: "1rem"}}>原文：浩鲸一面_3_20_超详细反问</span>
                </Card.Footer>
            </Card>
        );
    }

    return (
        <nav className="nav flex-column mt-2">

            {
                divs
            }

        </nav>
    )
}

export default Comment;