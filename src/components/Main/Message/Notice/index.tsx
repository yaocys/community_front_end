import React from "react";
import {Card} from "react-bootstrap";

function Notice() {

    const divs = [];

    for (let i = 0; i < 10; i++) {
        divs.push(
            <Card className="mb-3">
                <Card.Body>
                    <Card.Text>
                        同学你好，牛客正在做2023用户满意度调查，填写问卷必送牛币哦，快来填写问卷吧~
                    </Card.Text>
                    <Card.Text className="text-muted" style={{fontSize: "small"}}>03-28 11:34</Card.Text>
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

export default Notice;