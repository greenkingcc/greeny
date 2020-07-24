import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="price">{product.price}€</h6>
          <Link key={product.slug} to={`/produkte/${product.slug}`}>
            <button className="btn btn-yellow btn-yellow-white-bg mt-3 text-capitalize">
              Kaufen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
