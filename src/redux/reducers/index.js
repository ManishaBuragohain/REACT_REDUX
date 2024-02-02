import {
  productReducer,
  selectedProductReducer,
} from "../reducers/productReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  allProducts: productReducer, // allProducts is the key used here for all reducers
  product: selectedProductReducer,
});

export default reducers;
