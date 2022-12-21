import React, { useContext } from 'react';
import { Badge, Button, Card, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/Context';
const Header = () => {
  
  const { state : { cart },  dispatchFilterContext, dispatch} = useContext(CartContext);
  const location = useLocation();

  return (
  
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link to={"/"}>Person Gallery</Link>
      </Navbar.Brand>

      {
        location.pathname === "/cart"?
        (

          <Card bg="dark">
            <Card.Body style={{ color: "white"}}>All The Cart Person Listed Down Here.</Card.Body>
          </Card>

        ):(

          <Navbar.Text className='search'>
          <FormControl  placeholder='search by name' style={{ width: 500}} className='m-auto'
          onChange={(e) => 
            dispatchFilterContext({
              type: 'SEARCH_QUERY',
              payload: e.target.value
            })
          }
          />
          </Navbar.Text>
        )
      }

      <Nav>
      
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      
        <FiPhoneCall color='white' fontSize={'25px'} />
        <Badge bg='success'>{cart.length}</Badge> 

      </Dropdown.Toggle>

      <Dropdown.Menu style={{ minWidth: 500}}  className='dropdown-menu-end'>
      
      {
        cart.length > 0 ?
          <div className='person'>
          {
            cart.map(person => (

              <span className='cardItem' key={person.userid}>
              
                <div>

                  <img 
                  src={person.avatar}
                  className="cartItemImg"
                  alt={person.username} />

                </div>

                <div className="cartItemDetail">
                
                  <span>{person.username}</span>
                  <span>{person.email}</span>
                
                
                </div>
                
                <div>
                
                <AiFillDelete
                className='delete_connection'
                fontSize={"20px"}
                onClick={
                  () => 
                  dispatch({
                    type: 'REMOVE_CONTACT',
                    userid: person.userid
                  })
                } />
                
                
                </div>
              
              
              </span>
            

              ))

              
          }

          <Link to={"/cart"}>

          <Button style={{ width: '90%', margin: "0 10px" }}>
            Go To Cart
          </Button>

          </Link>
          
        </div>:
        (
          <span style={{ padding: 10}}>Cart is Empty</span>
        )
      }

      </Dropdown.Menu>
    </Dropdown>

      
      </Nav>
      
    </Container>
  </Navbar>
  )
}

export default Header