import { NavLink } from "react-router-dom";

import "./Header.css";
import HeaderCartButton from "./HeaderButton";


const Header = (props) => {
  return (
    <div>
      <div className="flex shopping-card">
        <span>
          <NavLink to="/home">HOME</NavLink>
          
        </span>
        <span>
          <NavLink to="/store">STORE</NavLink>
        </span>
        <span>
          <NavLink to="/about">ABOUT</NavLink>
        </span>

        <HeaderCartButton onClick={props.onShowCart}/>
        <br />
      </div>

      <div className="generics generics-text">The Generics</div>
    </div>
  )
};

export default Header;
