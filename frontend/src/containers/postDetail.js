import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, fetchComments} from '../actions';
import PostComponent from '../components/post';
import CommentComponent from '../components/comment';
import NewComment from './newComment';
import PostOption from '../components/postOption';
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
            post = {},
            comments = []
        } = this.props;
      //  console.log(Object.keys(post));
        let show = <h6>Post not found!</h6>
        if(post && Object.keys(post).length > 0){
            show =
            <div>
            <PostOption post={post} key={post.id} />
            {comments.map((comment) => (
             <CommentComponent comment={comment} key= {comment.id}/>            
            ))}
            <NewComment postId={post.id}/>
            </div>;
        }else{
            let show = <h6>Post not found!</h6>
            
        }
        return (
            <div>
                {show}
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