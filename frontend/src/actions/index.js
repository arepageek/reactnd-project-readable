import {
getPosts,
getCategories,
getPost,
getComments

} from '../utils/api';

export const INSERT_POST = 'INSERT_POST';
export const INSERT_COMMENT = 'INSERT_COMMENT';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_SELECTED_POSTS = 'GET_SELECTED_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_SCORE_POST = 'UPDATE_SCORE_POST';
export const UPDATE_SCORE_COMMENT = 'UPDATE_SCORE_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SORT_BY_UP_VOTES = 'SORT_BY_UP_VOTES';
export const SORT_BY_DOWN_VOTES = 'SORT_BY_DOWN_VOTES';
export const SORT_BY_TIMESTAMP = 'SORT_BY_TIMESTAMP';


//GET ALL POSTS
export const fetchPosts = () => dispatch => (
    getPosts()
        .then(posts => dispatch({
            type: GET_ALL_POSTS,
            posts
        }))
);


// GET ALL CATEGORIES 
export const fetchCategories = () => dispatch => (
    getCategories()
        .then(categories => dispatch({
            type: GET_ALL_CATEGORIES,
            categories
        }))
);

// GET SELECTED POST
export const fetchPost = (postId) => dispatch => (
    getPost(postId)
        .then(post => dispatch({
            type: GET_SELECTED_POSTS,
            post
        }))
)

export const fetchComments = (postId) => dispatch => (
    getComments(postId)
        .then(comments => dispatch({
            type: GET_ALL_COMMENTS,
            comments
        }))
)



// SORT_POST
export const sortUpVotes = () => ({
    type: SORT_BY_UP_VOTES
})

export const sortDownVotes = () => ({
    type: SORT_BY_DOWN_VOTES
})

export const sortTimeStamp = () => ({
    type: SORT_BY_TIMESTAMP
})