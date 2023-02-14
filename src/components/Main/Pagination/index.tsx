import React from "react";

/**
 * 分页组件
 */
function Pagination() {
    return (
        <nav className="mt-5">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="src/components/Main/Pagination#">首页</a></li>
                <li className="page-item disabled"><a className="page-link"
                                                      href="src/components/Main/Pagination#">上一页</a></li>
                <li className="page-item active"><a className="page-link" href="src/components/Main/Pagination#">1</a>
                </li>
                <li className="page-item"><a className="page-link" href="src/components/Main/Pagination#">2</a></li>
                <li className="page-item"><a className="page-link" href="src/components/Main/Pagination#">3</a></li>
                <li className="page-item"><a className="page-link" href="src/components/Main/Pagination#">下一页</a>
                </li>
                <li className="page-item"><a className="page-link" href="src/components/Main/Pagination#">末页</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;