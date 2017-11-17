import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col,Input, Button} from 'react-materialize';
import {postPost} from '../actions';
import uuid from 'uuid';
class NewPost extends Component {
    state = {
        author: '',
        title: '',
        body: '',
        category: 'react',
        showSucess: false
    }
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

    handleSubmit = () =>{
        if(this.state.author && this.state.title && this.state.body && this.state.category){
            var post = {
                id: uuid(),
                timestamp: Date.now(),
                title: this.state.title,
                body: this.state.body,
                author: this.state.author,
                category: this.state.category,
                voteScore: 0,
                deleted: false,
                commentCount: 0
            }   
            this.props.postPost(post);
            this.setState({
                author: '',
                title: '',
                body: '',
                category: '',
                showSucess: true
            })
        }else{
            this.setState({
                showSucess: false
            }) 
        }
    }
    render() {
        let message = null;
        const {
            categories
        } = this.props;
        if(this.state.showSucess){
            message = <h4 className="blue"> Post Added! </h4>;
        }else{
            message=''
        }
        return (         
            <div>
            {message}
            <h4> New Post </h4>
            <Row>
                <Input s={8} label="Title" name="title" value={this.state.title} onChange={this.handleChange} required />            
                <Input multiple label="Post" s={12}  name="body" value={this.state.body} onChange={this.handleChange} required/>
                <Input s={6} label="Author" name="author" value={this.state.author} onChange={this.handleChange} required />
                
                <Input s={6} type='select' label="Categories" name="category" value={this.state.category} onChange={this.handleChange}>
                    {categories.map((category,key) => (
                        <option value={category.name} key={key}>{category.name}</option>
                    ))}
                </Input>
                <Col m={5} offset="l9">
                <Button waves='light' onClick={this.handleSubmit} toast="holi">Send</Button>
                <Button waves='light' className='red' onClick={this.clearAll}>Clear</Button>
                </Col>
            </Row>
            </div>
        );
    }
}

const mapStateToProps = ({post,categories}) => {
    return {
        post: post.post,
        categories: categories.categories
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        postPost: (post) => dispatch(postPost(post))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewPost);