import React from 'react'
import "./menu.scss"
import Iframe from "react-iframe"

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
        <Iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/album/060SvgMzLKrNzpvVLK5gSo?utm_source=generator&theme=0" width="250" 
        height="152" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></Iframe>
    </div>
  )
}
