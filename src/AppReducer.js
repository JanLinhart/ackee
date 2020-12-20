export default (state,action)=>{
    switch(action.type){
  
        case 'UPDATE_RECIPES':
            return{
                ...state,
                recipes:[...state.recipes, action.payload]
            }
        default:
            return state;
    }
}