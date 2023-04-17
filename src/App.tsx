import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import Login from "./components/Main/Modal/Login";
import React, {useEffect, useRef, useState} from "react";
import axios from "./util/axios";
import Register from "./components/Main/Modal/Register";
import {Cookies} from "react-cookie";
import Publish from "./components/Main/Modal/Publish";
import Detail from "./components/Main/Modal/Detail";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Message from "./components/Main/Message";
import PersonalCenter from "./components/PersonalCenter";
import Like from "./components/Main/Message/Like";
import Follower from "./components/Main/Message/Follower";
import Comment from "./components/Main/Message/Comment";
import Notice from "./components/Main/Message/Notice";
import Letter from "./components/Main/Message/Letter";

interface mainRef {
    refresh: () => void;
}

const cookie = new Cookies();

function App(props: any) {

    const [captcha, setCaptcha] = useState<string>("");
    const [ticket, setTicket] = useState<string>('');

    const mainRef = useRef<mainRef>(null);

    useEffect(() => {
        setTicket(cookie.get("ticket"));
    }, []);

    /*
    控制模态框的显示
     */
    const [registerShow, setRegisterShow] = useState<boolean>(false);
    const [loginShow, setLoginShow] = useState<boolean>(false);
    const [detailShow, setDetailShow] = useState<boolean>(false);
    const [postDetail, setPostDetail] = useState<any>(undefined);// 单个帖子详情对象
    const [publishShow, setPublishShow] = useState<any>(false);

    const [commentList, setCommentList] = useState<any[]>([]);
    const [navigatePages, setNavigatePages] = useState<any[]>([]);
    const [totalLine, setTotalLine] = useState<any>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const [prePage, setPrePage] = useState<number>(1);
    const [nextPage, setNextPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);

    const navigate = useNavigate();
    const handleProfile = (userId: string) => {
        detailClose();
        navigate(`/user/${userId}`);
    }

    const registerClose = () => {
        setRegisterShow(false);
    }

    const registerOpen = () => {
        setRegisterShow(true);
    }

    const loginOpen = () => {
        setLoginShow(true);
        getCaptcha();
    }

    const loginClose = () => {
        setLoginShow(false);
    }

    const switchToRegister = () => {
        setLoginShow(false);
        setRegisterShow(true);
    }

    const switchToLogin = () => {
        setRegisterShow(false);
        getCaptcha();
        setLoginShow(true);
    }

    const publishOpen = () => {
        setPublishShow(true);
    }

    const publishClose = () => {
        setPublishShow(false);
        mainRef.current?.refresh();
    }

    /**
     * 发送获取评论的请求
     */
    const sendRequest = (offset: number, discussPostId: string) => {
        axios.get(`/comment/query/${discussPostId}`, {
            params: {
                offset: offset,
                limit: 5
            }
        }).then(
            response => {
                setCommentList(response.data.data.list);
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

    /**
     * 获取帖子详情
     */
    const detailOpen = (discussPostId: string) => {
        setDetailShow(true);
        axios.get(`/post/detail/${discussPostId}`).then(
            response => {
                setPostDetail(response.data.data);
                sendRequest(1, response.data.data.post.id);
            }
        )
    }

    const detailClose = () => {
        setPostDetail(undefined);
        setDetailShow(false);
        mainRef.current?.refresh();
    }

    /**
     * 获取验证码图片
     */
    const getCaptcha = () => {
        axios.get('/captcha', {
            responseType: "blob",
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            response => {
                let blob = new Blob([response.data], {type: response.data.type});
                setCaptcha(URL.createObjectURL(blob));
            }
        )
    }

    return (
        <div>
            <NavBar registerOpen={registerOpen} loginOpen={loginOpen} ticket={ticket} setTicket={setTicket}/>
            <Routes>
                <Route path="/index" element={
                    <>
                        <Main ticket={ticket} detailOpen={detailOpen} ref={mainRef} publishOpen={publishOpen}
                              registerOpen={registerOpen} loginOpen={loginOpen} handleProfile={handleProfile}/>
                        <Footer/>
                    </>
                }/>
                <Route path="/message" element={<Message/>}>
                    {/*默认路由*/}
                    <Route index element={<Notice/>}/>
                    <Route path="like" element={<Like/>}/>
                    <Route path="follower" element={<Follower/>}/>
                    <Route path="comment" element={<Comment/>}/>
                    <Route path="notice" element={<Notice/>}/>
                    <Route path="letter" element={<Letter/>}/>
                </Route>
                <Route path="/user/:userId" element={<PersonalCenter/>}/>
                <Route path="/" element={<Navigate to="/index"/>}/>
            </Routes>

            <Login captcha={captcha} getCaptcha={getCaptcha}
                   loginShow={loginShow} loginClose={loginClose}
                   switchToRegister={switchToRegister}/>

            <Register registerShow={registerShow} registerClose={registerClose}
                      switchToLogin={switchToLogin}/>

            <Publish publishClose={publishClose} publishShow={publishShow}/>

            <Detail detailShow={detailShow} detailClose={detailClose}
                    postDetail={postDetail}
                    commentList={commentList}
                    sendRequest={sendRequest}
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
        </div>
    );
}

export default App;
