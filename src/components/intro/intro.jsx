import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from "ityped";

export default function Intro({openHamburger}) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings:["Frontend Developer Jr", "Fullstack jr", "Designer"],
    });
  }, []);
  
  return (
    <div className='intro' id='intro'>
      <div className={"left "+ (openHamburger && "active")}>
        <div className="titulo"> FLA</div>
        <div className="subtitulo"></div>
      </div>
      <div className={"right "+ (openHamburger && "active")}>
        <div className="wrapper">
          <h2>Hi there, i´m</h2>
          <h1>Flavio Bernachia</h1>
          <h3> <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio"><img src="assets/down.png" alt="" /></a>
      </div>
    </div>
  )
}
