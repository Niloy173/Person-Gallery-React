import { faker } from '@faker-js/faker';
import { createContext, useReducer } from "react";
import { FilterReducer, Reducer } from './Reducer';

export const CartContext = createContext();


function createRandomUser() {
  return {
    userid: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    currentlyAvailable: faker.datatype.boolean(),  // currently we're assuming everyone is avaliable
    workRattings: Math.floor(Math.random()*5)+1,
    MessageStock: Math.floor(Math.random()*5)+3,
    MessageCharge: Math.floor(Math.random()*7)+3
  };
}

 faker.seed(99);

export const ContextProvider = ({ children}) => {

  const products = [...Array(20)].map(() => createRandomUser())
  const [state, dispatch] = useReducer(Reducer,{
    products:products,
    cart: []
  })

  const [filterContext, dispatchFilterContext] = useReducer(FilterReducer,{
    bySort : '',
    byEmail: false,
    byBirth: false,
    // OutOfReach: false,
    byRating: 0,
    searchQuery: ""
  });
  
  return (
    
    <CartContext.Provider value={{
      state,
      dispatch,
      filterContext, 
      dispatchFilterContext
    }}>
      {children}
    </CartContext.Provider>
  )
}
