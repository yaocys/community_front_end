import React, {useEffect} from "react";
import axios from "axios";

/**
 * 分页组件
 */
function Pagination(props: any) {
    const {
        currentPage, setCurrentPage, totalLine
        , navigatePages, setNavigatePages,
        hasPreviousPage, hasNextPage,
        prePage, nextPage, setPostList,
        setHasPreviousPage, setHasNextPage,
        setTotalLine, setPrePage, setNextPage,
        pages, setPages, sendRequest
    } = props;


    /**
     * 这里页面跳转怎么做？
     * 1. 点击按钮，组件重新发送请求，刷新组件状态数据
     * 2. 点击按钮，刷新链接
     */

    return (
        <nav className={`mt-5 user-select-none ${totalLine > 0 ? '' : 'd-none'}`}>
            {/*没有记录不显示分页组件*/}
            <ul className="pagination justify-content-center">

                <li className={`page-item ${hasPreviousPage ? '' : 'disabled'}`}>
                    <span className="page-link" onClick={() => sendRequest(prePage)}>
                        <i className="bi bi-caret-left"></i>
                    </span>
                </li>

                <li className={`page-item ${currentPage === 1 ? 'd-none' : ''}`}>
                    <span className="page-link" onClick={() => sendRequest(1)}>首页</span>
                </li>

                {
                    navigatePages && navigatePages.map((pageNumber: number) => {
                        return (
                            <li className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} key={pageNumber}>
                                <span className="page-link" onClick={() => sendRequest(pageNumber)}>
                                    {pageNumber}
                                </span>
                            </li>
                        )
                    })
                }


                <li className={`page-item ${currentPage === pages ? 'd-none' : ''}`}>
                    <span className="page-link" onClick={() => sendRequest(pages)}>末页</span>
                </li>

                <li className={`page-item ${hasNextPage ? '' : 'disabled'}`}>
                    <a className="page-link" onClick={() => sendRequest(nextPage)}>
                        <i className="bi bi-caret-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;