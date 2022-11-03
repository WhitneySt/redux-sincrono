import { counterTypes } from "../types/counterTypes"

export const sumar = () => {
    return {
        type: counterTypes.ADD_OPERATION,
        payload: 1
    }
    
}

export const restar = () => {
    return {
        type:counterTypes.MINUS_OPERATION,
        payload: 1
    }
}