import React, {useRef, useEffect} from 'react'
import "./header.css"

import { Container, Row } from "reactstrap";

import logo from "../../assets/images/pixy-low-resolution-logo-white-on-transparent-background.png"





const nav__links = [
	{
		path: "home",
		display: "// home",
	},
	{
		path: "expertise",
		display: "// expertise",
	},
	{
		path: "work",
		display: "// work",
	},
	{
		path: "experience",
		display: "// experience",
	},
  {
		path: "contact",
		display: "// contact",
	},
];


const Header = () => {
  
  const headerRef = useRef(null)
  const menuRef = useRef(null);


// Funkcja dodająca klasę "sticky__header" do nagłówka po przewinięciu strony o 80 pikseli

const stickyHeaderFunction = ()=>{
  window.addEventListener("scroll", ()=>{
    if(document.body.scrollTo > 80 || document.documentElement.scrollTop > 80){
      headerRef.currentList.add("sticky__header");
    }else{
      headerRef.currentList.remove("sticky__header");
    }
  })





}
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          

          <div className="navigation" ref={menuRef}>
            <ul className="menu">
              {nav__links.map((item, index) =>(
                <li className="nav_item" key={index}>
                  {item.display}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header