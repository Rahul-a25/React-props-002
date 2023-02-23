import React from 'react'
import "./card.css"
import {FaShareAlt,FaHeart} from 'react-icons/fa';
import { BiMessage } from "react-icons/bi";
 


 export const Share = () => {
  return (
    <div>
      <FaShareAlt className='icon share'/>
    </div>
  )
}

export const Heart = () => {
  return (
    <div>
      <FaHeart className='icon heart'/>
    </div>
  )
}
export const Msg = () => {
 
  return (
    <div>
      <BiMessage className='icon msg'/>
    </div>
  )
}

 





const Card = (props) => {
  return (
    <div>
      <div style={{ 
      backgroundImage: `url(${props.bg})` 
    }} className="main">
            <div className="left-main">
                   <div className='upper'>
                         <div className='imgwala'><img width={100} height={100} src={props.img} alt="nothing" /></div>
                         <div className='brightwala'>
                            <h1>{props.name}</h1>
                            <p className='pwala'> {props.head}</p>

                         <div className="btnwala"><button className='gap'> {props.btn}</button>
                         <p className='gap'>Action ,Crime,Fantsay</p>
                         </div>

                         </div>
                   </div>
                   <div className='middle'>
                        <p>
                          {props.para}
                       
                        </p>
                       
                   </div>
                   <div className='lower'>
                    <Share/>
                    <Heart/>
                    <Msg/>
                   </div>
            </div>
            <div className="right-main">
              {/* <img  src="https://filmfare.wwmindia.com/thumb/content/2022/jul/thorloveandthunder51657084424.jpg?width=1200&height=1200" alt="" /> */}
              {/* <img width={1000} src={props.img} alt="" /> */}
              {/* <img src={props.style} alt="" /> */}
            </div>
      </div>
    </div>
  )
}

export default Card
