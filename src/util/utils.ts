import axios from "./axios";
import React from "react";
import {Cookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

/**
 * 用来处理点赞的通用函数
 * 立即变换并计数+1，但并不是真实的即时后端数据，而只是向后端发送了一个请求，后端何时处理看消息队列
 * @param likeStatus
 * @param setLikeStatus
 * @param likeCount
 * @param setLikeCount
 * @param entityType
 * @param entityId
 * @param entityAuthorId
 * @param discussPostId
 */
export const handleLike = (
    likeStatus: string,
    setLikeStatus: (value: React.SetStateAction<string>) => void,
    likeCount: number,
    setLikeCount: (value: React.SetStateAction<number>) => void,
    entityType: number,
    entityId: string,
    entityAuthorId: string,
    discussPostId: string
) => {
    if (likeStatus === 'bi-hand-thumbs-up') {
        setLikeStatus('bi-hand-thumbs-up-fill');
        setLikeCount(likeCount + 1);
    } else {
        setLikeStatus('bi-hand-thumbs-up');
        setLikeCount(likeCount - 1);
    }

    axios.post('/like', {
        entityType: entityType,
        entityId: entityId,
        entityAuthorId: entityAuthorId,
        postId: discussPostId
    }, {
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    }).then(
        () => {
            // 不需要任何操作
        }
    )
}

const cookie = new Cookies();
export default cookie;

export const handleSubmit = (
    discussPostId: string,
    userId: string,
    entityType: number,
    entityId: string,
    content: string,
    replyRef: React.RefObject<HTMLTextAreaElement>,
    setReply: (value: React.SetStateAction<string>) => void,
    refresh: () => void,
) => {
    axios.post(`/comment/add/${discussPostId}`, {
        userId: userId,
        entityType: entityType,
        entityId: entityId,
        content: content
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        () => {
            if (replyRef.current) {
                replyRef.current.value = '';
                setReply('');
                alert('回复成功');
                refresh();
            }
        }
    )
}