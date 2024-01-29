import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions";
import { Link } from "react-router-dom";


function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link  to={`/post/${post.data.id}`}>{post.data.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;