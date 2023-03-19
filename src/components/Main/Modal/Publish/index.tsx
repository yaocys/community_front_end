import React, {useState} from "react";
import axios from "axios";
import {Button, Modal, Form} from "react-bootstrap";

/**
 * 发帖模态框
 * @constructor
 */
function Publish(props: any) {

    const {publishShow, publishClose} = props;

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const saveFormData = (type: string) => {
        return (e: any) => {
            let value = e.target.value;
            switch (type) {
                case "title":
                    setTitle(value);
                    break;
                case "content":
                    setContent(content);
                    break;
            }
        }
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8079/community/post/add', {
            title: title,
            content: content
        }, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        }).then(
            response => {
                const code = response.data.code;
                if (code === 200) {
                    alert("发布成功");
                    publishClose();
                }
            },
            error => {
                console.log('请求失败', error);
            }
        )
    }

    return (
        <Modal show={publishShow} onHide={publishClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-5" id="publishModalLabel">
                        <i className="bi bi-pencil-square">&nbsp;</i>发布动态
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            placeholder="起个标题吧"
                            autoFocus
                            onChange={saveFormData('title')}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Control as="textarea" rows={15}
                                      placeholder="此刻你想与大家分享什么…"
                                      onChange={saveFormData('content')}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={publishClose}>
                    取消
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    发布
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Publish;