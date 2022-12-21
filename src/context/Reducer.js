

export const Reducer = (state, action) => {

  switch(action.type){

    case 'ADD_TO_CONTACT':
      return {
        ...state,
         cart : [
            ...state.cart,
            {
              ...action.payload,
              canSendMessage: 1 // initial message request
            }
         ]
      }

    case 'REMOVE_CONTACT':
      return {
        ...state,
        cart : state.cart.filter(person => person.userid !== action.userid)
      }

    case 'NUMBER_OF_MESSAGE':
      return {
        ...state,
        cart: state.cart.filter((user) => 
          user.userid === action.payload.userid ? (user.canSendMessage = action.payload.messageRequest): user.canSendMessage
        )
      }

  


    default:
      return state
  }
}


export const FilterReducer = (state, action) => {

  switch (action.type) {
    case 'BY_EMAIL':
      return {
        ...state,
        byEmail: !action.byEmail
      }

    case 'SORT_BY_MESSAGE_CHARGE':
      return {
        ...state,
        bySort: action.payload
      }

    // case 'ALL_PERSON_INCLUDING_UNAVAILABLE':
    //   return {
    //     ...state,
    //     OutOfReach: !action.OutOfReach
    //   }

    case 'BY_BIRTH_OF_DATE':
      return {
        ...state,
        byBirth: !action.byBirth
      }

    case 'BY_RATING':
      return {
        ...state,
        byRating: action.payload
      }

    case 'SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      }

    case 'CLEAR_FILTER':
      return {
        ...state,
        ...action.payload
      }


  
    default:
      break;
  }
}