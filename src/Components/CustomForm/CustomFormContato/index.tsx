import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import FormSchemaCont from "../../../schema/FormSchemaCont";

export interface IformikValues {
  name: string;
  email: string;
  cpf: string;
  dataNasc: string;
  tel: string;
  instagram: string;
  declaro: boolean;
}

const initialValues: IformikValues = {
  name: "",
  email: "",
  cpf: "",
  dataNasc: "",
  tel: "",
  instagram: "",
  declaro: false,
};

const CustomFormCont = () => {
  const handleForm = (
    values: IformikValues,
    { resetForm }: FormikHelpers<IformikValues>
  ) => {
    setSubmitted(true);
    resetForm();
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="main-form">
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchemaCont}
        onSubmit={handleForm}
      >
        {({ errors, touched }) => (
          <Form className="container-form__description">
            <div>
              <h2>Preencha o Formulário</h2>

              <div className="container-form__labels">
                <label htmlFor="name">Nome</label>
                <Field
                  render=""
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  className={errors.name && touched.name && "invalid"}
                />
                <ErrorMessage
                  component="span"
                  name="name"
                  className="form-invalid"
                />
              </div>

              <div className="container-form__labels">
                <label htmlFor="email">E-mail</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className={errors.email && touched.email && "invalid"}
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-invalid"
                />
              </div>

              <div className="container-form__labels">
                <label htmlFor="cpf">CPF</label>
                <Field
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                  className={errors.cpf && touched.cpf && "invalid"}
                />
                <ErrorMessage
                  component="span"
                  name="cpf"
                  className="form-invalid"
                />
              </div>

              <div className="container-form__labels">
                <label htmlFor="dataNasc">Data de Nascimento</label>
                <Field
                  id="dataNasc"
                  name="dataNasc"
                  placeholder="00.00.0000"
                  className={errors.dataNasc && touched.dataNasc && "invalid"}
                />
                <ErrorMessage
                  component="span"
                  name="dataNasc"
                  className="form-invalid"
                />
              </div>

              <div className="container-form__labels">
                <label htmlFor="tel">Telefone</label>
                <Field
                  id="tel"
                  name="tel"
                  placeholder="(00) 00000 0000"
                  className={errors.tel && touched.tel && "invalid"}
                />
                <ErrorMessage
                  component="span"
                  name="tel"
                  className="form-invalid"
                />
              </div>

              <div className="container-form__labels">
                <label htmlFor="instagram">Instagram</label>
                <Field
                  id="instagram"
                  name="instagram"
                  placeholder="@seuuser"
                  className={errors.instagram && touched.instagram && "invalid"}
                />
                <ErrorMessage
                  component="span"
                  name="instagram"
                  className="form-invalid"
                />
              </div>

              <div className="container-checkbox">
                <label htmlFor="check">
                  * <u>Declaro que li e aceito</u>
                </label>
                <Field
                  type="checkbox"
                  id="declaro"
                  name="declaro"
                  className={errors.declaro && touched.declaro && "invalido"}
                />
                <ErrorMessage
                  component="span"
                  name="declaro"
                  className="form-invalid form-invalid-declaro"
                />
              </div>
            </div>
            <div className="container-btn">
              <button className="btn-contato" type="submit">
                CADASTRE-SE
              </button>
              {submitted ? (
                <span className="btn-msg">*Formulário enviado com sucesso</span>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomFormCont;
