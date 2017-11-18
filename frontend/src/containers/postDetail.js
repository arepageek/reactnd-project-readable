import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, fetchComments} from '../actions';
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
        var exist = Object.keys(post).map(key => {
                        if(key === 'error'){
                            return false;
                        }else{
                            return true;
                        }
                    })
        console.log(exist[0]);

        let show = <h6>Post not found!</h6>
        if(post && Object.keys(post).length > 0 && exist[0]){
            show =
            <div>
            <PostOption post={post} key={post.id} />
            {comments.map((comment) => (
             <CommentComponent comment={comment} key= {comment.id}/>            
            ))}
            <NewComment postId={post.id}/>
            </div>;
        }else{
             show = <h6>Post not found!</h6>
            
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