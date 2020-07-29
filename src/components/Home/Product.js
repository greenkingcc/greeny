import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="price">{product.price}€</h6>
          <div className="container-btn">
            <div className="btn-holder">
              <AniLink
                fade
                key={product.slug}
                to={`/produkte/${product.slug}`}
                duration={0.6}
              >
                <button className="btn btn-yellow btn-yellow-white-bg mt-3 text-capitalize buybtn">
                  Kaufen
                </button>
              </AniLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
