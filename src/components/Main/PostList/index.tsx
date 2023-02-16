import React, {useEffect, useState} from "react";
import axios from "axios";
import './index.css'
import Pagination from "../Pagination";
import PostItem from "./PostItem";
import Publish from "../Publish";

function PostList() {

    const [postList, setPostList] = useState<any[]>([]);
    const [navigatePages, setNavigatePages] = useState<any[]>([]);
    const [totalLine, setTotalLine] = useState<any>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [prePage, setPrePage] = useState<number>(1);
    const [nextPage, setNextPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);

    const sendRequest = (offset: number) => {
        axios.get('http://localhost:8079/community/apiIndex', {
            params: {
                offset: offset,
                limit: 10
            }
        }).then(
            response => {
                setPostList(response.data.data.list);
                setTotalLine(response.data.data.total);
                setCurrentPage(response.data.data.pageNum);
                setNavigatePages(response.data.data.navigatepageNums);
                setHasPreviousPage(response.data.data.hasPreviousPage);
                setHasNextPage(response.data.data.hasNextPage);
                setPrePage(response.data.data.prePage);
                setNextPage(response.data.data.nextPage);
                setPages(response.data.data.pages);
            },
            error => {
                console.log('请求失败', error);
            }
        )
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        sendRequest(1);
    }, []);

    return (
        <div className="container col-9 position-relative" id="post-list">
            {/*页签*/}
            <nav className="position-relative" id="nav-tag">
                <ul className="nav nav-tabs mb-3 d-flex" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="focus-tab" data-bs-toggle="tab"
                                data-bs-target="#focus-tab-pane"
                                type="button" role="tab" aria-controls="focus-tab-pane" aria-selected="true">关注
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="recommend-tab" data-bs-toggle="tab"
                                data-bs-target="#recommend-tab-pane" type="button" role="tab"
                                aria-controls="recommend-tab-pane" aria-selected="false">推荐
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="latest-tab" data-bs-toggle="tab"
                                data-bs-target="#latest-tab-pane" type="button" role="tab"
                                aria-controls="latest-tab-pane" aria-selected="false">最新
                        </button>
                    </li>
                    <li style={{marginLeft: "auto"}}>
                        <button type="button" className="btn btn-success"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                data-bs-whatever="@mdo" id="publishButton">
                            <i className="bi bi-pencil-square"></i>&nbsp;发布
                        </button>
                    </li>
                </ul>

                <Publish/>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="focus-tab-pane" role="tabpanel"
                         aria-labelledby="focus-tab" tabIndex={0}>
                        这是关注页
                    </div>
                    <div className="tab-pane fade" id="recommend-tab-pane" role="tabpanel"
                         aria-labelledby="recommend-tab" tabIndex={0}>
                        这是推荐页
                    </div>
                    <div className="tab-pane fade show active" id="latest-tab-pane" role="tabpanel"
                         aria-labelledby="latest-tab" tabIndex={0}>
                        <div className="list-group">

                            {
                                postList && postList.map((post: any) => {
                                    return (
                                        <PostItem key={post.id} post={post}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </nav>

            {/*页面提示 模态框*/}
            <div className="modal fade" id="hintModal" tabIndex={-1} role="dialog" aria-labelledby="hintModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="hintModalLabel">提示</h5>
                        </div>
                        <div className="modal-body" id="hintBody">
                            发布完毕!
                        </div>
                    </div>
                </div>
            </div>

            <Pagination sendRequest={sendRequest}
                        currentPage={currentPage}
                        totalLine={totalLine}
                        navigatePages={navigatePages}
                        hasPreviousPage={hasPreviousPage}
                        hasNextPage={hasNextPage}
                        prePage={prePage}
                        nextPage={nextPage}
                        pages={pages}
            />
        </div>
    )
}

export default PostList;