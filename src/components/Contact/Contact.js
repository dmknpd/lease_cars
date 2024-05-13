import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import News from "../News/News";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-us">
      <Header />
      <div className="contact-us__container">
        <h2 className="contact-us__header">Contact Us</h2>
        <h3 className="contact-us__title">
          Feel free to contact us with questions, potencial partnerships or
          media inquiries
        </h3>
        <div className="contact-us__form">
          <div className="contact-us__inputs">
            <input
              type="text"
              className="contact-us__input"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              className="contact-us__input"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <textarea
            name="text"
            className="contact-us__text"
            placeholder="Your text"
          ></textarea>
        </div>
        <button className="contact-us__button">SUBMIT</button>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default Contact;
