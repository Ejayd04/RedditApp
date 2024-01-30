import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions";
import { Link } from "react-router-dom";
import Header from "./Header";


function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const searchResults = useSelector((state) => state.searchResults);
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

    //console.log(searchResults);
    console.log(posts[0]);

    return (
        <div style={mainPageStyle}>
            <Header />
            <ul style={postListStyle}>
                {(searchResults.length > 0 ? searchResults : posts).map((post) => (
                    <Link to={`/post/${post.data.id}`} key={post.data.id} style={postLinkStyle}>
                        <div style={postStyle}>
                            <div style={postContentStyle}>
                                <h3 style={titleStyle}>{searchResults.length > 0 ? post.title : post.data.title}</h3>
                                <p style={authorStyle}>{post.data.author}</p>
                            </div>
                            <div style={voteSectionStyle}>
                                <div style={voteArrowStyle}>{'\u2191'}</div>
                                <div>{post.data.ups}</div>
                                <div style={voteArrowStyle}>{'\u2193'}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}


const mainPageStyle = {
    backgroundColor: 'rgb(249, 249, 249)',
    padding: '20px',
};

const postListStyle = {
    listStyle: 'none',
    padding: 0,
};

const postLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
};

const postStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '15px',
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const postContentStyle = {
    flex: 1,
    marginRight: '10px',
};

const titleStyle = {
    color: 'rgb(17, 41, 58)',
    margin: '0',
};

const authorStyle = {
    color: 'rgb(255, 32, 0)',
    margin: '5px 0',
};

const voteSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const voteArrowStyle ={
    color: 'rgb(0, 123, 255)',
    marginBottom: '5px',
    cursor: 'pointer',
    fontSize: '20px',
};

export default PostList;