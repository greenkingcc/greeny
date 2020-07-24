import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Über uns" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus consectetur saepe sapiente aliquid reiciendis mollitia
              alias enim, quo, adipisci culpa quasi facere earum atque ad nulla
              iste, laudantium iure praesentium inventore asperiores quisquam
              harum suscipit quia. Minus ab ipsum omnis, quam odit praesentium
              distinctio at, asperiores, est ad quibusdam ullam?
            </p>
            <Link to="/produkte/">
              <button className="btn text-uppercase btn-yellow btn-yellow-white-bg">
                Jetzt stöbern!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
