import React, { useContext } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { CartContext } from '../context/Context';
import Rating from './Rating';

const Filters = () => {

  
  const { filterContext : {bySort, byEmail,byBirth,byRating}, dispatchFilterContext } = useContext(CartContext);
  
  // console.log(byEmail,bySort, byBirth,byRating);

  return (
    
    <div className='filters'>
    
      <span className='title'> Filter Options</span>

      <div>
     
        <span>
          
        <FormCheck
        inline
        label="Ascending (By Message Charge)"
        name='group1'
        type='radio'
        id={'inline-1'}
        onChange={() => {
          dispatchFilterContext({
            type: 'SORT_BY_MESSAGE_CHARGE',
            payload: 'toAscending'
          })
        }}

        checked={bySort === 'toAscending' ? true: false}
        />

        </span>
     
      </div>

      <div>
      
        <span>
        
        <FormCheck
        inline
        label="Descending"
        name='group1'
        type='radio'
        id={'inline-2'}
        onChange={() => {
          dispatchFilterContext({
            type: 'SORT_BY_MESSAGE_CHARGE',
            payload: 'toDescending'
          })
        }}

        checked={bySort === 'toDescending' ? true: false}
        />

        </span>
      
      
      
      
      </div>

    {/*<div>
      
        <span>
        
        <FormCheck
        inline
        label="Including out of reach"
        name='group1'
        type='radio'
        id={'inline-3'}
        onChange={
          () => {
            dispatchFilterContext({
              type: 'ALL_PERSON_INCLUDING_UNAVAILABLE',
              OutOfReach
            })
          }
        }
        checked={OutOfReach ? true: false}
        />

        </span>

      </div>*/}


      <div>
      
        <span>
        
        <FormCheck
        inline
        label="Email includes (hotmail.com)"
        name='group1'
        type='checkbox'
        id={'inline-4'}
        onChange={
          () => {
            dispatchFilterContext({
              type: 'BY_EMAIL',
              byEmail
            })
          }
        }
        checked={byEmail}
        />
    
        </span>
      
      

      </div>

      <div>
      
        <span>
        
        <FormCheck
        inline
        label="Date of Birth (Before 1970)"
        name='group1'
        type='checkbox'
        id={'inline-5'}
        onChange={
          () => {
            dispatchFilterContext({
              type: 'BY_BIRTH_OF_DATE',
              byBirth: byBirth

            })
          }
        }

        checked={byBirth}
        />
    
        </span>
      
      
      </div>


   <span>
    
      <label style={{paddingRight: 10}}>Based on Experience</label>
      <Rating rating={byRating} onClick={(i) => dispatchFilterContext({
        type: 'BY_RATING',
        payload: i+1
      })}  style={{ cursor: 'pointer'}} />
    
  </span> 

    <Button onClick={() => {
      dispatchFilterContext({
        type:'CLEAR_FILTER',
        payload:{
          bySort : '',
          byEmail: false,
          byBirth: false,
          byRating:0,
          // OutOfReach: false,
          searchQuery: ""
        }
      })
    }} style={{ margin: "20px 0", width: "100%"}} variant='light'>Clear Filters</Button>

    
    </div>
  )
}

export default Filters