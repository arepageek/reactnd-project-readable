import {combineReducers} from 'redux';
import {
    GET_ALL_POSTS,
    GET_ALL_CATEGORIES,
    SORT_BY_UP_VOTES,
    SORT_BY_DOWN_VOTES,
    SORT_BY_TIMESTAMP,
    GET_SELECTED_POSTS,
    GET_ALL_COMMENTS,
    INSERT_COMMENT,
    GET_POST_FROM_CATEGORY,
    INSERT_POST,
    UPDATE_SCORE_COMMENT
} from '../actions';


const posts = (state = initialPostState, action) =>{
    const {posts}  = action;    
    switch(action.type){
        case GET_ALL_POSTS:
            return {
                posts: sortPostBy(posts, SORT_BY_UP_VOTES)
            };
        case GET_POST_FROM_CATEGORY:
            return {
                posts: sortPostBy(posts, SORT_BY_UP_VOTES)
            };
        default:
            return state;
    }
};

const post = (state = {post: []}, action) =>{
    const {post} = action;    
    switch(action.type){
        case GET_SELECTED_POSTS:
            return {
                post
            }
        case INSERT_POST:
            return {
                post
            }
        default:
            return state;
    }
}
const categories = (state=initialCategoriesState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES:
            console.log(action);
            const {categories} = action.categories;
            return{
                categories
            };
        default:
            return state;
    }
};

const comments = (state = {comments: []}, action) => {
    switch(action.type){
        case GET_ALL_COMMENTS:
             const {comments} = action;
                return {
                    comments : sortComments(comments)
                };
            case INSERT_COMMENT:
                return {
                    comments: sortComments([...state.comments, action.comment])
                }
            case UPDATE_SCORE_COMMENT:
                    var filter_state = state.comments.filter(comment => comment.id !== action.comment.id)
                return {
                    comments: sortComments([...filter_state, action.comment])
                }
            default:
                return state;
    }
}
const sortComments = (comments) => {
    return [...comments].sort((a,b) => {
        return b.voteScore - a.voteScore;
    });
}
const sortPostBy = (posts, action) => {
    switch (action) {
        case SORT_BY_UP_VOTES:
            return [...posts].sort((a,b) => {
                return b.voteScore - a.voteScore;
            });
        case SORT_BY_DOWN_VOTES:
            return [...posts].sort((a,b) => {
                return a.voteScore - b.voteScore;
            });
        case SORT_BY_TIMESTAMP:
            return [...posts].sort((a,b) => {
                return b.timestamp - a.timestamp;
            })
        default:
            return posts;
    }
};

const initialCategoriesState ={
    categories: []
}
const initialPostState = {
    posts: []
}

export default combineReducers({posts,post,categories,comments});