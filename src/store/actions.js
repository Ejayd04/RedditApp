import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POST_DETAILS_REQUEST = 'FETCH_POST_DETAILS_REQUEST';
export const FETCH_POST_DETAILS_SUCCESS = 'FETCH_POST_DETAILS_SUCCESS';
export const FETCH_POST_DETAILS_FAILURE = 'FETCH_POST_DETAILS_FAILURE';

export const SET_REDDIT_POSTS = 'SET_REDDIT_POSTS';

export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
});



export const fetchPostDetailsRequest = () => ({
    type: FETCH_POST_DETAILS_REQUEST,
});

export const fetchPostDetailsSuccess = (post) => ({
    type: FETCH_POST_DETAILS_SUCCESS,
    payload: post,
});

export const fetchPostDetailsFailure = (error) => ({
    type: FETCH_POST_DETAILS_FAILURE,
    payload: error,
});



export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        axios
            .get('https://www.reddit.com/r/korea.json')
            .then((response) => {
                dispatch(fetchPostsSuccess(response.data.data.children));
            })
            .catch((error) => {
                dispatch(fetchPostsFailure(error.message));
            });
    };
}

export const fetchPostDetails = (postId) => {
    return (dispatch) => {
        dispatch(fetchPostDetailsRequest());
        axios
            .get(`https://www.reddit.com/r/korea/comments/${postId}.json`)
            .then((response) => {
                console.log(response.data);
                const apiResponse = response.data[0].data.children[0].data;

                const post = {
                    title: apiResponse.title,
                    author: apiResponse.author,
                    body: apiResponse.selftext,
                }
                dispatch(fetchPostDetailsSuccess(post));
            })
            .catch((error) => {
                dispatch(fetchPostDetailsFailure(error.message));
            });
    };
}

export const setRedditPosts = (posts) => ({
    type: SET_REDDIT_POSTS,
    payload: posts,
});