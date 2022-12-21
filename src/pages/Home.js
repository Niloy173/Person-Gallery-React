import React, { useContext } from 'react';
import { CartContext } from '../context/Context';

import Filters from '../components/Filters';
import { User } from '../components/User';



const Home = () => {

  const {state: {products}, filterContext: { bySort,byEmail,byBirth,byRating,searchQuery}} = useContext(CartContext);
  // const {products,cart} = state

 

  const TransFormData = () => {
    
    let newFormData = products;

    // if(!OutOfReach){
    //   newFormData = newFormData.filter(user => user.currentlyAvailable);
    // }
    

    if(bySort){
      newFormData =  newFormData.sort((a,b) => 
        bySort === "toDescending"? b.MessageCharge - a.MessageCharge : a.MessageCharge - b.MessageCharge
      )
    }



    if(byEmail){
      newFormData = newFormData.filter((user) => 
        user.email.includes("hotmail")
      )
    }

    if(byBirth){
      newFormData = newFormData.filter((user) => 
       Number(user.birthdate.toString().split(" ")[3]) < 1970
      )
    }

    if(byRating){
      newFormData = newFormData.filter((user) =>
        user.workRattings >= byRating
      )
    }

    if(searchQuery){
      newFormData = newFormData.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    //console.log(newFormData.length)
    return newFormData;

  }

  return (
    
    <div className='home'>
      {/* filter sidebar */}
      <Filters/>
      {/* product card */}
      <div className='productContainer'>
      
        {
          TransFormData().map(eachUser => (
            <User key={eachUser.userid} user={eachUser} />
          ))
        }
      
      </div>

    </div>
  )
}

export default Home