import React from "react";

/**
 * 发帖模态框
 * @constructor
 */
function Publish() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true" style={{letterSpacing: "1px"}}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            <i className="bi bi-pencil-square">&nbsp;</i>发布动态
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                {/*TODO 点击发布按钮，自动设置焦点到第一个编辑框*/}
                                <input type="text" className="form-control" id="recipient-name"
                                       placeholder="文章标题"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control border-0" id="message-text" rows={15}
                                          placeholder="此刻你想和大家分享什么…"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">取消</button>
                        <button type="button" className="btn btn-success btn-sm">发布</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publish;