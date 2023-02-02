import React from 'react'
import { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import {featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  desingPortfolio,
  contentPortfolio} from "../../data"

export default function Portfolio({openHamburger}) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "desing":
        setData(desingPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  

  const list = [
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"Web App",
    },
    {
      id:"mobile",
      title:"Mobile App",
    },
    {
      id:"desing",
      title:"Desing",
    },
    {
      id:"content",
      title:"Content",
    },
  ]
  return (
    <div className={'portfolio ' + (openHamburger && "active")} id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
        <PortfolioList title={item.title}
         active={selected === item.id} 
         setSelected={setSelected}
         id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d=>( 
        <div className="item">
          <img src={d.img}
          alt="" />
          <h3>{d.title}</h3>
        </div>
        ))};
      </div>
    </div>
  )
}
