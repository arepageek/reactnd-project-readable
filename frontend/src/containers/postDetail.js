import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, fetchComments} from '../actions';
import PostComponent from '../components/post';
import CommentComponent from '../components/comment';
import NewComment from './newComment';
class PostDetail extends Component {
    componentDidMount(){
        const {
            match: { params: { postId }},
          fetchPost,
          fetchComments
        } = this.props;
        fetchPost(postId);
        fetchComments(postId);
      }
    render() {
        const {
            post = [],
            comments = []
        } = this.props;
        return (
            <div>
           <PostComponent post={post} key={post.id} />
           {comments.map((comment) => (
            <CommentComponent comment={comment} key= {comment.id}/>            
           ))}
           <NewComment />
           </div>
        );
    }
}
const mapStateToProps = ({post,comments}) => {
    return {
      post: post.post,
      comments: comments.comments
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        fetchComments: (postId) => dispatch(fetchComments(postId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);