import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import PostOption from '../components/postOption';


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
        let show = ''
        if(this.props.posts.length > 0){
            show =
            <div>
            <h4>Showing all posts!</h4>
            {posts.map((post) => (
                <PostOption post={post} key={post.id} />
                
            ))}
            </div>;
        }else{
            show = <h4>Post not found!</h4>
            
        }
        return (
            <div>
            {show}
            
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
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostAll);