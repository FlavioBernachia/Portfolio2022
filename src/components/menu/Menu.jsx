import React from 'react'
import "./menu.scss"

export default function Menu({openHamburger, setOpenHamburger}) {
  return (
    <div className={'menu ' + (openHamburger && "active")}>
        <ul>
            <li>
                <a href="#intro" onClick={()=> setOpenHamburger(false)}>Home</a>
            </li>
            <li>
                <a href="#portfolio" onClick={()=> setOpenHamburger(false)}>Portfolio</a>
            </li>
            <li>
                <a href="#work" onClick={()=> setOpenHamburger(false)}>Works</a>
            </li>
            <li>
                <a href="#testimonials" onClick={()=> setOpenHamburger(false)}>Testimonials</a>
            </li>
            <li>
                <a href="#contact" onClick={()=> setOpenHamburger(false)}>Contact</a>
            </li>
        </ul>
    </div>
  )
}
