import React from 'react'
import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"

export default function topbar({openHamburger, setOpenHamburger}) {
  return (
    <div className={'topbar ' + (openHamburger && "active")}>
    <div className='wrapper'>
      <div className='left'>
        <a href='#intro' className='logo'>Bernachia DEV.</a>
        <div className='icons'>
          <Person/>
          {/* <span>+54 9 336 4272763</span> */}
        </div>
        <div className='icons'>
          <Mail/>
          {/* <span>Flaviobernachia@gmail.com</span> */}
        </div>
      </div>
      <div className='right'>
        <div className="hamburguer" onClick={()=> setOpenHamburger(!openHamburger)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
    </div>
  )
}
