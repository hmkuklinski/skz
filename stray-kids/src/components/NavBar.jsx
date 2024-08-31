import {Link} from "react-router-dom";

export default function NavBar(){
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <div className="navbar-logo">
          <img src="https://1000logos.net/wp-content/uploads/2020/02/Stray-Kids-Logo.png" alt="skz-logo" height="95px" width="250px"/>
        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/photocards">Photocards</Link></li>
      </ul>
    </nav>
  );
}