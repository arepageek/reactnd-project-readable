import React, { Component } from 'react';
import {Card, Badge} from 'react-materialize';
import {Link} from 'react-router-dom';
class PostComponent extends Component {

    render() {
        const {
            post = ''
        } = this.props;

        return (
                <Card key={post.id}>
                    <Link to={`/post/${post.id}`} >
                    <h4>{post.title}</h4>
                    </Link>
                    <h6>{post.body}</h6>
                    <Badge>Comments: ({post.commentCount})</Badge> 
                    <Badge>Score: {post.voteScore}</Badge>                                                            
                    <p>Author: {post.author}</p>
                </Card>
        );
    }
}

export default PostComponent;