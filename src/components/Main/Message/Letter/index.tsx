import React from "react";

type Props = {};

const Letter: React.FC<Props> = ({}) => {
    return (
        <div className="row container">
            <div className="col-3">
                这是聊天列表
            </div>
            <div className="col-9">
                这是对话页面
            </div>
        </div>
    );
};

export default Letter;