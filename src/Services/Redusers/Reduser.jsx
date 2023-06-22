import ADD_TO_CART from "../Constants";
 const initialState={
    cardData:[]
 }

 const cardItems=(state=initialState,Action)=>{
    //eslint-disable-next-line default-case
   switch(Action.type){
    case ADD_TO_CART :
    return  {
        ...state,
        cardData: Action.data
    } 
    break;
    default:
        return state.
   }
}

export default cardItems;