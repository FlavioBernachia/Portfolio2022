import React, { useState } from 'react'
import "./works.scss"
import {cardWorks} from "../../data.js"
export default function Works() {
  const [currentSilder, setCurrentSilder] = useState(0)
  const data = cardWorks;

  const handleClick= (way)=>{
    way === "left" ? setCurrentSilder(currentSilder > 0 ? currentSilder - 1 : 2) 
    : setCurrentSilder(currentSilder<data.length -1 ? currentSilder +1 : 0) 
  }
  return (
    <div className='work' id='work'>
      <div className="slider" style={{transform:`translateX(-${currentSilder * 100}vw)`}}>
      {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span><a href={d.link}>Projects</a></span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
          ))}
      </div>
      <img src="assets/down.png" alt="" className='arrow left' onClick={()=> handleClick("left")}/>
      <img src="assets/down.png" alt="" className='arrow right'onClick={()=> handleClick("right")}/>
    </div>
  )
}
