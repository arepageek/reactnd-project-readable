import React, { Component } from 'react';
import {Card, Badge} from 'react-materialize';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import PostComponent from '../components/post';
import CommentComponent from '../components/comment';
class PostDetail extends Component {
    componentDidMount(){
        const {
            match: { params: { postId }},
          fetchPost,
        } = this.props;
        fetchPost(postId);
      }
    render() {
        const {
            post = []
        } = this.props;
        return (
            <div>
           <PostComponent post={post} />
           <CommentComponent />
           </div>
        );
    }
}
const mapStateToProps = ({post}) => {
    return {
      post: post.post
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);