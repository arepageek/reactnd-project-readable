import {
getPosts,
getCategories,
getPost,
getComments,
insertComment,
getPostsFromCategory,
insertPost,
scoreComment,
scorePost,
deleteComment,
updateComment,
deletePost,
updatePost

} from '../utils/api';

export const INSERT_POST = 'INSERT_POST';
export const INSERT_COMMENT = 'INSERT_COMMENT';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_SELECTED_POSTS = 'GET_SELECTED_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const GET_POST_FROM_CATEGORY = 'GET_POST_FROM_CATEGORY';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_SCORE_POST = 'UPDATE_SCORE_POST';
export const UPDATE_SCORE_COMMENT = 'UPDATE_SCORE_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SORT_BY_UP_VOTES = 'SORT_BY_UP_VOTES';
export const SORT_BY_DOWN_VOTES = 'SORT_BY_DOWN_VOTES';
export const SORT_BY_OLD_POST = 'SORT_BY_OLD_POST';
export const SORT_BY_NEW_POST = 'SORT_BY_NEW_POST';


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

export const newComment = (obj) => dispatch => (
    insertComment(obj)
        .then(comment => dispatch({
            type: INSERT_COMMENT,
            comment
        }))
)

export const fetchPostFromCategory = (category) => dispatch => (
    getPostsFromCategory(category)
    .then(posts => dispatch({
            type: GET_POST_FROM_CATEGORY,
            posts
    }))
)

export const postPost = (post) => dispatch => (
    insertPost(post)
        .then(post => dispatch({
            type: INSERT_POST,
            post
        }))
)

export const voteComment = (commentId, option) => dispatch => (
    scoreComment(commentId,option)
        .then (comment => dispatch({
            type: UPDATE_SCORE_COMMENT,
            comment
        }))
)
export const votePost = (postId,option) => dispatch => (
    scorePost(postId,option)
        .then(post => dispatch({
            type: UPDATE_SCORE_POST,
            post
        }))
)

export const delComment = (commentId) => dispatch => (
    deleteComment(commentId)
        .then(comment => dispatch({
            type: DELETE_COMMENT,
            comment
        }))
)

export const upComment = (commentId, comment) => dispatch => (
    updateComment(commentId,comment)
        .then(comment => dispatch({
            type:UPDATE_COMMENT,
            comment
        }))
)
export const delPost = (postId) => dispatch => (
    deletePost(postId)
        .then(post => dispatch({
            type: DELETE_POST,
            post
        }))
)

export const upPost = (postId, post) => dispatch => (
    updatePost(postId,post)
        .then(post => dispatch({
            type:UPDATE_POST,
            post
        }))
)

// SORT_POST
export const sortUpVotes = () => ({
    type: SORT_BY_UP_VOTES
})

export const sortDownVotes = () => ({
    type: SORT_BY_DOWN_VOTES
})

export const sortOldPost = () => ({
    type: SORT_BY_OLD_POST
})
export const sortNewPost = () => ({
    type: SORT_BY_NEW_POST
})