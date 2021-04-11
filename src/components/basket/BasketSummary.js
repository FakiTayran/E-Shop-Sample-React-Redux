import React from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavbarText,
    Badge
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as basketActions from "../../redux/actions/basketActions"
import { Link } from 'react-router-dom'
import alertify from "alertifyjs"


const BasketSummary = ({ basket, actions }) => {
    function renderEmpty() {
        return (
            <NavbarText>Empty Basket</NavbarText>
        )
    }

    function removeBasketItem(product) {
        actions.removeFromBasket(product);
        alertify.error(product.productName + "deleted from basket")
    }
    function renderBasket() {
        return (
            <Nav>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Basket <Badge>{basket.length}</Badge>
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            basket.map(basketItem => (
                                <DropdownItem key={basketItem.product.id}>
                                    <Badge color="danger" onClick={() => removeBasketItem(basketItem.product)}>X</Badge> <Badge>{basketItem.product.productName} <Badge color="info">{basketItem.quantity}</Badge></Badge>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem divider />
                        <DropdownItem >
                            <Link to={"/basket"}>
                                Checkout
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        )
    }
    return (
        <div>
            {
                basket.length > 0 ? renderBasket() : renderEmpty()
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(BasketSummary)
