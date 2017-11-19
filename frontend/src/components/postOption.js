import React, { Component } from 'react';
import {connect} from 'react-redux';
import {votePost, delPost, upPost} from '../actions';
import {Card,Chip, Button, Input, Col, Row} from 'react-materialize';
import {Link} from 'react-router-dom';
const Timestamp = require('react-timestamp');

class PostDetail extends Component {
    state={
        showEditing: false,
        author: '',
        title: '',
        body: '',
        category: '',
    }
    showEdit = () =>{
        var edit = !this.state.showEditing
        this.setState({showEditing: edit})
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit= (postId) =>{
        if(this.state.author && this.state.title && this.state.body && this.state.category){
            var post = {
                title: this.state.title,
                body: this.state.body,
                author: this.state.author,
                category: this.state.category,
            }  
              this.setState({
                showEditing: false
              })
        this.props.upPost(postId,post);
        }
    }
    componentDidMount(){
        this.setState({
            author: this.props.post.author,
            title: this.props.post.title,
            body: this.props.post.body,
            category: this.props.post.category,

        })
    }
    render() {
        const {
            categories= [],
            post= [],
            votePost,
            delPost
        } = this.props;
        let form = ''
        if(this.state.showEditing){
            form = <div>
            <h4> Edit Post</h4>
            <Row>
                <Input s={8} label="Title" name="title" defaultValue={this.state.title} onChange={this.handleChange} required />            
                <Input multiple label="Post" s={12}  name="body" defaultValue={this.state.body} onChange={this.handleChange} required/>
                <Input s={6} label="Author" name="author" defaultValue={this.state.author} onChange={this.handleChange} required />
                
                <Input s={6} type='select' label="Categories" name="category" defaultValue={this.state.category} onChange={this.handleChange}>
                    {categories.map((category,key) => (
                        <option value={category.name} key={key}>{category.name}</option>
                    ))}
                </Input>
                <Col>
                <Button waves='light' onClick={() => {this.handleSubmit(post.id)}}>Edit</Button>
                </Col>
            </Row>
            </div>;
        }else{
            form=''
        }
        return (
            <div>
            <Card key={post.id} className="hoverable" actions={[<div key={post.timestamp}><Button waves='light' className='blue' onClick={() => {votePost(post.id,"upVote")}}>Up</Button> - <Button waves='light' className="red" onClick={() => {votePost(post.id,"downVote")}}>Down</Button></div>]}>
            <Link to={`/${post.category}/${post.id}`} >
            <h4>{post.title}</h4>                    
            </Link>
            <p>Posted at: <Timestamp time={post.timestamp/1000} format='date' />
            </p>
            
            <h6>{post.body}</h6>
            <Chip>
            {post.author}
            </Chip> 
            <span className="new badge" data-badge-caption={post.commentCount}>Comments</span>                
            <span className="new badge" data-badge-caption={post.voteScore}>Score</span>
            
            <div className="right-align">
                <Button className="orange" onClick={() => {this.showEdit()}}>Edit</Button>            
                <Button className="red" onClick={() => {delPost(post.id)}}>Delete</Button>
            </div>                                        
            </Card>
            {form}
            </div>
        );
    }
}
const mapStateToProps = ({categories}) => {
    return {
      categories: categories.categories
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (postId,option) => dispatch(votePost(postId,option)),
        delPost: (postId) => dispatch(delPost(postId)),
        upPost: (postId,post) => dispatch(upPost(postId,post)),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);