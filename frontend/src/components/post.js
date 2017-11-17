import React, { Component } from 'react';
import {Card, Badge, Chip} from 'react-materialize';
import {Link} from 'react-router-dom';
const Timestamp = require('react-timestamp');

class PostComponent extends Component {

    render() {
        const {
            post = ''
        } = this.props;

        return (
                <Card key={post.id} className="hoverable">
                    <Link to={`/post/${post.id}`} >
                    <h4>{post.title}</h4>                    
                    </Link>
                    <p>Posted at: <Timestamp time={post.timestamp/1000} format='date' /></p>
                    <h6>{post.body}</h6>
                    <Badge>Comments: ({post.commentCount})</Badge> 
                    <Badge>Score: {post.voteScore}</Badge> 
                    <Chip>
                    {post.author}
                    </Chip>                                                           
                </Card>
        );
    }
}

export default PostComponent;