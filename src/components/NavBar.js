import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CodeBucks
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
              <ul>
                <li>
                  <Link to="/mot-de-president" className="llink" onClick={handleClick}>
                    Mot Du President
                  </Link>
                </li>
                <li>
                  <Link to="/mot-de-president" className="llink">Mot Du Directeur</Link>
                </li>
                <li>
                  <Link to="/historique" className="llink">Historique de l'entreprise</Link>
                </li>
                <li>
                  <Link to="/prisentation" className="llink">Presentation</Link>
                </li>
                <li>
                  <Link to="/equipes" className="llink">Notre Equipe</Link>
                </li>

                <li>
                  <Link to="/services" className="llink">Services</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                Habitat
              </NavLink>
              <ul>
                <li>
                  <Link to="/mot-de-president" onClick={handleClick}>
                    Mot Du President
                  </Link>
                </li>
                <li>
                  <Link to="/mot-de-president">Mot Du Directeur</Link>
                </li>
                <li>
                  <Link to="/historique">Historique de l'entreprise</Link>
                </li>
                <li>
                  <Link to="/prisentation">Presentation</Link>
                </li>
                <li>
                  <Link to="/equipes">Notre Equipe</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
