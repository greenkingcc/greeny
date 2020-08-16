import React from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaTwitter, FaFacebook, FaGooglePlus } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="page-footer font-small mdb-color lighten-3 pt-4 panel-footer panel-custom">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">Impressum</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <AniLink
                    paintDrip
                    to="#!"
                    duration={0.5}
                    hex="#ff9e09"
                    activeStyle={{ fontWeight: "bold" }}
                    className="footer-link"
                  >
                    Impressum{" "}
                  </AniLink>
                </p>
              </li>
              <li>
                <p>
                  <AniLink
                    paintDrip
                    to="#!"
                    duration={0.5}
                    hex="#ff9e09"
                    activeStyle={{ fontWeight: "bold" }}
                    className="footer-link"
                  >
                    AGB
                  </AniLink>
                </p>
              </li>
              <li>
                <p>
                  <AniLink
                    paintDrip
                    to="#!"
                    duration={0.5}
                    hex="#ff9e09"
                    activeStyle={{ fontWeight: "bold" }}
                    className="footer-link"
                  >
                    Datenschutz & DSGVO
                  </AniLink>
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none"></hr>

          <hr className="clearfix w-100 d-md-none"></hr>
          <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-home mr-3"></i> Dortmund, NRW, 44357, GER
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@Gattinator.de
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none"></hr>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        Copyright &copy; {new Date().getFullYear().toString()} by{" "}
        <AniLink
          paintDrip
          to={`/produkte`}
          duration={0.5}
          hex="#ff9e09"
          activeStyle={{ fontWeight: "bold" }}
          onclick="topFunction()"
        >
          Gattinator.de
        </AniLink>
        All rights reserved.
      </div>
    </footer>
  );
}
