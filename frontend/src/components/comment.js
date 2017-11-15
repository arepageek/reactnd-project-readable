import React, { Component } from 'react';
import {CardPanel} from 'react-materialize';
class CommentComponent extends Component {
    render() {
        return (
        <CardPanel className="teal lighten-4 black-text">
            <span>Comment</span>
        </CardPanel>
        );
    }
}

export default CommentComponent;