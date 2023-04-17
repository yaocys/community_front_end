import React from "react";

/**
 * 分页组件
 */
function Pagination(props: any) {
    const {
        currentPage, totalLine, navigatePages, hasPreviousPage,
        hasNextPage, prePage, nextPage, pages, sendRequest
    } = props;

    return (
        <nav
            className={`mt-5 user-select-none ${(currentPage === 1 && hasNextPage === false) || totalLine <= 0 ? 'd-none' : ''}`}>
            {/*大于一页&&总行数>0才显示分页组件*/}
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
                    <span className="page-link" onClick={() => sendRequest(nextPage)}>
                        <i className="bi bi-caret-right"></i>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;