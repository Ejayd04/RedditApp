// src/components/PostDetails.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostDetails } from "../store/actions";
import { useParams } from "react-router-dom";

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
        {post ? (
            <>
                <h2>{post.title}</h2>
                <p>Author: {post.author}</p>
                <p>Details: {post.body}</p>
                {/* Add more details as needed */}
            </>
        ) : (
            <div>No post details available</div>
        )}
    </div>
  );
}

export default PostDetails;
