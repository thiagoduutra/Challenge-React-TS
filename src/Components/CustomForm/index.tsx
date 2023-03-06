import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "../../schema/FormSchema";
import "./style.css";

interface IformikValues {
  email: string;
}

const initialValues = {
  email: "",
};

const CustomForm = () => {
  const handleFormikNewsLetter = (values: IformikValues) => {
    console.log(values);
  };
  return (
    <Formik
      onSubmit={handleFormikNewsLetter}
      initialValues={initialValues}
      validationSchema={FormSchema}
    >
      {({ errors, touched }) => (
        <Form className="footer-newsletter">
          <div className="footer-newsletter__input">
            <label htmlFor="email" className="footer-newsletter__title">
              ASSINE NOSSA NEWSLETTER
            </label>
            <Field
              id="email"
              name="email"
              placeholder="E-mail"
              className={errors.email && touched.email && "invalid"}
            />
            <ErrorMessage
              component="span"
              className="footer-newsletter__errorMsg"
              name="email"
            />
          </div>
          <div className="btn-submit">
            <button type="submit">ENVIAR</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
