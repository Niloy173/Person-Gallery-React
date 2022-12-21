import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartContext } from '../context/Context'
import Rating from './Rating'

export const User = ({user}) => {

  const { state : { cart }, dispatch} = useContext(CartContext);
  // console.log(cart) // checking after connect or remove
  return (
    <Card className='profileCard'>
    <Card.Img variant="top" src={user.avatar} />
    <Card.Body>
      <Card.Title>{user.username}</Card.Title>
      <Card.Text>
        <b>Email:</b> {user.email} <br/>  
        <b>BirthDate:</b> {new Date(user.birthdate).toDateString()} <br/>
        <b>Send Message Charge:</b> $ {user.MessageCharge}<br/>
        <Rating rating={user.workRattings} />  
      </Card.Text>

        {
          cart.some((person) => person.userid === user.userid) ?
          (


            <Button 
            onClick={() => dispatch({
              type: "REMOVE_CONTACT",
              userid: user.userid
            })}
            style={{ margin: '0 5px'}} variant="danger">Remove</Button>

          ):
          (
          
            // for the testing you can use Available Option
            
        //  <Button disabled={!user.currentlyAvailable} onClick={() => 
        //       dispatch({
        //         type: 'ADD_TO_CONTACT',
        //         payload: user
        //       })} 
            
        //     variant="info">
        //     {!user.currentlyAvailable? 'Not Available': 'Connect' }
        //     </Button>

        <Button variant='info'
        onClick={() => 
          dispatch({
            type: 'ADD_TO_CONTACT',
            payload: user
          })
        }
        
        >Connect</Button>)
        }

     
    </Card.Body>
  </Card>
  )
}
