export default (state,action)=>{
    switch(action.type){
  
        case 'ADD_RECIPE':
            return{
                ...state,
                recipes:[action.payload,...state.recipes]
            }
        default:
            return state;
    }
}