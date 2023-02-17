import React, {useState} from "react";
import axios from "axios";

/**
 * 发帖模态框
 * @constructor
 */
function Publish() {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const handleContent = (e: any) => {
        setContent(e.target.value);
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8079/community/post/add', {
            title: title,
            content: content
        }, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(
            response => {
                console.log(response.data);
            },
            error => {
                console.log('请求失败', error);
            }
        )
    }

    return (
        <div className="modal fade" id="publishModal" tabIndex={-1} role="dialog"
             aria-labelledby="publishModalLabel" aria-hidden="true" style={{letterSpacing: "1px"}}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="publishModalLabel">
                            <i className="bi bi-pencil-square">&nbsp;</i>发布动态
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                {/*TODO 点击发布按钮，自动设置焦点到第一个编辑框*/}
                                <input type="text" className="form-control" id="title"
                                       placeholder="文章标题" onChange={handleTitle}/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control border-0" id="content" rows={15}
                                          placeholder="此刻你想和大家分享什么…" onChange={handleContent}>
                                </textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">取消</button>
                        <button type="submit" className="btn btn-success btn-sm" onClick={handleSubmit}>发布</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publish;