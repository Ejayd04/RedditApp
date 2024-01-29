import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const searchResults = useSelector((state) => state.searchResults);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    //console.log(searchResults);
    console.log(posts[0]);

    return (
        <div>
            <h2>Post List</h2>
            <SearchBar />
            <ul>
                {(searchResults.length > 0 ? searchResults : posts).map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            {searchResults.length > 0 ? post.title : post.data.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;