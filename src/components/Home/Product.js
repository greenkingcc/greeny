import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "50%" }}>
        <AniLink
          swipe
          top="entry"
          direction="left"
          to={`/produkte/${product.slug}`}
          entryOffset={8}
        >
          <Img fluid={product.image.fluid} className="card-img-top" />
        </AniLink>
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="price">{product.price}€</h6>
          <div className="container-btn">
            <div className="btn-holder">
              <AniLink
                swipe
                top="entry"
                direction="left"
                to={`/produkte/${product.slug}`}
                entryOffset={18}
              >
                <button className="btn btn-yellow btn-yellow-white-bg mt-3 text-capitalize buybtn">
                  Details
                </button>
              </AniLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
