
export const todoReducer = (initilState, action) => {
    
    switch(action.type){
        case '[TODO] Add Todo':
            return [...initilState, action.payload];

        case '[TODO] Remove Todo':
                return initilState.filter(value => value.id !== action.payload);
            
        case '[TODO] Toggle Todo':
               return initilState.map(value =>{

                if(value.id === action.payload){
                    return {
                        ...value,
                        done: !value.done
                    }
                }

                return value;
               });

        default:
            return initilState;
    }

}