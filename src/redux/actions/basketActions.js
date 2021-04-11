import * as actionTypes from './actionTypes'

export function addToBasket(product){
    return {type:actionTypes.ADD_TO_BASKET,payload:product}
}

export function removeFromBasket(product){
    return {type:actionTypes.REMOVE_FROM_BASKET,payload:product}
}