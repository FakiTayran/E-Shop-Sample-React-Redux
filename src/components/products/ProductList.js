import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table,Badge, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as basketActions from '../../redux/actions/basketActions'
import alertify from "alertifyjs"
import {Link} from 'react-router-dom'

const ProductList = ({ currentCategory, actions, products }) => {
    useEffect(() => {
        actions.getProducts();
    },[]);

    function addToBasket(product){
        actions.addToBasket({quantity:1,product})
        alertify.success(product.productName + " added to basket")
    }

    return (
        <div>
            <h3><Badge color="warning">Products of</Badge><Badge color="info">{currentCategory.categoryName}</Badge></h3>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Units In Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button color="info" onClick={()=>addToBasket(product)}>Add</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToBasket:bindActionCreators(basketActions.addToBasket,dispatch)
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

