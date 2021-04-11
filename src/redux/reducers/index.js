import {combineReducers} from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import basketReducer from './basketReducer'
import 'alertifyjs/build/css/alertify.min.css'
import savedProductReducer from './saveProductReducer'


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    basketReducer,
    savedProductReducer
})

export default rootReducer