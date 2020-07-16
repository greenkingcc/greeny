import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Jetzt kontaktieren" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
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
              <label htmlFor="name">Email</label>
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
          </form>
        </div>
      </div>
    </section>
  )
}
