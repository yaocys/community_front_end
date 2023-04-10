import React from "react";
import PostItem from "../PostList/PostItem";
import Pagination from "../Pagination";
import {ListGroup} from "react-bootstrap";

/**
 * 搜索结果页
 */
function Search(props: any) {

    const {
        detailOpen, postList, sendRequest,
        currentPage, totalLine, navigatePages,
        hasPreviousPage, hasNextPage, prePage, nextPage, pages
    } = props;

    return (
        <div className="col-9 mt-2">
            <ListGroup>
                <ListGroup.Item variant="primary">共10条相关搜索结果</ListGroup.Item>
                {
                    postList && postList.map((post: any) => {
                        return (
                            <PostItem key={post.id} post={post} detailOpen={detailOpen}/>
                        )
                    })
                }
            </ListGroup>
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

export default Search;