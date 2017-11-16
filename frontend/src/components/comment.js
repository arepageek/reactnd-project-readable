import React, { Component } from 'react';
import {Card, Badge, Button} from 'react-materialize';
import {voteComment} from '../actions';
import {connect} from 'react-redux';
class CommentComponent extends Component {
    handleVote = (commentId,vote) => {
        
    }
    render() {
        const {
            comment,
            voteComment
        } = this.props;
        return (
        <Card className="teal lighten-4 black-text" actions={[<div><Button waves='light' className='blue' onClick={() => {voteComment(comment.id,"upVote")}}>Up</Button> - <Button waves='light' className="red" onClick={() => {voteComment(comment.id,"downVote")}}>Down</Button></div>]}>
            <span>{comment.body}</span>
            <p>Author: {comment.author}</p>
            
            <Badge>Score: {comment.voteScore}</Badge>     
        </Card>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        voteComment: (commentId,score) => dispatch(voteComment(commentId,score))
    }
}

export default connect(null,mapDispatchToProps)(CommentComponent);