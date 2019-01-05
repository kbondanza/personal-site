import { Fragment } from "react";
import { Formik } from "formik";

const Contact = () => (
  <Fragment>
    <h2>Contact</h2>
    <Formik
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="message"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </Fragment>
);

export default Contact;
