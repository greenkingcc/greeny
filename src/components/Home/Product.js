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
          <div class="container-btn">
            <div class="btn-holder">
              <AniLink
                cover
                key={product.slug}
                to={`/produkte/${product.slug}`}
                direction="left"
                duration={1}
                bg={
                  "url(http:" +
                  product.image.fluid.src +
                  ")" +
                  " center / cover" +
                  " no-repeat" +
                  " padding-box" +
                  " content-box" +
                  " white"
                }
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
