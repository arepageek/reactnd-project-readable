import React, { Component } from 'react';
import {Card, Button} from 'react-materialize';
import {connect} from 'react-redux';
import {sortUpVotes, sortDownVotes, sortOldPost,sortNewPost} from '../actions';
class SortPost extends Component {
    render() {
        const {
            sortDownVotes,
            sortNewPost,
            sortOldPost,
            sortUpVotes
        } = this.props;
        return (
            <Card className="hoverable">
            <h4> Sort Post by </h4>
           
            <p><Button className="green darken-1" onClick={() => {sortNewPost()}}>NEWEST FIRST</Button></p>
            <p><Button className="green darken-1" onClick={() => {sortOldPost()}}>OLDER FIRST</Button></p>          
            <p><Button className="green darken-1" onClick={() => {sortUpVotes()}}>by UpVotes  </Button></p>          
            <p><Button className="green darken-1" onClick={() => {sortDownVotes()}}>by DownVotes</Button></p>          
            
            </Card>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortUpVotes: () => dispatch(sortUpVotes()),
        sortDownVotes: () => dispatch(sortDownVotes()),
        sortOldPost: () => dispatch(sortOldPost()),
        sortNewPost: () => dispatch(sortNewPost()),
        
        
    }
}

export default connect(null,mapDispatchToProps)(SortPost);