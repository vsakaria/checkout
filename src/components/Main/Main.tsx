import React, { ReactElement } from "react";
import styles from "./styles/Main.module.css";

import { Formik, Field } from "formik";
import Rating from "@material-ui/lab/Rating";

const Main = (): ReactElement => {
  const [ratingValue, setRatingValue] = React.useState(0);

  return (
    <section className={styles.main}>
      <h1 className="primary-color">Checkout.com</h1>
      <Formik
        initialValues={{ name: "", email: "", rating: 0, comment: "" }}
        onSubmit={(values): void => {
          console.log(values);
        }}
      >
        {(props: any): ReactElement => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <Field
              as="input"
              className={styles.inputText}
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />

            <label htmlFor="email">Email:</label>
            <Field
              as="input"
              className={styles.inputText}
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
            />

            <label className={styles.block} htmlFor="rating">
              Rating:
            </label>
            <Rating
              name="rating"
              size="large"
              value={ratingValue}
              onChange={(e, newValue): void => {
                setRatingValue(Number(newValue));
                props.setFieldValue("rating", newValue);
              }}
            />

            <label className={styles.block} htmlFor="comment">
              Comments:
            </label>
            <Field
              as="textarea"
              className={styles.inputText}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.comment}
              name="comment"
            />
            <button className={styles.submit} type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default Main;
