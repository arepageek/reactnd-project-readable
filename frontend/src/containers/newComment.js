import React, { Component } from 'react';
import {Row, Input, Button, Col} from 'react-materialize';
import {connect} from 'react-redux';
import {newComment} from '../actions';
import uuid from 'uuid';
class NewComment extends Component {

    state ={
        author: '',
        comment: ''
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        console.log(event.target.value)
        //this.setState({ author: event.target.value })
    }
    handleSubmit= () =>{
        if(this.state.comment && this.state.author){
            const obj = 
            {
                id: uuid(),
                parentId: this.props.post.post.id,
                timestamp: Date.now(),
                body: this.state.comment,
                author: this.state.author,
                voteScore: 0,
                deleted: false,
                parentDeleted: false
              }
              this.setState({
                author: '',
                comment: ''
              })
        this.props.newComment(obj);
        }
    }
    clearAll = () => {
        this.setState({
            author: '',
            comment: ''
          })
    }
    render() {
        return (
            <div>
            <h4> New Comment </h4>
            <Row>
                <Input s={6} label="Author" name="author" value={this.state.author} onChange={this.handleChange} required />
                <Input type="text" label="Comment" s={12}  name="comment" value={this.state.comment} onChange={this.handleChange} required/>
                <Col m={5} offset="l9">
                <Button waves='light' onClick={this.handleSubmit}>Send</Button>
                <Button waves='light' className='red' onClick={this.clearAll}>Clear</Button>
                </Col>
            </Row>
            </div>
        );
    }
}

const mapStateToProps = ({post,comments}) => {
    return{
        post,
        comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        newComment: (obj) => dispatch(newComment(obj))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewComment);