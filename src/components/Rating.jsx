import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rating,style,onClick}) => {
  return <>
    {
      [...Array(5)].map((_,i) => (

        <span key={i} onClick={() => onClick(i)}>
            {
              rating > i ?(
                <AiFillStar fontSize={'15px'} style={style} /> 
              ):(
                <AiOutlineStar fontSize={'15px'} style={style}/> 
              )
            }
        </span>
      ))
    }
    </>
  
}

export default Rating