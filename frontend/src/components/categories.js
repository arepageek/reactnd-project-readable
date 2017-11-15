import React, { Component } from 'react';
import {Card} from 'react-materialize';
import {fetchCategories} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CategoriesComponent extends Component {
    componentDidMount(){
        const {
        fetchCategories,
        } = this.props;
        fetchCategories();
      }
    render() {
        const {
            categories = []
        } = this.props;
        return (
            <Card>
            <h4>Categories</h4>
            {categories.map((category,i) =>(
                <Link to={`/${category.path}`}>
                <h6 key={i}>{category.name}</h6>
                </Link>
            ))}

          </Card>
        );
    }
}
const mapStateToProps = ({categories}) => {
    return {
      categories: categories.categories
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoriesComponent);