import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import PostComponent from '../components/post';

class PostAll extends Component {
    componentDidMount(){
        const {
          fetchPosts,
        } = this.props;
        fetchPosts();
      }
    render() {
        const {
            posts = []
        } = this.props;

        return (
            <div>
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
        fetchPosts: () => dispatch(fetchPosts()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostAll);