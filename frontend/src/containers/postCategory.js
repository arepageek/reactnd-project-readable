import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPostFromCategory} from '../actions';
import PostOption from '../components/postOption';

class PostCategory extends Component {
    componentWillMount(){
        const {
        match: { params: { category }},
          fetchPostFromCategory
        } = this.props;
        fetchPostFromCategory(category);
      }
      componentDidUpdate(prevProps, prevState){
        const {
        match: { params: { category }},
          fetchPostFromCategory
        } = this.props;
        if(prevProps.match.params.category !== category){
            fetchPostFromCategory(category);            
        }
      }
    render() {
        const {
            posts = []
        } = this.props;

        let show = ''
        if(this.props.posts.length > 0){
            show =
            <div>
            <h4>Showing category: {this.props.match.params.category}!</h4>
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
        fetchPostFromCategory: (category) =>dispatch(fetchPostFromCategory(category)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostCategory);