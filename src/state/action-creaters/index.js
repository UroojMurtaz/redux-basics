export const addProduct=(price)=>{
    return (dispatch)=>{
        dispatch({
            type:'ADD_PRODUCT',
            payload:price
        })
    }
}

export const removeProduct=(price)=>{
    return (dispatch)=>{
        dispatch({
            type:'REMOVE_PRODUCT',
            payload:price
        })
    }
}