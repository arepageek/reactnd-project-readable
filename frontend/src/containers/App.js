import React, { Component } from 'react';
import {Row, Navbar, NavItem, Col, Footer} from 'react-materialize';
import PostAll from './postAll';
import PostDetail from './postDetail';
import CategoriesComponent from '../components/categories';
import {Switch, Route} from 'react-router-dom';
class App extends Component {



  render() {

    return (
      <Row>
      
      <Navbar brand='Readable Project' href='/' right fixed>
        <NavItem href='asd'>CREATE POST</NavItem>
      </Navbar>
      <Switch>
      
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
        <Route exact path="/post/:postId" component={PostDetail}/>

        </Col>
        <Col s={12} m={2} l={3}  className='Menu'>
        <Route
        exact path="/"
        render = {() =>(
          <CategoriesComponent/>
        )}
        />
        </Col>
        </Row>
      </Switch>
        

        <Footer copyrights="Andrés Aguilar - React Nanodegree - Udacity 2017"

        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        }
        className='example'
      >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footer>
      </Row>
      
    );
  }
}




export default App;
