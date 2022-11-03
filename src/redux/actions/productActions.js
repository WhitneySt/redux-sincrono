import { productTypes } from "../types/productTypes"

export const addProduct = (product) => {
    return {
        type: productTypes.ADD_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (id) => {
    return {
        type: productTypes.DELETE_PRODUCT,
        payload: id
    }
}