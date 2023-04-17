import React, {useState} from "react";
import axios from "../../../../util/axios";
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
        axios.post('/post/add', {
            title: title,
            content: content
        }, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            }
        }).then(
            () => {
                alert("发布成功");
                publishClose();
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
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={15}
                                      placeholder="此刻你想与大家分享什么…"
                                      onChange={saveFormData('content')}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={publishClose} size="sm">
                    取消
                </Button>
                <Button variant="primary" onClick={handleSubmit} size="sm">
                    发布
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Publish;