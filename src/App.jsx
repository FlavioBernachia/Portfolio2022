import { useState } from "react";
import "./App.scss"
import Contact from "./components/contact/Contact.jsx";
import Intro from "./components/intro/intro"
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Topbar from "./components/topbar/topbar.jsx"
import Works from "./components/works/works.jsx";

function App() {
  const [openHamburger, setOpenHamburger] = useState(false)
  return (
    <div className="App">
      <Topbar openHamburger={openHamburger} setOpenHamburger={setOpenHamburger}/>
      <Menu openHamburger={openHamburger} setOpenHamburger={setOpenHamburger}/>
      <div className="sections">
        <Intro openHamburger={openHamburger} setOpenHamburger={setOpenHamburger}/>
        <Portfolio openHamburger={openHamburger} setOpenHamburger={setOpenHamburger} />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
