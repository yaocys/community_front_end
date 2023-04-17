import React, {useEffect, useState, forwardRef, useImperativeHandle} from "react";
import './index.css';

import PostList from "./PostList";
import SideBar from "./SideBar";
import axios from "../../util/axios";
import Search from "./Search";
import Message from "./Message";
import PersonalCenter from "../PersonalCenter";
import Login from "./Modal/Login";

interface MainProps {
    ticket: string,
    detailOpen: (discussPostId: string) => void;
    publishOpen: () => void;
    registerOpen: () => void;
    loginOpen: () => void;
    handleProfile: (userId: string) => void;
}

interface mainRef {
    refresh: () => void;
}

const Main = forwardRef<mainRef, MainProps>((props, ref) => {

    const {ticket, detailOpen, publishOpen, registerOpen, loginOpen, handleProfile} = props;

    const [postList, setPostList] = useState<any[]>([]);
    const [navigatePages, setNavigatePages] = useState<any[]>([]);
    const [totalLine, setTotalLine] = useState<any>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [prePage, setPrePage] = useState<number>(1);
    const [nextPage, setNextPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);

    const refresh = () => {
        return sendRequest(currentPage);
    }

    /**
     * 获取分页列表
     */
    const sendRequest = (offset: number) => {
        axios.get('/index', {
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
            }
        )
    }

    useImperativeHandle(ref, () => ({
        refresh
    }));

    /**
     * 获取搜索结果列表
     */
    const search = (offset: number, keyword: string) => {
        axios.get('/search', {
            params: {
                keyword: keyword,
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
            }
        )
    }

    return (
        <div className="container row" id="main">
            <>
                <PostList ticket={ticket} detailOpen={detailOpen}
                          postList={postList}
                          sendRequest={sendRequest}
                          publishOpen={publishOpen}
                          handleProfile={handleProfile}

                          currentPage={currentPage}
                          totalLine={totalLine}
                          navigatePages={navigatePages}
                          hasPreviousPage={hasPreviousPage}
                          hasNextPage={hasNextPage}
                          prePage={prePage}
                          nextPage={nextPage}
                          pages={pages}
                />
                <SideBar ticket={ticket} registerOpen={registerOpen} loginOpen={loginOpen}
                         handleProfile={handleProfile}/>
            </>

            {/*            <Route path="/search" element={
                <>
                    <Search detailOpen={detailOpen}
                            postList={postList}
                            sendRequest={search}

                            currentPage={currentPage}
                            totalLine={totalLine}
                            navigatePages={navigatePages}
                            hasPreviousPage={hasPreviousPage}
                            hasNextPage={hasNextPage}
                            prePage={prePage}
                            nextPage={nextPage}
                            pages={pages}/>
                    <SideBar/>
                </>
            }/>*/}

        </div>
    )
});

export default Main;

