import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'
import { Badge } from 'reactstrap'


const CategoryList = ({ currentCategory, categories, actions, selectCategory }) => {
    useEffect(() => {
        actions.getCategories()
    },[])

    function selectCategory(category) {
        actions.changeCategory(category)
        actions.getProducts(category.id)
    };

    return (
        <div>
            <h3><Badge color="success">Categories</Badge></h3>
            <ListGroup>
                {
                    categories.map(category => (
                        <ListGroupItem
                            active={category.id === currentCategory.id ? true : false}
                            onClick={() => selectCategory(category)}
                            key={category.id}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)




