import { productTypes } from "../types/productTypes";

const initialState = []

export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case productTypes.ADD_PRODUCT:
            return [
                ...state,
                action.payload
            ]

        case productTypes.DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload)

        default:
            return state;
    }
}