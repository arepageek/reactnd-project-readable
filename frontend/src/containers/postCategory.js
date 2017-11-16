import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPostFromCategory} from '../actions';

import PostComponent from '../components/post';

class PostCategory extends Component {
    componentDidMount(){
        const {
        match: { params: { category }},
          fetchPostFromCategory
        } = this.props;
        fetchPostFromCategory(category);
      }
    render() {
        const {
            posts = []
        } = this.props;

        return (
            <div>
            <h4>Post from selected category </h4>
            {posts.map((post) => (
                <PostComponent post={post}/>
            ))}
            </div>
        );
    }
}
const mapStateToProps = ({posts}) => {
    return {
      posts: posts.posts
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostFromCategory: (category) =>dispatch(fetchPostFromCategory(category))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostCategory);