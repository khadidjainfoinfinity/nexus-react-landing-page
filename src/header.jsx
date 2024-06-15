import { useState } from 'react';
import menuImage from './images/menu-burger.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const myFunction = () => {
    const x = document.getElementById("myDIV");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    // Update React state as well
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">logo</div>
      <div className="menu">
        <button onClick={myFunction}>
          <img src={menuImage} alt="MENU" />
        </button>
      </div>
      <ul className="nav">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#root">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={`phone ${menuOpen ? 'open' : ''}`} id="myDIV" style={{ display: 'none' }}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#root">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
