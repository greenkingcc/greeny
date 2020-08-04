import React from "react";
import Title from "../Globals/Title";

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Jetzt kontaktieren" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/john.lester.kortmann@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Max Mustermann"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="name">E-Mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="name@email"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description"></label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Ihre Anfrage"
              ></textarea>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Abschick2en
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
