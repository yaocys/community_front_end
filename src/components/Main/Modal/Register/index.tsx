import React, {useState} from "react";
import {Button, Form, Modal, ModalTitle} from "react-bootstrap";
import './index.css';
import axios from "../../../../util/axios";

/**
 * 注册模态框组件
 */
function Register(props: any) {

    const {registerShow, registerClose, switchToLogin} = props;

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [email, setEmail] = useState<string>("");


    const handleSubmit = () => {
        axios.post('/register', {
            username: username,
            password: password,
            email: email
        }, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            }
        }).then(
            () => {
                alert('注册成功，请于邮箱确认');
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
                case "passwordConfirm":
                    setPasswordConfirm(value);
                    break;
                case "email":
                    setEmail(value);
                    break;
            }
        }
    }

    return (
        <Modal show={registerShow} onHide={registerClose} id="registerModal" centered={true}>
            <Modal.Header closeButton>
                <ModalTitle>
                    <Button variant="link" className="text-decoration-none" onClick={switchToLogin}>
                        返回登录
                    </Button>
                    <img src="/icon/nav.png" alt="Band" width={88} height={30}
                         className="d-inline-block m-auto"/>
                </ModalTitle>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" name="username" id="username" placeholder="用户名"
                                      onChange={saveFormData('username')} autoFocus autoComplete="off"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" name="password" placeholder="密码"
                                      onChange={saveFormData('password')}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password" name="passwordConfirm" placeholder="确认密码"
                                      onChange={saveFormData('passwordConfirm')}/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Control type="email" name="email" placeholder="邮箱"
                                      onChange={saveFormData('email')}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="m-auto w-100" onClick={handleSubmit}>
                    注册
                </Button>
            </Modal.Footer>
            <p style={{fontSize: 1}} className="text-muted text-center">
                注册即同意<a href="">《用户协议》</a>和<a href="">《隐私协议》</a>
            </p>
        </Modal>
    )
}

export default Register;