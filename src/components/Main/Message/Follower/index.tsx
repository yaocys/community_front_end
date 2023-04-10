import React from "react";
import {Button, Card} from "react-bootstrap";

function Follower() {
    const divs = [];

    for (let i = 0; i < 10; i++) {
        divs.push(
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="row">
                            {/*头像*/}
                            <div className="col-3 d-flex justify-content-center align-items-center"
                                 style={{alignItems: "center"}}>
                                <img src="http://images.nowcoder.com/head/1t.png"
                                     className="rounded-circle user-header" alt="用户头像" height="48px"/>
                            </div>

                            {/*卡片主体内容*/}
                            <div className="col-9 d-inline-block">
                                <div className="d-flex mb-2">
                                    <span id="username" style={{marginRight: "0.5em"}}>捞捞张同学</span>
                                    <small className="badge rounded-pill bg-success-subtle fw-medium"
                                           style={{fontSize: "x-small"}}>
                                        <i className="bi bi-1-circle"></i> 初出茅庐
                                    </small>
                                </div>
                                <Card.Text className="text-muted" style={{fontSize: "small"}}>昨天 17:54</Card.Text>
                            </div>
                        </div>
                        <Button className="btn-sm"><i className="bi bi-plus-lg"></i>&nbsp;关注</Button>
                    </div>

                </Card.Body>
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

export default Follower;