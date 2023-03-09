import React, {useState} from "react";
import './index.css';
import axios from "axios";
import {Button, Form, Modal} from "react-bootstrap";
import {Cookies} from "react-cookie";

/**
 * 登录模态框组件
 */
function Login(props: any) {

    const {captcha, getCaptcha, loginShow, loginClose, switchToRegister} = props;

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleSubmit = () => {
        axios.post('http://localhost:8079/community/login', {
            username: username,
            password: password,
            captcha: code,
            rememberMe: rememberMe
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

    const saveFormData = (type: string) => {
        return (e: any) => {
            let value = e.target.value;
            switch (type) {
                case "username":
                    setUsername(value);
                    break;
                case "password":
                    setPassword(value);
                    break;
                case "code":
                    setCode(value);
                    break;
            }
        }
    }

    return (
        <Modal show={loginShow} onHide={loginClose} id="loginModal" centered={true}>
            <Modal.Header closeButton>
                <img src="/icon/nav.png" alt="Band" width={88} height={30}
                     className="d-inline-block m-auto"/>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="username" id="username" placeholder="账号"
                                      onChange={saveFormData('username')} autoFocus autoComplete="off"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" name="password" id="password"
                                      placeholder="密码" onChange={saveFormData('password')}/>
                    </Form.Group>
                    <div className="row mb-3">
                        <Form.Group className="col-sm-7">
                            <Form.Control type="text" name="captcha" id="captcha"
                                          placeholder="验证码" onChange={saveFormData('code')}/>
                        </Form.Group>
                        <div className="col-sm-5 d-flex">
                            <img src={captcha} onClick={getCaptcha} alt="点击刷新"
                                 style={{width: "100px", height: "35px", marginLeft: "auto"}}/>
                        </div>
                    </div>
                </Form>
                <div className="d-flex justify-content-between row">
                    <div className="col-4 align-items-center d-flex">
                        <input type="checkbox" id="rememberMe" name="rememberMe"
                               onChange={() => setRememberMe(!rememberMe)}/>
                        <label className="form-check-label text-muted" htmlFor="rememberMe">&nbsp;记住我</label>
                    </div>
                    <div className="col-4 text-center">
                        <Button onClick={switchToRegister} className="text-decoration-none" variant="link">
                            去注册
                        </Button>
                    </div>
                    <div className="col-4 text-center" style={{paddingRight: 0}}>
                        <Button onClick={switchToRegister} className="text-decoration-none text-muted" variant="link"
                                style={{paddingRight: 0}}>
                            忘记密码
                        </Button>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="m-auto w-100" onClick={handleSubmit}>
                    登录
                </Button>
            </Modal.Footer>
            <p style={{fontSize: 1}} className="text-muted text-center">
                登录即同意<a href="">《用户协议》</a>和<a href="">《隐私协议》</a>
            </p>
        </Modal>
    )
}

export default Login;