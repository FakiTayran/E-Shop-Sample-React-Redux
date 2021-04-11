import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function basketReducer(state=initialState.basket,action){
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            var addedItem = state.find(c=>c.product.id===action.payload.product.id);
            if(addedItem){
                var newState = state.map(basketItem=>{
                    if(basketItem.product.id===action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }                   
                    return basketItem; 
                })
                return newState;
            }else{
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_BASKET:
            var newState = state.filter(basketItem=>basketItem.product.id !== action.payload.id)
            return newState;
        default:
            return state;
    }
}

