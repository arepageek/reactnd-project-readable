import {combineReducers} from 'redux';
import {
    GET_ALL_POSTS,
    GET_ALL_CATEGORIES,
    SORT_BY_UP_VOTES,
    SORT_BY_DOWN_VOTES,
    SORT_BY_OLD_POST,
    SORT_BY_NEW_POST,
    GET_SELECTED_POSTS,
    GET_ALL_COMMENTS,
    INSERT_COMMENT,
    GET_POST_FROM_CATEGORY,
    INSERT_POST,
    UPDATE_SCORE_COMMENT,
    UPDATE_SCORE_POST,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    DELETE_POST,
    UPDATE_POST
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
        case UPDATE_SCORE_POST:
             var filter_state = state.posts.filter(post => post.id !== action.post.id)
        
            return {
                posts: sortPostBy([...filter_state, action.post], SORT_BY_UP_VOTES)
            }
        case DELETE_POST:
            filter_state = state.posts.filter(post => post.id !== action.post.id)
            return {
                posts: sortPostBy([...filter_state], SORT_BY_UP_VOTES)
            }
        case UPDATE_POST:
            filter_state = state.posts.filter(post => post.id !== action.post.id)
            return {
                posts: sortPostBy([...filter_state,action.post], SORT_BY_UP_VOTES)
            }
        case SORT_BY_DOWN_VOTES:
        return {
            posts: sortPostBy(state.posts, SORT_BY_DOWN_VOTES)
        };
        case SORT_BY_UP_VOTES:
        return {
            posts: sortPostBy(state.posts, SORT_BY_UP_VOTES)
        };
        case SORT_BY_OLD_POST:
        return {
            posts: sortPostBy(state.posts, SORT_BY_OLD_POST)
        };
        case SORT_BY_NEW_POST:
        return {
            posts: sortPostBy(state.posts, SORT_BY_NEW_POST)
        };
        default:
            return state;
    }
};

const post = (state = {post: []}, action) =>{
    const {post} = action;    
    switch(action.type){
        case UPDATE_POST:
        case UPDATE_SCORE_POST:
        case GET_SELECTED_POSTS:
            return {
                post
            }
        case INSERT_POST:
            return {
                post
            }
        case DELETE_POST:
            return {
                post: null
            };
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
            case DELETE_COMMENT:
            filter_state = state.comments.filter(comment => comment.id !== action.comment.id)
                return{
                    comments: sortComments([...filter_state])
                }
            case UPDATE_COMMENT:
            filter_state = state.comments.filter(comment => comment.id !== action.comment.id)
                return {
                    comments:  sortComments([...filter_state, action.comment])
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
        case SORT_BY_OLD_POST:
            return [...posts].sort((a,b) => {
                return a.timestamp - b.timestamp;
            })
            case SORT_BY_NEW_POST:
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