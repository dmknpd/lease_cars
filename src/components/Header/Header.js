import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../img/logo-white.png";

const Header = ({ bgColor = "var(--black)" }) => {
  return (
    <header className="header" style={{ backgroundColor: bgColor }}>
      <div className="header__container">
        <div className="header__logo-container">
          <Link to="/" className="header__menu-link">
            <img src={logo} alt="D&M logo" className="header__logo" />
          </Link>
        </div>
        <div
          className="header__menu-container
        "
        >
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link to="/cars" className="header__menu-link">
                NEW CARS
              </Link>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                PRE-OWNED CARS
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                FINANCE
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                LEASE VS BUY
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
