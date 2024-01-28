import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

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

export const setRedditPosts = (posts) => ({
    type: SET_REDDIT_POSTS,
    payload: posts,
});