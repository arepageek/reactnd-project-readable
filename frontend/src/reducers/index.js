import {combineReducers} from 'redux';
import {
    GET_ALL_POSTS,
    GET_ALL_CATEGORIES,
    SORT_BY_UP_VOTES,
    SORT_BY_DOWN_VOTES,
    SORT_BY_TIMESTAMP,
    GET_SELECTED_POSTS
} from '../actions';


const posts = (state = initialPostState, action) =>{
    switch(action.type){
        case GET_ALL_POSTS:
            const {posts}  = action;
            return {
                posts: sortPostBy(posts, SORT_BY_UP_VOTES)
            };
        default:
            return state;
    }
};

const post = (state = {post: []}, action) =>{
    switch(action.type){
        case GET_SELECTED_POSTS:
          const {post} = action;
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

export default combineReducers({posts,post,categories});