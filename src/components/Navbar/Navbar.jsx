import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from "../../constants/images";
import './Navbar.css';

/* 
  1st component: the logo
  2nd component: list of options and href
  3rd component: login bar
  4th component: the minimenu 
*/
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className = "app__navbar">
      
      <div className = "app__navbar-logo">
        <img src = {images.tihiu} alt = "app logo" />
      </div>

      <ul className = "app__navbar-links">
          <li className = "p__opensans"><a href= "#home">Home</a></li>
          <li className = "p__opensans"><a href= "#about">About</a></li>
          <li className = "p__opensans"><a href= "#compsci">CompSci</a></li>
          <li className = "p__opensans"><a href= "#datasci">DataSci</a></li>
          <li className = "p__opensans"><a href= "#math">Mathematics</a></li>
          <li className = "p__opensans"><a href= "#contact">Contact</a></li>
      </ul>

      <div className ="app__navbar-login">
        <a href= "https://www.linkedin.com/in/kiet-nguyen-2oo1/" className= "p__opensans">Kyle</a>
        <div/>
        <a href= "https://www.linkedin.com/in/kunj-patel7/" className= "p__opensans">Kunj</a>
      </div>

      <div className = "app__navbar-smallscreen">
        <GiHamburgerMenu color = "#fff" fontSize={27} onClick = {() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick = {() => setToggleMenu(false)}/>
            <ul className = "app__navbar-smallscreen-links">
              <li className = "p__opensans"><a href= "#home">Home</a></li>
              <li className = "p__opensans"><a href= "#about">About</a></li>
              <li className = "p__opensans"><a href= "#compsci">CompSci</a></li>
              <li className = "p__opensans"><a href= "#datasci">DataSci</a></li>
              <li className = "p__opensans"><a href= "#math">Mathematics</a></li>
              <li className = "p__opensans"><a href= "#contact">Contact</a></li>
            </ul>
            </div>  
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;
