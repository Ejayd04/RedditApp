// src/components/PostDetails.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostDetails } from "../store/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";

function PostDetails() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.selectedPost);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(post);

  return (
    <div>
        <Header />
        <div style={postDetailsStyle}>
        {post ? (
            <>
                {post.media && post.media.type === 'youtube.com' && (
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src={post.media.oembed.html}
                            title={post.media.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                <h2 style={headingStyle}>{post.title}</h2>
                <p style={authorStyle}>by {post.author}</p>
                <div style={voteSectionStyle}>
                    <div style={voteArrowStyle}>{'\u2191'}</div>
                    <div>{post.ups}</div>
                    <div style={voteArrowStyle}>{'\u2193'}</div>
                </div>
                <p style={detailsStyle}>{post.body}</p>
                {/* Add more details as needed */}
            </>
        ) : (
            <div>No post details available</div>
        )}
        </div>
    </div>
  );
}


const postDetailsStyle = {
    textAlign: "center",
    margin: '20px auto',
    padding: '20px',
    maxWidth: '1000px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
};

const mediaStyle = {
    maxWidth: '100%',
    height: 'auto',
};

const headingStyle = {
    color: 'rgb(17, 41, 58)',
    fontSize: '24px',
    margin: '10px 0',
};

const authorStyle = {
    color: 'rgb(255, 32, 0)',
    marginBotton: '10px',
};

const detailsStyle = {
    color: 'rgb(17, 41, 58)',
    textAlign: 'justify',
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

export default PostDetails;

