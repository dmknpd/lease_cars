import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";

import "./Contact.scss";

const Contact = () => {
  const [isSubmited, setIsSubmiter] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      resetForm();
      setIsSubmiter(true);
      setTimeout(() => {
        setIsSubmiter(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-us">
      <Header />
      <div className="contact-us__container">
        <h2 className="contact-us__header">Contact Us</h2>
        <h3 className="contact-us__title">
          Feel free to contact us with questions, potencial partnerships or
          media inquiries
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contact-us__form">
              <div className="contact-us__inputs">
                <div className="contact-us__input-container">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="contact-us__input"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="contact-us__input-container">
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="contact-us__input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="contact-us__text-container">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your text"
                  className="contact-us__text"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
              <p
                className="contact-us__submited"
                style={isSubmited ? { display: "block" } : null}
              >
                Спасибо! Мы скоро сважемся с Вами.
              </p>
              <button
                type="submit"
                className="contact-us__button"
                disabled={isSubmitting}
              >
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default Contact;
