import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';
import Login from "./components/Main/Modal/Login";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Register from "./components/Main/Modal/Register";
import {Cookies} from "react-cookie";
import Publish from "./components/Main/Modal/Publish";
import Detail from "./components/Main/Modal/Detail";

/**
 * 贴子实体类对象
 */
interface DiscussPost {

}

function App(props: any) {

    const [captcha, setCaptcha] = useState<string>("");
    const [ticket, setTicket] = useState(undefined);

    const cookie = new Cookies();

    useEffect(() => {
        setTicket(cookie.get("ticket"));
    }, [cookie]);

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
    }

    /**
     * 发送获取评论的请求
     */
    const sendRequest = (offset: number, discussPostId: string) => {
        axios.get(`http://localhost:8079/community/comment/query/${discussPostId}`, {
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
            },
            error => {
                console.log('请求失败', error);
            }
        )
        window.scrollTo(0, 0);
    }

    /**
     * 获取帖子详情
     * 难道有参数的调用都需要写成箭头函数？
     * @param discussPostId
     */
    const detailOpen = (discussPostId: string) => {
        setDetailShow(true);
        axios.get(`http://localhost:8079/community/post/detail/${discussPostId}`).then(
            response => {
                // 获取到帖子详情数据
                setPostDetail(response.data.data);
                sendRequest(1, response.data.data.post.id);
            },
            error => {
                console.log('请求失败', error);
            }
        );
    }


    const detailClose = () => {
        setPostDetail(undefined);
        setDetailShow(false);
    }

    /**
     * 获取验证码图片
     */
    const getCaptcha = () => {
        axios.get('http://localhost:8079/community/captcha', {
            responseType: "blob",
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            response => {
                let blob = new Blob([response.data], {type: response.data.type});
                setCaptcha(URL.createObjectURL(blob));
            },
            error => {
                console.log('请求失败', error);
            }
        )
    }

    return (
        <>
            <NavBar registerOpen={registerOpen} loginOpen={loginOpen} ticket={ticket} setTicket={setTicket}/>

            <Main ticket={ticket} detailOpen={detailOpen}/>

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
                    currentPage={currentPage}
                    totalLine={totalLine}
                    navigatePages={navigatePages}
                    hasPreviousPage={hasPreviousPage}
                    hasNextPage={hasNextPage}
                    prePage={prePage}
                    nextPage={nextPage}
                    pages={pages}
            />

            <Footer/>
        </>
    );
}

export default App;
