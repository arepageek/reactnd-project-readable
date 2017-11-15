import React, { Component } from 'react';
import {CardPanel, Badge, Icon} from 'react-materialize';
class CommentComponent extends Component {
    render() {
        const {
            comment
        } = this.props;
        return (
        <CardPanel className="teal lighten-4 black-text">
            <span>{comment.body}</span>
            <p>Author: {comment.author}</p>
            <Badge>Vote: Up - Down</Badge>  
            <Badge>Score: {comment.voteScore}</Badge>     
      
            
        </CardPanel>
        );
    }
}

export default CommentComponent;