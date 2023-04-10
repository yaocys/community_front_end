import React from "react";
import {Card} from "react-bootstrap";

function Like() {

    const divs = [];

    for (let i = 0; i < 10; i++) {
        divs.push(
            <Card className="mb-3">
                <Card.Body>
                    <div className="row">
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

export default Like;