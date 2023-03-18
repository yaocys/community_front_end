import React, {useEffect, useState} from "react";
import './index.css';

import PostList from "./PostList";
import SideBar from "./SideBar";
import axios from "axios";

function Main(props: any) {
    const {ticket, detailOpen} = props;

    const [postList, setPostList] = useState<any[]>([]);
    const [navigatePages, setNavigatePages] = useState<any[]>([]);
    const [totalLine, setTotalLine] = useState<any>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [prePage, setPrePage] = useState<number>(1);
    const [nextPage, setNextPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);

    /**
     * 获取分页列表
     * @param offset
     */
    const sendRequest = (offset: number) => {
        axios.get('http://localhost:8079/community/apiIndex', {
            params: {
                offset: offset,
                limit: 10
            },
            withCredentials: true
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
        <div className="container row" id="main" style={{background: "white"}}>
            <PostList ticket={ticket} detailOpen={detailOpen}
                      postList={postList}
                      sendRequest={sendRequest}
                      currentPage={currentPage}
                      totalLine={totalLine}
                      navigatePages={navigatePages}
                      hasPreviousPage={hasPreviousPage}
                      hasNextPage={hasNextPage}
                      prePage={prePage}
                      nextPage={nextPage}
                      pages={pages}
            />
            <SideBar/>
        </div>
    )
}

export default Main;

