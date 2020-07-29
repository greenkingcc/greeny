import React, { Component } from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo2.png";
import { IoIosMail } from "react-icons/io";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Showroom",
      },
      {
        id: 2,
        path: "/produkte",
        text: "Objekte",
      },
      {
        id: 3,
        path: "/archiv",
        text: "archiv",
      },
      {
        id: 4,
        path: "/ankauf",
        text: "Ankauf",
      },
      {
        id: 5,
        path: "/kontakt",
        text: "Kontakt",
      },
      {
        id: 6,
        path: "/service",
        text: "Service",
      },
    ],
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="Logogattinator" />
          <h6 className="subtitle">Classic Interior</h6>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <AniLink
                    paintDrip
                    to={link.path}
                    duration={0.5}
                    hex="#ff9e09"
                    className="nav-link text-capitalize"
                    activeStyle={{ fontWeight: "bold" }}
                  >
                    {link.text}
                  </AniLink>
                </li>
              );
            })}
            <li className="nav-item ml-sm-5">
              <IoIosMail className="mail-icon" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
