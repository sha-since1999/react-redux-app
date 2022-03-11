 import { ActionTypes } from "../constants/action-types.jsx";
const initialState ={
    products: [],
}
export  const productReducer  = ( state= initialState , {type, payload})=>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return { ...state, ...payload };
        default :       
        return state;
    }
};

export const selectedProductReducer=  (state = {product : {} }, { type, payload }) => {
  switch (type) {
  case ActionTypes.SELECTED_PRODUCT:
    return { ...state, ...payload };
  case ActionTypes.REMOVE_SELECTED_PRODUCT:
    return {product : {} };
  default:
    return state
  }
};




