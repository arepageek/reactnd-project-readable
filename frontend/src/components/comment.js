import React, { Component } from 'react';
import {Card, Button,Chip, Input, Row, Col} from 'react-materialize';
import {voteComment, delComment, upComment, fetchPost} from '../actions';
import {connect} from 'react-redux';
const Timestamp = require('react-timestamp');

class CommentComponent extends Component {
    state={
        showEditing: false,
        author: '',
        comment: ''
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    showEdit = () =>{
        var edit = !this.state.showEditing
        this.setState({showEditing: edit})
    }
    componentDidMount() {
        this.setState({
            author: this.props.comment.author,
            comment: this.props.comment.body
        })
    }
    handleSubmit= (commentId) =>{
        if(this.state.comment && this.state.author){
            const obj = 
            {
                body: this.state.comment,
                author: this.state.author,
              }
              this.setState({
                showEditing: false
              })
        this.props.upComment(commentId,obj)
        }
    }

    handleDelete = (comment) => {
        console.log()
        this.props.delComment(comment.id)
        .then(
            this.props.fetchPost(comment.parentId)        
        )
        
    }
    render() {
        const {
            comment,
            voteComment
        } = this.props;
        let formEdit= ''
        if (this.state.showEditing){

            formEdit = 
            <div>
            <h4> Edit Comment </h4>
            <Row>
                <Input s={6} label="Author" name="author" value={this.state.author} onChange={this.handleChange} required />
                <Input type="text" label="Comment" s={12}  name="comment" value={this.state.comment} onChange={this.handleChange} required/>
                <Col>
                <Button waves='light' onClick={() => {this.handleSubmit(comment.id)}}>Edit</Button>
                </Col>
            </Row>
            </div>;
        }else{
            formEdit = '';
            
        }
        return (
            <div>
            
        <Card className="teal lighten-4 black-text hoverable" actions={[<div key={comment.timestamp}><Button waves='light' className='blue' onClick={() => {voteComment(comment.id,"upVote")}}>Up</Button> - <Button waves='light' className="red" onClick={() => {voteComment(comment.id,"downVote")}}>Down</Button></div>]} >
            <h6>{comment.body}</h6>
            <p>Posted at: <Timestamp time={comment.timestamp/1000} format='date' /></p>            
            <Chip>
            Author: {comment.author}
            </Chip> 
            <span className="new badge" data-badge-caption={comment.voteScore}>Score</span>
            <div className="right-align">
                <Button className="orange" onClick={() => {this.showEdit()}}>Edit</Button>            
                <Button className="red" onClick={() => {this.handleDelete(comment)}}>Delete</Button>
            </div>
        </Card>
        {formEdit}
        </div>
        );
    }
}

const mapStateToProps = ({post}) => {
    return{
        post:post.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        voteComment: (commentId,score) => dispatch(voteComment(commentId,score)),
        delComment: (commentId) => dispatch(delComment(commentId)),
        upComment: (commentId, comment) => dispatch(upComment(commentId,comment)),
        fetchPost: (postId) => dispatch(fetchPost(postId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentComponent);