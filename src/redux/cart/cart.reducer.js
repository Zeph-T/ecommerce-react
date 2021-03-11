import CartActionTypes from "./cart.types";

const ININTIAL_STATE={
    hidden : true
}

const cartReducer = (state=ININTIAL_STATE ,action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default :
            return state;
    }
} 

export default cartReducer;