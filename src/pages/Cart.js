import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, FormControl, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import Rating from '../components/Rating';
import { CartContext } from '../context//Context';
const Cart = () => {

  const {state:{cart}, dispatch} = useContext(CartContext);

  const [total, setTotal] = useState(0);


  useEffect(() => {
    
    setTotal(cart.reduce((acc,curr) => acc + curr.MessageCharge * curr.canSendMessage , 0))
  },[cart])

  //console.log(cart);



  return (
    <div className='home'>

      <div className='productContainer'>
      
        <ListGroup>
        
        {
          cart.map(user => (
            
          <ListGroup.Item  key={user.userid}>
            
            <Row>

              <Col className='col-sm'>
               <Image rounded fluid src={user.avatar} alt={user.username} />
              </Col>

              <Col className='col-sm'>
              {user.username}
              </Col>

              <Col className='col-sm'>
              {user.email}
              <Rating rating={user.workRattings} />
              </Col>

              <Col className='col-sm'>
              {
                
            <FormControl as={"select"} value={user.CanSendMessage}
               onChange={(e) => dispatch({
                type: "NUMBER_OF_MESSAGE",
                payload: {
                  userid: user.userid,
                  messageRequest: Number(e.target.value)
                }
              })}
               >
               
                {[...Array(user.MessageStock).keys()].map((v) => (
                  <option key={v+1}>{v+1}</option>
                ))}
               
               </FormControl>
              }
              </Col>

              <Col className='col-sm'>
              
                <Button
                type='button'
                variant='light'
                onClick={() =>
                  dispatch({
                    type: "REMOVE_CONTACT",
                    userid: user.userid
                  })
                } >
                  {<AiFillDelete fontSize={"20px"}/>}
                </Button>
              
              </Col>

            </Row>
            
          </ListGroup.Item>

          ))
        }
        
        </ListGroup>
      
      </div>

      <div  className="summary">
      

      <div>
        
      <span className='title'>
      Total:  ({cart.length}) Person
      </span>
      
      </div>

      
      <div>
      
      <span style={{  fontWeight: 700, fontSize: 20}}>
      Total: $ {total} (Message Request Cost)
      </span><br/>
      
      
      </div>

       
      <div>
      
      <Button type='button' disabled={cart.length === 0}>
      Proceed to Checkout
      </Button>
      
      
      </div>
      
      </div>


    </div>
  )
}

export default Cart