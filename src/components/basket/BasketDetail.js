import React from 'react'
import { connect } from 'react-redux';
import {
    Table,
    Button,
    Badge
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as basketActions from "../../redux/actions/basketActions"
import alertify from "alertifyjs"


const BasketDetail = ({ basket, actions }) => {

    function removeBasketItem(product) {
        actions.removeFromBasket(product);
        alertify.error(product.productName + "deleted from basket")
    }

    return (
        <div>
            <h1>Basket <Badge> {basket.length}</Badge></h1>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket.map(basketItem => (
                            <tr key={basketItem.product.id}>
                                <td>{basketItem.product.id}</td>
                                <td>{basketItem.product.productName}</td>
                                <td>{basketItem.product.unitPrice}</td>
                                <td>{basketItem.quantity}</td>
                                <td><Button color="danger" onClick={() => removeBasketItem(basketItem.product)}>X</Button></td>
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
        basket: state.basketReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromBasket: bindActionCreators(basketActions.removeFromBasket, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketDetail)

