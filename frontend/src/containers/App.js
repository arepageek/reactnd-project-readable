import React, { Component } from 'react';
import {Row,Navbar, NavItem, Col, Footer} from 'react-materialize';
import PostAll from './postAll';
import PostDetail from './postDetail';
import PostCategory from './postCategory';
import NewPost from './newPost';
import CategoriesComponent from '../components/categories';
import SortPost from './sortPost';
import {Route} from 'react-router-dom';
class App extends Component {



  render() {

    return (
      <Row>
      
      <Navbar brand='Readable Project' href='/' right fixed>
        <NavItem href='/'>HOME</NavItem>      
        <NavItem href='/newPost'>CREATE POST</NavItem>
      </Navbar>
      
        <Row>
        <Col s={12} m={10} l={8} offset='l1' className='Post'>
        {
          // check route exist
        }
        <Route
        exact path="/"
        render = {() =>(
          <PostAll />          
        )}
        />
        <Route exact path="/:category" component={PostCategory}/>
        <Route exact path="/:category/:postId" component={PostDetail}/>
        <Route exact path="/newPost" component={NewPost}/>
        
        </Col>
        <Col s={12} m={2} l={3}  className='Menu'>
          <CategoriesComponent/>
        <Route exact path="/" component={SortPost}/>
          
        </Col>
        </Row>
      <Footer copyrights="Andrés Aguilar - React Nanodegree - Udacity 2017">
      </Footer>
      </Row>
      
    );
  }
}




export default App;
