/* eslint-disable no-undef */
export default reducer=(state,action)=>{
    if(action.type==="ADD_PRODUCT"){
        return state+action.payload
    }
    else if(action.type==="REMOVE_PRODUCT"){
        return state-action.payload
    }
    else{
        return state
    }
}