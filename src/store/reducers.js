import { 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_SUCCESS,
    FETCH_POST_DETAILS_FAILURE,
    SET_REDDIT_POSTS,
} from './actions';

const initialState = {
    posts: [],
    loading: false,
    error: null,
    selectedPost: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_POST_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POST_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedPost: action.payload ? action.payload : {},
                error: null,
            };
        case FETCH_POST_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                selectedPost: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;