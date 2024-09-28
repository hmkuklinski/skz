import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
    if (!isOpen){
      document.querySelector('.nav-links').style.display = "flex";
    }else{
      document.querySelector('.nav-links').style.display = "none";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://1000logos.net/wp-content/uploads/2020/02/Stray-Kids-Logo.png" alt="skz-logo" height="95px" width="250px" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? (
          <ion-icon name="close" size="large"></ion-icon>
        ) : (
          <ion-icon name="menu" size="large"></ion-icon> 
        )}
      </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/news">News</Link></li>
          {/* <li><Link to="/photocards">Photocards</Link></li> */}
        </ul>
    </nav>
  );
}
