import * as actionTypes from './actionTypes'

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}

export function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORİES_SUCCESS,payload:categories}
} 

export function getCategories(){
    return function(dispatch){
        let url = "http://localhost:3000/categories"
        return fetch(url)
        .then(res=>res.json())
        .then(data => dispatch(getCategoriesSuccess(data)));
    };
}