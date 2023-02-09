
export const todoReducer = (initilState, action) => {
    
    switch(action.type){
        case '[TODO] Add Todo':
            return [...initilState, action.payload]

        default:
            return initilState;
    }

}