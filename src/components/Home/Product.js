import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "50%" }}>
        <AniLink
          cover
          key={product.slug}
          to={`/produkte/${product.slug}`}
          direction="left"
          duration={0.9}
          bg="url(http://images.ctfassets.net/i2jii7dx8u6a/72NBy2qymJfLWSBZeGeDVK/32e5eda90246b139f1673c3439542da2/couch15.png?w=1300&h=675&q=50)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */"
        >
          <Img fluid={product.image.fluid} className="card-img-top" />
        </AniLink>
        {/* {product.image.fluid.src} */}
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
